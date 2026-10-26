import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import Network3D from "./Network3D.jsx";
import VoteChainDemo from "./VoteChainDemo.jsx";
import "./styles.css";

const members = [
  "Mark Justin Gunawan — 2410101017",
  "Nicolas Julian Kurnia P — 2410101011",
  "Bentley Arshavin — 2410101006",
];
const initialNodes = Array.from({ length: 7 }, (_, index) => ({
  name: [
    "KPU Pusat",
    "Bawaslu",
    "Komdigi",
    "Universitas A",
    "Universitas B",
    "Auditor A",
    "Auditor B",
  ][index],
  status: "active",
}));
const statusLabel = { active: "Aktif", faulty: "Byzantine", offline: "Mati" };
const protocolPhases = ["Pre-prepare", "Prepare", "Commit"];

function App() {
  const [nodes, setNodes] = useState(initialNodes);
  const [phase, setPhase] = useState(-1);
  const faulty = nodes.filter((node) => node.status !== "active").length;
  const required = 3 * faulty + 1;
  const safe = required <= nodes.length;
  const active = nodes.filter((node) => node.status === "active").length;

  const setNodeStatus = (index) =>
    setNodes((current) =>
      current.map((node, i) =>
        i === index
          ? {
              ...node,
              status:
                node.status === "active"
                  ? "faulty"
                  : node.status === "faulty"
                    ? "offline"
                    : "active",
            }
          : node,
      ),
    );
  const resetNodes = () => {
    setNodes(initialNodes);
    setPhase(-1);
  };
  const jumpToGame = () =>
    document.querySelector("#simulasi")?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <header className="topbar">
        <a className="wordmark" href="#top">
          <span className="mark">◈</span> VoteChain
        </a>
        <nav aria-label="Navigasi halaman">
          <a href="#rancangan">Rancangan</a>
          <a href="#konsensus">Konsensus</a>
          <a href="#aktor">Aktor</a>
          <a href="#privasi">Privasi</a>
          <a href="#risiko">Risiko</a>
        </nav>
        <button className="top-cta" onClick={jumpToGame}>
          Masuk ke game <span>↗</span>
        </button>
      </header>

      <main id="top">
        <section className="hero wrap">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="live-dot" /> RANCANGAN EDUKATIF · E-VOTING
              INDONESIA
            </div>
            <h1>
              Suara tercatat.
              <br />
              <em>Kepercayaan</em> dibagi.
            </h1>
            <p className="hero-lead">
              VoteChain adalah rancangan pemilihan digital berbasis permissioned
              blockchain. Validator dari domain berbeda menyepakati catatan yang
              sama, sementara pilihan pemilih tetap terlindungi.
            </p>
            <div className="hero-actions">
              <button className="button primary" onClick={jumpToGame}>
                Jelajahi simulasi <span>↓</span>
              </button>
              <a className="button ghost" href="#rancangan">
                Lihat arsitektur
              </a>
            </div>
            <div className="micro-proof">
              <span>◉</span> 7 seat validator <b>·</b> PBFT <b>·</b> finalitas
              bersama
            </div>
            <div className="teamline">
              {members.map((name) => (
                <span key={name}>{name}</span>
              ))}
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-glow" />
            <Network3D
              statuses={nodes.map((node) => node.status)}
              onToggleNode={setNodeStatus}
            />
            <div className="visual-caption">
              <span className="legend-dot mint" /> ledger bersama{" "}
              <span className="legend-dot amber" /> leader PBFT
            </div>
            <div className="floating-label label-top">
              <span>◈</span> Konsensus aktif <b>{active}/7</b>
            </div>
            <div className="floating-label label-bottom">
              <span className="signal" /> Jaringan permissioned{" "}
              <small>seret untuk putar · klik node</small>
            </div>
          </div>
        </section>

        <section className="disclaimer wrap">
          <b>Rancangan kelompok, bukan sistem resmi.</b> Nama VoteChain juga
          digunakan karya lain. Ini usulan konseptual untuk presentasi, bukan
          klaim sebagai karya pertama atau aplikasi pemilu siap pakai.{" "}
          <a href="#referensi">Lihat referensi ↗</a>
        </section>

        <section className="section wrap" id="rancangan">
          <div className="section-head">
            <div>
              <div className="eyebrow">01 / MASALAH & SOLUSI</div>
              <h2>Satu hasil. Banyak pihak yang perlu percaya.</h2>
            </div>
            <p>
              Blockchain tidak otomatis wajib. Ia menarik saat beberapa lembaga
              perlu memeriksa riwayat bersama tanpa satu operator menguasai
              satu-satunya catatan.
            </p>
          </div>
          <div className="compare-grid">
            <article className="compare-card muted-card">
              <div className="card-icon">▤</div>
              <div className="eyebrow">DATABASE TERPUSAT</div>
              <h3>Satu operator memegang catatan utama</h3>
              <p>
                Lebih sederhana untuk dikelola, tetapi audit dan pemulihan
                bergantung pada kontrol, log, serta prosedur operator tersebut.
              </p>
              <div className="thin-rule" />
              <div className="compare-foot">
                <span>Titik kendali</span>
                <b>Satu organisasi</b>
              </div>
            </article>
            <article className="compare-card chain-card">
              <div className="card-icon">◈</div>
              <div className="eyebrow">PERMISSIONED LEDGER</div>
              <h3>Catatan disepakati lintas institusi</h3>
              <p>
                Validator berizin menyimpan salinan dan menyepakati urutan
                transaksi. Perubahan riwayat lama dapat dibandingkan dan
                diaudit.
              </p>
              <div className="thin-rule" />
              <div className="compare-foot">
                <span>Titik kendali</span>
                <b>Aturan + beberapa validator</b>
              </div>
            </article>
            <article className="why-card">
              <div className="eyebrow">KENAPA BUKAN DATABASE SAJA?</div>
              <h3>Ketika kepercayaan harus dibagi.</h3>
              <p>
                Jika satu pengelola tepercaya sudah memadai, database biasa bisa
                lebih murah dan mudah. VoteChain mengeksplorasi kebutuhan audit
                bersama dan checks and balances.
              </p>
              <a href="#simulasi">
                Lihat demo VoteChain <span>→</span>
              </a>
            </article>
          </div>
        </section>

        <section className="section dark-section" id="konsensus">
          <div className="wrap">
            <div className="section-head">
              <div>
                <div className="eyebrow">02 / ALGORITMA KONSENSUS</div>
                <h2>PBFT: sepakat tanpa mining.</h2>
              </div>
              <p>
                Jaringan mengenal para validator. Pada tujuh seat, PBFT
                dirancang menoleransi hingga dua node Byzantine—dengan asumsi
                independensi dan jaringan yang memadai.
              </p>
            </div>
            <div className="consensus-layout">
              <div className="scene-panel">
                <div className="scene-label">
                  <span className="live-dot" /> SIMULATOR 3D · 7 VALIDATOR{" "}
                  <span className="drag-hint">seret untuk putar</span>
                </div>
                <Network3D
                  statuses={nodes.map((node) => node.status)}
                  onToggleNode={setNodeStatus}
                />
                <div className="scene-controls">
                  {nodes.map((node, index) => (
                    <button
                      className={`node-control ${node.status}`}
                      onClick={() => setNodeStatus(index)}
                      key={node.name}
                      aria-label={`${node.name}: ${statusLabel[node.status]}. Klik untuk ubah kondisi.`}
                    >
                      <span className="node-index">0{index + 1}</span>
                      <span className="node-name">{node.name}</span>
                      <b>{statusLabel[node.status]}</b>
                    </button>
                  ))}
                </div>
                <div className="scene-bottom">
                  <span>{faulty} node bermasalah</span>
                  <button onClick={resetNodes}>Reset node ↺</button>
                </div>
              </div>
              <div className="consensus-aside">
                <div className="eyebrow">BATAS TOLERANSI</div>
                <div className="formula">n ≥ 3f + 1</div>
                <div className={`formula-result ${safe ? "safe" : "unsafe"}`}>
                  7 {safe ? "≥" : "<"} {required}{" "}
                  <span>
                    {safe ? "✓ dalam batas asumsi" : "× di luar jaminan PBFT"}
                  </span>
                </div>
                <div className="quorum-row">
                  <div>
                    <strong>2f+1</strong>
                    <small>kuorum commit</small>
                  </div>
                  <div className="quorum-dots">
                    {Array.from({ length: 7 }, (_, i) => (
                      <i className={i < 5 ? "quorum-on" : ""} key={i} />
                    ))}
                  </div>
                  <b>5 / 7</b>
                </div>
                <p className="explain" aria-live="polite">
                  {safe
                    ? `${faulty} node bermasalah. Dengan f ≤ 2, protokol masih berada dalam batas toleransi teoritis; lima pesan commit diperlukan.`
                    : `${faulty} node bermasalah. Untuk menoleransi f=${faulty}, sistem memerlukan n ≥ ${required}; tujuh node sudah di luar asumsi jaminan PBFT.`}
                </p>
                <div className="phase-list">
                  {protocolPhases.map((item, index) => (
                    <button
                      className={`phase-button ${phase === index ? "current" : phase > index ? "complete" : ""}`}
                      key={item}
                      onClick={() => setPhase(index)}
                    >
                      <span>0{index + 1}</span>
                      {item}
                      {phase >= index && <b>✓</b>}
                    </button>
                  ))}
                </div>
                <button
                  className="button primary run-phase"
                  onClick={() => setPhase((phase + 1) % protocolPhases.length)}
                >
                  {phase < 0
                    ? "Jalankan fase PBFT"
                    : phase === 2
                      ? "Ulangi simulasi"
                      : "Fase berikutnya →"}
                </button>
                <p className="fineprint">
                  PBFT memberi finalitas cepat dan hemat energi dibanding PoW,
                  tetapi komunikasi meningkat kuadratik seiring jumlah
                  validator. Ini model edukatif, bukan benchmark.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section wrap" id="aktor">
          <div className="section-head">
            <div>
              <div className="eyebrow">03 / AKTOR & JARINGAN</div>
              <h2>Tujuh seat. Lima rumpun kandidat.</h2>
            </div>
            <p>
              Komposisi ini hipotesis presentasi. Perlu mandat, tata kelola,
              serta pemisahan operasi nyata sebelum dapat disebut desain
              implementasi.
            </p>
          </div>
          <div className="actor-grid">
            <div className="actor-main">
              <div className="seat-map">
                {initialNodes.map((node, index) => (
                  <div className="seat" key={node.name}>
                    <span>0{index + 1}</span>
                    <div>
                      <b>{node.name}</b>
                      <small>
                        {index === 0
                          ? "Penyelenggara"
                          : index === 1
                            ? "Pengawas"
                            : index === 2
                              ? "Infrastruktur digital"
                              : index < 5
                                ? "Rumpun akademik"
                                : "Audit independen"}
                      </small>
                    </div>
                    <i>Validator</i>
                  </div>
                ))}
              </div>
              <div className="actor-note">
                <b>Catatan kemandirian</b>
                <span>
                  Dua seat dari satu rumpun hanya dihitung independen bila
                  operator, pendanaan, dan kendali kuncinya memang terpisah.
                </span>
              </div>
            </div>
            <div className="role-stack">
              <article>
                <span className="role-symbol mint-text">◉</span>
                <div>
                  <b>Node operasional</b>
                  <p>
                    KPU Provinsi/Daerah/TPS meneruskan proses dan menyimpan
                    replika sesuai akses.
                  </p>
                </div>
              </article>
              <article>
                <span className="role-symbol blue-text">⌁</span>
                <div>
                  <b>Sumber kelayakan</b>
                  <p>
                    Dukcapil memeriksa kelayakan lewat jalur terlindungi;
                    identitas mentah tidak masuk ledger.
                  </p>
                </div>
              </article>
              <article>
                <span className="role-symbol amber-text">◎</span>
                <div>
                  <b>Pengamat & klien</b>
                  <p>
                    Saksi, LSM, dan media memeriksa bukti agregat. Pemilih
                    memakai aplikasi sebagai klien.
                  </p>
                </div>
              </article>
              <article>
                <span className="role-symbol pink-text">⚖</span>
                <div>
                  <b>Penyelesaian sengketa</b>
                  <p>
                    MK tetap di luar konsensus agar fungsi adjudikasi tidak
                    bercampur dengan operasi validator.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section privacy-section" id="privasi">
          <div className="wrap">
            <div className="section-head">
              <div>
                <div className="eyebrow">04 / ALUR & PRIVASI SUARA</div>
                <h2>Buktikan suara sah. Jangan buka pilihan.</h2>
              </div>
              <p>
                Identitas dan pilihan harus dipisahkan. Hash saja tidak membuat
                data anonim; rancangan ini mengusulkan mekanisme kriptografi
                khusus.
              </p>
            </div>
            <div className="flowline">
              {[
                [
                  "01",
                  "Cek kelayakan",
                  "KPU/Dukcapil memeriksa hak pilih di luar ledger.",
                ],
                [
                  "02",
                  "Kredensial anonim",
                  "Penerbit memberi blind signature pada credential satu kali.",
                ],
                [
                  "03",
                  "Ballot terlindungi",
                  "Perangkat mengenkripsi pilihan dan membuat nullifier khusus pemilu.",
                ],
                [
                  "04",
                  "Proof & validasi",
                  "ZKP membuktikan credential sah dan ballot valid tanpa membuka pilihan.",
                ],
                [
                  "05",
                  "Konsensus PBFT",
                  "Validator menolak nullifier ganda dan menyepakati transaksi sah.",
                ],
                [
                  "06",
                  "Agregat & audit",
                  "Kunci ambang membuka hasil agregat; auditor memeriksa bukti.",
                ],
              ].map(([number, title, text]) => (
                <article className="flow-step" key={number}>
                  <span>{number}</span>
                  <div className="flow-connector" />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <div className="data-boundary">
              <div>
                <span className="eyebrow">ON-CHAIN</span>
                <p>
                  Ciphertext ballot, nullifier per pemilu, proof validasi,
                  status transaksi, dan agregat audit.
                </p>
              </div>
              <div className="boundary-arrow">⇢</div>
              <div>
                <span className="eyebrow">OFF-CHAIN / TERLINDUNGI</span>
                <p>
                  Identitas Dukcapil, pemetaan pemilih-kredensial, dan kunci
                  rahasia.
                </p>
              </div>
            </div>
            <div className="concept-warning">
              <span>!</span>
              <p>
                <b>Asumsi riset, belum diimplementasikan.</b> Blind signature,
                zero-knowledge proof, dan dekripsi agregat membutuhkan protokol
                serta pengelolaan kunci yang ditinjau ahli. Demo ini hanya
                menjelaskan rancangan, bukan membuktikan keamanan
                kriptografinya.
              </p>
            </div>
          </div>
        </section>

        <section className="section wrap" id="risiko">
          <div className="section-head">
            <div>
              <div className="eyebrow">05 / RISIKO KEAMANAN</div>
              <h2>Kontrol membantu. Tidak menjamin.</h2>
            </div>
            <p>
              Ancaman paling kritis pada rancangan ini adalah kolusi yang
              melewati ambang toleransi validator.
            </p>
          </div>
          <div className="risk-grid">
            <article>
              <span className="risk-number">01</span>
              <div className="eyebrow">RISIKO UTAMA</div>
              <h3>Kolusi &gt; 1/3 validator</h3>
              <p>
                Untuk n=7, f=2. Tiga validator Byzantine sudah berada di luar
                jaminan PBFT.
              </p>
              <b>Respons: seat lintas domain + audit publik</b>
              <small>
                Audit membantu deteksi dan akuntabilitas; tidak mengembalikan
                jaminan konsensus yang sudah terlampaui.
              </small>
            </article>
            <article>
              <span className="risk-number">02</span>
              <div className="eyebrow">KETERSEDIAAN</div>
              <h3>DoS pada hari-H</h3>
              <p>
                Trafik serangan atau lonjakan pemilih dapat membuat layanan
                sulit dijangkau.
              </p>
              <b>Respons: rate limiting + multi-region</b>
              <small>
                Perlu latihan failover, kapasitas cadangan, dan rute layanan
                alternatif.
              </small>
            </article>
            <article>
              <span className="risk-number">03</span>
              <div className="eyebrow">PRIVASI & PAKSAAN</div>
              <h3>Coercion / kebocoran</h3>
              <p>
                Pemilih bisa ditekan atau pilihan terhubung dengan identitas.
              </p>
              <b>Respons: ballot rahasia + kebijakan re-vote</b>
              <small>
                Re-vote bukan solusi tunggal; sistem digital tidak otomatis
                menghilangkan paksaan di lingkungan pemilih.
              </small>
            </article>
            <article>
              <span className="risk-number">04</span>
              <div className="eyebrow">KELAYAKAN PEMILIH</div>
              <h3>Identitas palsu / ganda</h3>
              <p>Kredensial tidak sah mencoba membuat lebih dari satu suara.</p>
              <b>Respons: verifikasi kelayakan + nullifier unik</b>
              <small>
                Bagikan bukti minimum, bukan NIK atau identitas mentah ke
                jaringan.
              </small>
            </article>
          </div>
        </section>

        <section className="section sources wrap" id="referensi">
          <div>
            <div className="eyebrow">CATATAN NAMA & SUMBER</div>
            <h2>VoteChain adalah nama yang sudah digunakan karya lain.</h2>
            <p>
              Rancangan kelompok ini dibedakan lewat konteks Indonesia, jaringan
              permissioned, dan argumen PBFT; bukan klaim sebagai proyek
              pertama.
            </p>
          </div>
          <div className="source-links">
            <a
              href="https://www.mdpi.com/1999-5903/16/11/388"
              target="_blank"
              rel="noreferrer"
            >
              VoteChain · konteks Palestina (2024) <span>↗</span>
            </a>
            <a
              href="https://cris.bgu.ac.il/en/publications/eos-blockchain-based-electronic-voting-system/"
              target="_blank"
              rel="noreferrer"
            >
              VoteChain · EOS / BRAINS (2024) <span>↗</span>
            </a>
            <a
              href="https://link.springer.com/article/10.1007/s43926-026-00471-y"
              target="_blank"
              rel="noreferrer"
            >
              HCE-VoteChain · Hyperledger Fabric (2026) <span>↗</span>
            </a>
          </div>
        </section>

        <section className="game-section" id="simulasi">
          <VoteChainDemo />
        </section>
      </main>
      <footer>
        <a className="wordmark" href="#top">
          <span className="mark">◈</span> VoteChain
        </a>
        <span>Rancangan edukatif kelompok · Blockchain UTS</span>
        <a href="#top">Kembali ke atas ↑</a>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
