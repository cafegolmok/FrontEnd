// src/components/app.js

import Router from '../router';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import routes from '../routes';

const App = () => {
  const router = Router();

  const renderApp = () => {
    const appElement = document.getElementById('app');
    appElement.innerHTML = '';

    const header = Header();
    const footer = Footer();
    const currentComponent = router.getComponent()();

    appElement.appendChild(header);
    appElement.appendChild(currentComponent);
    appElement.appendChild(footer);
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
