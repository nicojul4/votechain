import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const NAMES = ['KPU', 'Bawaslu', 'Komdigi', 'Kampus A', 'Kampus B', 'Audit A', 'Audit B'];
const TINT = { active: 0x55e3d2, faulty: 0xff7185, offline: 0x75849b };
const STAGES = [
  { title: 'Periksa kelayakan', icon: '◉' },
  { title: 'Terbitkan credential', icon: '◇' },
  { title: 'Kirim ballot rahasia', icon: '▣' },
  { title: 'Sepakati dengan PBFT', icon: '⌘' },
  { title: 'Catat ke ledger', icon: '▤' },
  { title: 'Hitung & audit hasil', icon: '◫' },
];

function VoteChainScene({ stage, statuses, onToggle }) {
  const hostRef = useRef(null);
  const stageRef = useRef(stage);
  const statusesRef = useRef(statuses);
  const onToggleRef = useRef(onToggle);
  stageRef.current = stage;
  statusesRef.current = statuses;
  onToggleRef.current = onToggle;

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return undefined;
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' });
    } catch {
      host.dataset.webgl = 'unavailable';
      return undefined;
    }
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x08111d, 0.038);
    const camera = new THREE.PerspectiveCamera(37, 1, 0.1, 80);
    camera.position.set(0, 8.6, 13.4);
    camera.lookAt(0, 0.35, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    host.appendChild(renderer.domElement);

    scene.add(new THREE.HemisphereLight(0xa6c7ef, 0x1b2934, 1.85));
    const sun = new THREE.DirectionalLight(0x9af7e9, 2.7);
    sun.position.set(-5, 9, 7);
    scene.add(sun);
    const amberLight = new THREE.PointLight(0xffbd6b, 30, 11);
    amberLight.position.set(-4.1, 2.1, 0.6);
    scene.add(amberLight);
    const ledgerLight = new THREE.PointLight(0x56daca, 45, 8);
    ledgerLight.position.set(0, 2.4, 0);
    scene.add(ledgerLight);
    const resultLight = new THREE.PointLight(0x759aff, 22, 8);
    resultLight.position.set(4.1, 2.1, -0.2);
    scene.add(resultLight);

    const system = new THREE.Group();
    scene.add(system);
    const platform = new THREE.Mesh(new THREE.CylinderGeometry(5.7, 5.25, 0.42, 12), new THREE.MeshStandardMaterial({ color: 0x192b37, roughness: 0.76, metalness: 0.12 }));
    platform.position.y = -0.28;
    system.add(platform);
    const top = new THREE.Mesh(new THREE.CylinderGeometry(5.58, 5.58, 0.09, 12), new THREE.MeshStandardMaterial({ color: 0x1e3c3d, roughness: 0.9 }));
    top.position.y = -0.025;
    system.add(top);
    const rim = new THREE.Mesh(new THREE.TorusGeometry(5.57, 0.018, 5, 100), new THREE.MeshBasicMaterial({ color: 0x5de0d1, transparent: true, opacity: 0.4 }));
    rim.rotation.x = Math.PI / 2;
    rim.position.y = 0.015;
    system.add(rim);

    // Small, consistent kiosk builder. Shapes communicate roles without long labels.
    const stations = [];
    const makeKiosk = (x, z, color, kind) => {
      const group = new THREE.Group();
      group.position.set(x, 0.02, z);
      system.add(group);
      const base = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.63, 0.16, 8), new THREE.MeshStandardMaterial({ color: 0x2c4354, roughness: 0.55 }));
      base.position.y = 0.08;
      group.add(base);
      const body = new THREE.Mesh(new THREE.BoxGeometry(0.56, 0.66, 0.4), new THREE.MeshStandardMaterial({ color: 0x22384a, metalness: 0.16, roughness: 0.42 }));
      body.position.y = 0.48;
      group.add(body);
      const panel = new THREE.Mesh(new THREE.PlaneGeometry(kind === 'result' ? 0.68 : 0.3, kind === 'result' ? 0.47 : 0.35), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.78 }));
      panel.position.set(0, kind === 'result' ? 0.55 : 0.51, 0.205);
      group.add(panel);
      const cap = new THREE.Mesh(new THREE.BoxGeometry(0.68, 0.08, 0.48), new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 0.17, roughness: 0.4 }));
      cap.position.y = 0.86;
      group.add(cap);
      return { group, panel, cap };
    };
    const identity = makeKiosk(-4.0, -0.45, 0xffc76b, 'identity');
    const voter = makeKiosk(-4.18, 2.05, 0x719cff, 'voter');
    const result = makeKiosk(4.06, -0.55, 0x6da1ff, 'result');
    // Result bars are hidden until the tally stage.
    const resultBars = [];
    for (let i = 0; i < 3; i++) {
      const bar = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.2, 0.035), new THREE.MeshBasicMaterial({ color: [0x58e6d3, 0x789cff, 0xffc76b][i], transparent: true, opacity: 0 }));
      bar.position.set(3.83 + i * 0.22, 0.5, 0.218);
      system.add(bar);
      resultBars.push(bar);
    }

    // Seven validator stands encircle the shared ledger.
    const nodePositions = [];
    const nodeVisuals = [];
    const rayTargets = [];
    for (let i = 0; i < 7; i++) {
      const a = Math.PI * 2 * i / 7 - Math.PI / 2;
      const pos = new THREE.Vector3(Math.cos(a) * 2.62, 0.02, Math.sin(a) * 2.32);
      nodePositions.push(pos);
      const group = new THREE.Group();
      group.position.copy(pos);
      system.add(group);
      const foot = new THREE.Mesh(new THREE.CylinderGeometry(0.33, 0.39, 0.14, 6), new THREE.MeshStandardMaterial({ color: 0x324757 }));
      foot.position.y = 0.09;
      group.add(foot);
      const body = new THREE.Mesh(new THREE.BoxGeometry(0.39, 0.43, 0.33), new THREE.MeshStandardMaterial({ color: 0x273d4d, roughness: 0.48 }));
      body.position.y = 0.37;
      group.add(body);
      const roof = new THREE.Mesh(new THREE.ConeGeometry(0.34, 0.23, 5), new THREE.MeshStandardMaterial({ color: TINT.active, emissive: TINT.active, emissiveIntensity: 0.2, roughness: 0.44 }));
      roof.position.y = 0.7;
      group.add(roof);
      const halo = new THREE.Mesh(new THREE.TorusGeometry(0.43, 0.014, 5, 28), new THREE.MeshBasicMaterial({ color: TINT.active, transparent: true, opacity: 0.42 }));
      halo.position.y = 0.41;
      halo.rotation.x = Math.PI / 2;
      group.add(halo);
      const hit = new THREE.Mesh(new THREE.SphereGeometry(0.48, 10, 8), new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false }));
      hit.position.y = 0.4;
      hit.userData.index = i;
      group.add(hit);
      nodeVisuals.push({ group, roof, halo });
      rayTargets.push(hit);
    }

    // Ledger stack and incoming block are animated as the chain commits the ballot.
    const ledger = new THREE.Group();
    ledger.position.set(0, 0, 0);
    system.add(ledger);
    const ledgerBase = new THREE.Mesh(new THREE.CylinderGeometry(0.88, 1.02, 0.14, 8), new THREE.MeshStandardMaterial({ color: 0x35505b, metalness: 0.2 }));
    ledgerBase.position.y = 0.12;
    ledger.add(ledgerBase);
    const chainBlocks = [];
    for (let i = 0; i < 5; i++) {
      const block = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.25, 0.52), new THREE.MeshStandardMaterial({ color: 0x183943, emissive: 0x1b9b8a, emissiveIntensity: 0.48, metalness: 0.26, roughness: 0.33 }));
      block.position.set((i % 2 ? 0.12 : -0.12), 0.34 + i * 0.29, 0);
      block.rotation.y = (i % 2 ? -0.08 : 0.08);
      ledger.add(block);
      chainBlocks.push(block);
    }
    const ledgerRing = new THREE.Mesh(new THREE.TorusGeometry(0.97, 0.016, 5, 64), new THREE.MeshBasicMaterial({ color: 0x65c7ff, transparent: true, opacity: 0.7 }));
    ledgerRing.rotation.x = Math.PI / 2;
    ledgerRing.position.y = 0.2;
    ledger.add(ledgerRing);

    // Static routes make the flow legible; packets move along them at each stage.
    const routes = [];
    const routeMaterial = new THREE.LineBasicMaterial({ color: 0x5bdace, transparent: true, opacity: 0.22 });
    const addRoute = (from, to) => {
      const curve = new THREE.QuadraticBezierCurve3(
        new THREE.Vector3(from.x, 0.23, from.z),
        new THREE.Vector3((from.x + to.x) / 2, 0.88, (from.z + to.z) / 2),
        new THREE.Vector3(to.x, 0.25, to.z),
      );
      const points = curve.getPoints(32);
      const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), routeMaterial.clone());
      system.add(line);
      routes.push({ curve, line });
    };
    addRoute(new THREE.Vector3(-4.0, 0, -0.45), new THREE.Vector3(-4.18, 0, 2.05));
    addRoute(new THREE.Vector3(-4.18, 0, 2.05), nodePositions[0]);
    nodePositions.forEach((position) => addRoute(position, new THREE.Vector3(0, 0, 0)));
    addRoute(new THREE.Vector3(0, 0, 0), new THREE.Vector3(4.06, 0, -0.55));

    const ballot = new THREE.Mesh(new THREE.OctahedronGeometry(0.13, 0), new THREE.MeshStandardMaterial({ color: 0xd5fff8, emissive: 0x55e3d2, emissiveIntensity: 1.2, metalness: 0.12 }));
    system.add(ballot);
    const credential = new THREE.Mesh(new THREE.DodecahedronGeometry(0.16, 0), new THREE.MeshStandardMaterial({ color: 0xffd58a, emissive: 0xffad48, emissiveIntensity: 1.1, metalness: 0.3 }));
    system.add(credential);
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    let down = false, moved = false, start = { x: 0, y: 0 }, frame = 0;
    const resize = () => {
      const w = Math.max(host.clientWidth, 1), h = Math.max(host.clientHeight, 260);
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.position.set(0, w < 560 ? 10.5 : 8.6, w < 560 ? 16.5 : 13.4);
      camera.lookAt(0, 0.35, 0);
      camera.updateProjectionMatrix();
    };
    const pointerDown = (event) => { down = true; moved = false; start = { x: event.clientX, y: event.clientY }; renderer.domElement.setPointerCapture(event.pointerId); };
    const pointerMove = (event) => {
      if (!down) return;
      if (Math.abs(event.clientX - start.x) + Math.abs(event.clientY - start.y) > 4) moved = true;
      system.rotation.y += (event.clientX - start.x) * 0.0008;
      start = { x: event.clientX, y: event.clientY };
    };
    const pointerUp = (event) => {
      if (down && !moved) {
        const rect = renderer.domElement.getBoundingClientRect();
        pointer.set(((event.clientX - rect.left) / rect.width) * 2 - 1, -((event.clientY - rect.top) / rect.height) * 2 + 1);
        raycaster.setFromCamera(pointer, camera);
        const hit = raycaster.intersectObjects(rayTargets, false)[0];
        if (hit) onToggleRef.current(hit.object.userData.index);
      }
      down = false;
    };
    renderer.domElement.addEventListener('pointerdown', pointerDown);
    renderer.domElement.addEventListener('pointermove', pointerMove);
    renderer.domElement.addEventListener('pointerup', pointerUp);
    renderer.domElement.addEventListener('pointercancel', pointerUp);
    const observer = new ResizeObserver(resize);
    observer.observe(host);
    resize();

    const setVisible = (object, visible) => { object.visible = visible; };
    const update = () => {
      frame = requestAnimationFrame(update);
      const t = performance.now() * 0.001;
      const current = stageRef.current;
      const phaseProgress = current === 3 ? (t * 0.9) % 1 : 0;
      system.position.y = Math.sin(t * 0.65) * 0.045;
      system.rotation.y += down ? 0 : Math.sin(t * 0.18) * 0.00008;
      ledgerRing.rotation.z += 0.004;
      identity.cap.material.emissiveIntensity = current === 0 ? 0.55 + Math.sin(t * 4) * 0.35 : 0.12;
      voter.cap.material.emissiveIntensity = current === 2 ? 0.7 + Math.sin(t * 5) * 0.25 : 0.13;
      result.cap.material.emissiveIntensity = current === 5 ? 0.65 + Math.sin(t * 3) * 0.25 : 0.12;

      // The credential only exists in the first two animation states.
      setVisible(credential, current === 1);
      if (current === 1) {
        credential.position.set(-4.02 + Math.sin(t * 1.6) * 0.13, 1.2 + Math.sin(t * 2) * 0.1, 0.35);
        credential.rotation.y += 0.025;
      }
      setVisible(ballot, current === 2 || current === 3);
      if (current === 2) {
        const p = (t * 0.19) % 1;
        ballot.position.set(-4.1 + 4.1 * p, 0.8 + Math.sin(p * Math.PI) * 0.85, 2.05 * (1 - p));
        ballot.rotation.x += 0.035;
        ballot.rotation.y += 0.045;
      } else if (current === 3) {
        const target = nodePositions[0];
        ballot.position.set(target.x * (1 - phaseProgress), 0.7 + Math.sin(phaseProgress * Math.PI) * 0.55, target.z * (1 - phaseProgress));
        ballot.rotation.y += 0.05;
      }
      chainBlocks.forEach((block, i) => {
        const failedQuorum = statusesRef.current.filter((status) => status !== 'active').length >= 3;
        const committed = current >= 4 && !failedQuorum ? 4 : current === 3 && !failedQuorum && i < 2 ? 2 : 0;
        block.visible = i < committed;
        block.material.emissiveIntensity = 0.38 + Math.sin(t * 1.8 + i) * 0.1;
      });
      routes.forEach(({ line }, i) => {
        const active = current === 0 ? i === 0 : current === 1 ? i === 0 : current === 2 ? i === 1 : current === 3 ? i >= 2 && i <= 8 : current >= 4 ? i === 9 : false;
        line.material.opacity = active ? 0.78 + Math.sin(t * 5 + i) * 0.18 : 0.14;
        line.material.color.setHex(active ? (current === 3 ? 0xffc76b : 0x65e9d7) : 0x486376);
      });
      nodeVisuals.forEach(({ group, roof, halo }, i) => {
        const status = statusesRef.current[i];
        const isByzantine = status === 'faulty';
        let color = status === 'active' ? TINT.active : TINT[status];
        if (current === 3 && status === 'active' && i / 7 <= phaseProgress) color = 0x79e2a4;
        roof.material.color.setHex(color);
        roof.material.emissive.setHex(color);
        roof.material.emissiveIntensity = status === 'active' ? 0.18 + (current === 3 ? Math.sin(t * 8 + i) * 0.45 + 0.5 : Math.sin(t * 2 + i) * 0.1) : 0.04;
        halo.material.color.setHex(isByzantine ? 0xff7185 : color);
        halo.material.opacity = status === 'active' ? 0.45 + Math.sin(t * 2 + i) * 0.1 : 0.82;
        group.position.y = 0.02 + (status === 'active' ? Math.sin(t * 1.6 + i) * 0.035 : 0);
      });
      resultBars.forEach((bar, i) => {
        const visible = current === 5;
        bar.material.opacity += ((visible ? 0.9 : 0) - bar.material.opacity) * 0.06;
        bar.visible = bar.material.opacity > 0.025;
        const heights = [0.37, 0.23, 0.16];
        bar.scale.y = heights[i] / 0.2;
        bar.position.y = 0.28 + heights[i] / 2;
      });
      renderer.render(scene, camera);
    };
    update();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      renderer.domElement.removeEventListener('pointerdown', pointerDown);
      renderer.domElement.removeEventListener('pointermove', pointerMove);
      renderer.domElement.removeEventListener('pointerup', pointerUp);
      renderer.domElement.removeEventListener('pointercancel', pointerUp);
      scene.traverse((object) => {
        object.geometry?.dispose();
        if (Array.isArray(object.material)) object.material.forEach((material) => material.dispose());
        else object.material?.dispose();
      });
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div className="demo-canvas" ref={hostRef} role="img" aria-label="Animasi 3D demo proses pemilihan VoteChain" />;
}

