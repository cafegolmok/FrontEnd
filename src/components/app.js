// src/components/app.js

import Router from '../router';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import routes from '../routes';

const App = () => {
  const router = new Router();

  const renderApp = () => {
    const appElement = document.getElementById('app');

    appElement.innerHTML = `
      ${Header()}
      ${router.getComponent()()} 
      ${Footer()}
    `;
  };

  const onPopState = () => {
    render();
  };

  window.addEventListener('load', renderApp);
  window.addEventListener('popstate', onPopState);

  const app = { renderApp };

  return app;
};

export default App;
