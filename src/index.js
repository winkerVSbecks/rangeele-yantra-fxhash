import { initSketch } from './sketch';

// See if tokenData exists from ArtBlocks input
// It may come in as object or string depending on context
let hash = typeof tokenData !== 'undefined' ? tokenData.hash : window.fxhash;

export default (() => {
  let W = window,
    D = document;
  const canvas = D.body.appendChild(D.createElement('canvas'));
  const context = canvas.getContext('2d');

  initSketch({ hash, canvas, context });
})();
