// src/components/Overlay/Overlay.js

import './Overlay.scss';
import { state } from '../../../store';

const Overlay = () => {
  const app = document.getElementById('app');

  const overlay = document.createElement('div');
  overlay.classList.add('overlay', 'hidden');
  app.appendChild(overlay);

  overlay.addEventListener('click', () => {
    state.modalVisible = false;
    state.overlayVisible = false;
  });

  return overlay;
};

export default Overlay;
