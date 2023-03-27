import './Overlay.scss';
const Overlay = () => {
  const app = document.getElementById('app');

  const overlay = document.createElement('div');
  overlay.classList.add('overlay', 'hidden');
  app.appendChild(overlay);

  if (!overlay.classList.contains('hidden')) {
    document.body.classList.add('no-scroll');
  }

  return overlay;
};

export default Overlay;
