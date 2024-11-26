import Spheres2Background from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.8/build/backgrounds/spheres2.cdn.min.js';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.querySelector('.webgl-canvas');

  if (canvas) {
    const bg = Spheres2Background(canvas, {
      count: 200,
      colors: [0xff0000, 0x0, 0xffffff],
      minSize: 0.5,
      maxSize: 1,
    });

    document.body.addEventListener('click', () => {
      bg.togglePause();
    });
  } else {
    console.error("Canvas not found!");
  }
});
