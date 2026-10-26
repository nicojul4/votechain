import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const NODE_COUNT = 7;
const COLORS = { active: 0x58e6d3, faulty: 0xff7185, offline: 0x72819a };
const NODE_NAMES = ['KPU Pusat', 'Bawaslu', 'Komdigi', 'Universitas A', 'Universitas B', 'Auditor A', 'Auditor B'];

function makeMaterial(color, options = {}) {
  return new THREE.MeshStandardMaterial({ color, roughness: 0.74, metalness: 0.06, ...options });
}

/** Low-poly floating island: one readable object for the VoteChain network. */
export default function Network3D({ statuses, onToggleNode }) {
  const hostRef = useRef(null);
  const callbackRef = useRef(onToggleNode);
  const statusesRef = useRef(statuses);
  callbackRef.current = onToggleNode;
  statusesRef.current = statuses;

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return undefined;
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' });
    } catch (error) {
      host.dataset.webgl = 'unavailable';
      return undefined;
    }

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x080d17, 0.035);
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 80);
    camera.position.set(0, 4.9, 12.6);
    camera.lookAt(0, 0.55, 0);

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    host.appendChild(renderer.domElement);

    scene.add(new THREE.HemisphereLight(0x99c7ff, 0x17243a, 2.0));
    const key = new THREE.DirectionalLight(0x80f2e5, 2.7);
    key.position.set(-4, 8, 6);
    scene.add(key);
    const warm = new THREE.PointLight(0xffbd6d, 28, 16);
    warm.position.set(0, 3.8, 1);
    scene.add(warm);
    const blue = new THREE.PointLight(0x547cff, 24, 20);
    blue.position.set(5, -1, -4);
    scene.add(blue);

    // Sparse stars give the island depth without loading image or model assets.
    const starPositions = [];
    let seed = 17;
    const random = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
    for (let i = 0; i < 150; i++) starPositions.push((random() - 0.5) * 24, random() * 12 - 1, -5 - random() * 11);
    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3));
    scene.add(new THREE.Points(starGeometry, new THREE.PointsMaterial({ color: 0x9bb9da, size: 0.025, transparent: true, opacity: 0.65 })));

    const island = new THREE.Group();
    scene.add(island);
    const rockGeometry = new THREE.IcosahedronGeometry(3.8, 2);
    const rockPositions = rockGeometry.attributes.position;
    for (let i = 0; i < rockPositions.count; i++) {
      const x = rockPositions.getX(i), y = rockPositions.getY(i), z = rockPositions.getZ(i);
      const wobble = 1 + 0.055 * Math.sin(x * 7 + z * 3) * Math.cos(y * 6 - z * 4);
      rockPositions.setXYZ(i, x * wobble, y * wobble * 0.22, z * wobble * 0.86);
    }
    rockGeometry.computeVertexNormals();
    const rock = new THREE.Mesh(rockGeometry, makeMaterial(0x24334a, { flatShading: true, roughness: 1 }));
    rock.position.y = -0.95;
    island.add(rock);

    const cliffRim = new THREE.Mesh(new THREE.CylinderGeometry(3.65, 3.15, 0.38, 10, 1), makeMaterial(0x263c4b, { flatShading: true }));
    cliffRim.position.y = -0.28;
    island.add(cliffRim);
    const meadow = new THREE.Mesh(new THREE.CylinderGeometry(3.64, 3.64, 0.13, 10), makeMaterial(0x315448, { roughness: 0.94 }));
    meadow.position.y = -0.06;
    island.add(meadow);
    const meadowTop = new THREE.Mesh(new THREE.CircleGeometry(3.58, 10), new THREE.MeshStandardMaterial({ color: 0x29483f, roughness: 1, side: THREE.DoubleSide }));
    meadowTop.rotation.x = -Math.PI / 2;
    meadowTop.position.y = 0.012;
    island.add(meadowTop);

    const islandHalo = new THREE.Mesh(new THREE.TorusGeometry(4.0, 0.012, 6, 96), new THREE.MeshBasicMaterial({ color: 0x55decf, transparent: true, opacity: 0.34 }));
    islandHalo.rotation.x = Math.PI / 2;
    islandHalo.position.y = -0.16;
    island.add(islandHalo);

    // Shared ledger hub: the stacked blocks represent committed history.
    const hub = new THREE.Group();
    island.add(hub);
    const hubBase = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.25, 0.16, 8), makeMaterial(0x263a50, { metalness: 0.22 }));
    hubBase.position.y = 0.1;
    hub.add(hubBase);
    const ledgerMat = makeMaterial(0x142b39, { emissive: 0x0b584e, emissiveIntensity: 0.62, metalness: 0.35, roughness: 0.28 });
    const blocks = [];
    for (let i = 0; i < 3; i++) {
      const block = new THREE.Mesh(new THREE.BoxGeometry(0.88 - i * 0.09, 0.32, 0.68), ledgerMat.clone());
      block.position.set(i % 2 ? 0.08 : -0.08, 0.37 + i * 0.34, 0);
      block.rotation.y = (i - 1) * 0.13;
      hub.add(block);
      blocks.push(block);
    }
    const hubRing = new THREE.Mesh(new THREE.TorusGeometry(1.02, 0.016, 6, 64), new THREE.MeshBasicMaterial({ color: 0x61b4ff, transparent: true, opacity: 0.78 }));
    hubRing.rotation.x = Math.PI / 2;
    hubRing.position.y = 0.19;
    hub.add(hubRing);

    // Each validator is a small low-poly station on the island edge.
    const nodes = [];
    const points = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      const angle = (Math.PI * 2 * i) / NODE_COUNT - Math.PI / 2;
      const point = new THREE.Vector3(Math.cos(angle) * 2.82, 0.06, Math.sin(angle) * 2.45);
      points.push(point);
      const station = new THREE.Group();
      station.position.copy(point);
      island.add(station);
      const plinth = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.46, 0.14, 6), makeMaterial(0x31485b));
      plinth.position.y = 0.1;
      station.add(plinth);
      const body = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.48, 0.37), makeMaterial(0x31475a));
      body.position.y = 0.39;
      station.add(body);
      const roof = new THREE.Mesh(new THREE.ConeGeometry(0.38, 0.25, 5), makeMaterial(COLORS.active, { emissive: COLORS.active, emissiveIntensity: 0.15, roughness: 0.45 }));
      roof.position.y = 0.76;
      roof.rotation.y = Math.PI / 5;
      station.add(roof);
      const windowMat = makeMaterial(0x75e8db, { emissive: 0x32b6aa, emissiveIntensity: 0.8, roughness: 0.3 });
      for (let w = 0; w < 2; w++) {
        const window = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.12, 0.025), windowMat);
        window.position.set(w ? 0.11 : -0.11, 0.42, 0.196);
        station.add(window);
      }
      const hit = new THREE.Mesh(new THREE.SphereGeometry(0.51, 12, 10), new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false }));
      hit.position.y = 0.44;
      hit.userData.nodeIndex = i;
      station.add(hit);
      const halo = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.013, 5, 28), new THREE.MeshBasicMaterial({ color: i === 0 ? 0xffc76b : COLORS.active, transparent: true, opacity: i === 0 ? 0.88 : 0.42 }));
      halo.position.y = 0.45;
      halo.rotation.x = Math.PI / 2;
      station.add(halo);
      nodes.push({ station, roof, halo, hit });
    }

    // Voter terminal sits outside the validator ring; a ballot pulse travels to the ledger.
    const terminal = new THREE.Group();
    terminal.position.set(0.22, 0.02, 3.78);
    terminal.rotation.y = -0.12;
    island.add(terminal);
    const terminalBase = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.16, 0.55), makeMaterial(0x34475a));
    terminalBase.position.y = 0.08;
    terminal.add(terminalBase);
    const terminalBody = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.58, 0.2), makeMaterial(0x1c2e42, { metalness: 0.2 }));
    terminalBody.position.y = 0.43;
    terminal.add(terminalBody);
    const screen = new THREE.Mesh(new THREE.PlaneGeometry(0.29, 0.3), new THREE.MeshBasicMaterial({ color: 0x52e3d4 }));
    screen.position.set(0, 0.48, 0.107);
    terminal.add(screen);
    const ballot = new THREE.Mesh(new THREE.OctahedronGeometry(0.11, 0), new THREE.MeshBasicMaterial({ color: 0xc6fff5 }));
    island.add(ballot);

    // Thin light paths show the validator links. Moving packets symbolize ledger messages.
    const linkMaterial = new THREE.LineBasicMaterial({ color: 0x62d7cf, transparent: true, opacity: 0.38 });
    points.forEach((point) => {
      const route = [new THREE.Vector3(0, 0.17, 0), new THREE.Vector3(point.x, point.y + 0.18, point.z)];
      island.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(route), linkMaterial));
    });
    const packets = [];
    for (let i = 0; i < 7; i++) {
      const packet = new THREE.Mesh(new THREE.SphereGeometry(0.035, 8, 8), new THREE.MeshBasicMaterial({ color: i === 0 ? 0xffd98d : 0xb4fff5 }));
      island.add(packet);
      packets.push(packet);
    }

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    let down = false, dragged = false, previous = { x: 0, y: 0 }, frame = 0;
    const resize = () => {
      const width = Math.max(1, host.clientWidth);
      const height = Math.max(250, host.clientHeight);
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.position.z = width < 500 ? 14.8 : width < 820 ? 13.7 : 12.6;
      camera.lookAt(0, 0.55, 0);
      camera.updateProjectionMatrix();
    };
    const pointerDown = (event) => {
      down = true; dragged = false; previous = { x: event.clientX, y: event.clientY };
      renderer.domElement.setPointerCapture(event.pointerId);
    };
    const pointerMove = (event) => {
      if (!down) return;
      const dx = event.clientX - previous.x;
      const dy = event.clientY - previous.y;
      if (Math.abs(dx) + Math.abs(dy) > 2) dragged = true;
      island.rotation.y += dx * 0.006;
      island.rotation.x = THREE.MathUtils.clamp(island.rotation.x + dy * 0.0025, -0.2, 0.2);
      previous = { x: event.clientX, y: event.clientY };
    };
    const pointerUp = (event) => {
      if (down && !dragged) {
        const rect = renderer.domElement.getBoundingClientRect();
        pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
        raycaster.setFromCamera(pointer, camera);
        const hit = raycaster.intersectObjects(nodes.map((node) => node.hit), false)[0];
        if (hit) callbackRef.current(hit.object.userData.nodeIndex);
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

    const animate = () => {
      frame = requestAnimationFrame(animate);
      const t = performance.now() * 0.001;
      island.rotation.y += down ? 0 : 0.00065;
      island.position.y = Math.sin(t * 0.7) * 0.09;
      hub.position.y = Math.sin(t * 1.3) * 0.035;
      hubRing.rotation.z += 0.003;
      blocks.forEach((block, i) => { block.material.emissiveIntensity = 0.55 + Math.sin(t * 1.8 + i) * 0.16; });
      const ballotProgress = (t * 0.15) % 1;
      ballot.position.set(0.22 * (1 - ballotProgress), 0.62 + Math.sin(t * 3) * 0.045, 3.78 * (1 - ballotProgress));
      packets.forEach((packet, i) => {
        const progress = (t * 0.12 + i / NODE_COUNT) % 1;
        const target = points[i];
        packet.position.set(target.x * (1 - progress), 0.28 + 0.12 * Math.sin(progress * Math.PI), target.z * (1 - progress));
      });
      nodes.forEach(({ roof, halo }, index) => {
        const status = statusesRef.current[index] ?? 'active';
        const color = status === 'active' ? (index === 0 ? 0xffc76b : COLORS.active) : COLORS[status];
        roof.material.color.setHex(color);
        roof.material.emissive.setHex(color);
        roof.material.emissiveIntensity = status === 'active' ? 0.24 + Math.sin(t * 2 + index) * 0.1 : 0.06;
        halo.material.color.setHex(color);
        halo.material.opacity = status === 'active' ? 0.55 + Math.sin(t * 2 + index) * 0.12 : 0.8;
      });
      renderer.render(scene, camera);
    };
    animate();

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

  return <div className="three-scene" ref={hostRef} role="img" aria-label={`Pulau jaringan VoteChain dengan tujuh validator: ${NODE_NAMES.join(', ')}. Seret untuk memutar dan pilih stasiun untuk mengubah kondisinya.`} />;
}