export default function VoteChainDemo() {
  const [stage, setStage] = useState(-1);
  const [playing, setPlaying] = useState(false);
  const [statuses, setStatuses] = useState(Array(7).fill('active'));
  const faulty = statuses.filter((status) => status !== 'active').length;

  useEffect(() => {
    if (faulty >= 3 && stage >= 3) {
      if (playing) setPlaying(false);
      if (stage > 3) setStage(3);
      return undefined;
    }
    if (!playing) return undefined;
    const timer = window.setTimeout(() => {
      if (stage >= STAGES.length - 1) setPlaying(false);
      else setStage((value) => value + 1);
    }, 2850);
    return () => window.clearTimeout(timer);
  }, [playing, stage, faulty]);

  const toggleNode = (index) => setStatuses((current) => current.map((status, i) => i !== index ? status : status === 'active' ? 'faulty' : status === 'faulty' ? 'offline' : 'active'));
  const start = () => {
    if (stage < 0 || stage === STAGES.length - 1) setStage(0);
    setPlaying(true);
  };
  const reset = () => { setPlaying(false); setStage(-1); setStatuses(Array(7).fill('active')); };
  const next = () => { setPlaying(false); setStage((value) => Math.min(STAGES.length - 1, Math.max(0, value + 1))); };
  const previous = () => { setPlaying(false); setStage((value) => Math.max(0, value - 1)); };
  const shownStage = Math.max(stage, 0);
  const blocked = faulty >= 3 && stage >= 3;

  return <section className="demo-game" aria-label="Demo animasi sistem VoteChain">
    <div className="demo-head">
      <div><div className="demo-eyebrow">DEMO INTERAKTIF · 3D</div><h2>{stage < 0 ? 'Satu suara melewati jaringan.' : blocked ? 'Quorum terputus.' : STAGES[shownStage].title + '.'}</h2></div>
      <div className="demo-count">{stage < 0 ? 'SIAP' : `0${shownStage + 1} / 06`}</div>
    </div>
    <div className="demo-stage-wrap">
      <VoteChainScene stage={stage} statuses={statuses} onToggle={toggleNode} />
      <div className="demo-actor-tag tag-identity"><span>◉</span> IDENTITAS</div>
      <div className="demo-actor-tag tag-voter"><span>▣</span> PEMILIH</div>
      <div className="demo-actor-tag tag-ledger"><span>◈</span> LEDGER</div>
      <div className="demo-actor-tag tag-result"><span>◫</span> HASIL</div>
      <div className={`demo-toast ${blocked ? 'warning' : ''}`}>{stage < 0 ? 'Putar pulau · klik validator · jalankan alur' : blocked ? '3 node bermasalah · di luar asumsi PBFT' : STAGES[shownStage].icon + '  ' + STAGES[shownStage].title}</div>
    </div>
    <div className="demo-footer">
      <div className="demo-timeline" aria-label="Tahap demo">{STAGES.map((item, index) => <button key={item.title} className={index === stage ? 'selected' : index < stage ? 'passed' : ''} aria-label={`Tahap ${index + 1}: ${item.title}`} disabled={faulty >= 3 && index > 3} onClick={() => { setPlaying(false); setStage(index); }} />)}</div>
      <div className="demo-controls"><button className="demo-icon-button" onClick={previous} aria-label="Tahap sebelumnya" disabled={stage <= 0}>←</button><button className="demo-play-button" onClick={playing ? () => setPlaying(false) : start} disabled={!playing && blocked}>{playing ? 'Ⅱ  Jeda' : blocked ? 'Perbaiki node dahulu' : stage < 0 || stage === 5 ? '▶  Jalankan demo' : '▶  Lanjutkan'}</button><button className="demo-icon-button" onClick={next} aria-label="Tahap berikutnya" disabled={stage >= 5 || blocked}>→</button><button className="demo-reset" onClick={reset}>Reset ↺</button></div>
    </div>
    <div className="demo-node-strip"><span className="strip-hint">Klik node 3D atau tombol untuk mengubah kondisi:</span>{NAMES.map((name, index) => <button key={name} onClick={() => toggleNode(index)} className={`demo-node-pill ${statuses[index]}`}><i />{name}</button>)}<span className={`fault-counter ${faulty >= 3 ? 'over' : ''}`}>{faulty}/7 gangguan</span></div>
  </section>;
}
