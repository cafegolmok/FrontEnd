// src/components/app.js

import Router from '../router';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import routes from '../routes';

import Overlay from './Overlay/Overlay';
import LoginModal from './LoginModal/LoginModal';

import { state, addObserver } from '../../store';

const App = () => {
  const router = Router();

  const renderApp = () => {
    const appElement = document.getElementById('app');
    appElement.innerHTML = '';

    const header = Header();
    const footer = Footer();
    const currentPage = router.getPage()();

    const overlay = Overlay();
    const loginModal = LoginModal();

    appElement.appendChild(header);
    appElement.appendChild(currentPage);
    appElement.appendChild(footer);

    appElement.appendChild(overlay);
    appElement.appendChild(loginModal);

    const observer = value => {
      if (value) {
        loginModal.classList.remove('hidden');
        overlay.classList.remove('hidden');
        document.body.classList.add('no-scroll');
      } else {
        loginModal.classList.add('hidden');
        overlay.classList.add('hidden');
        document.body.classList.remove('no-scroll');
      }
    };

    addObserver('modalVisible', observer);
    addObserver('overlayVisible', observer);
  };

  const onPopState = () => {
    renderApp();
  };

  window.addEventListener('load', renderApp);
  window.addEventListener('popstate', onPopState);

  const app = { renderApp };

  return app;
};

export default App;
