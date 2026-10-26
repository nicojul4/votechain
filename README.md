# VoteChain immersive presentation

The presentation is a visual-first React + Three.js walkthrough. The main `index.html` is bundled locally and opens offline with no CDN request. The 3D demo visualizes voter eligibility, an anonymous credential, a protected ballot, PBFT validator messages, ledger commit, and aggregate tally. Validator status can be changed live to show the three-node fault boundary.

## Open the presentation

Open `index.html` in a modern browser with WebGL support.

## Develop or rebuild

1. Install dependencies once: `npm install`
2. Start the source project: `npm run dev`
3. Build a static distribution: `npm run build`
4. Open `dist/index.html` for the bundled presentation.

Vite uses `src/index.html` as the development entry. No runtime CDN assets are used.
