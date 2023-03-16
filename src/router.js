// src/router.js

import App from './components/app.js';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Error404 from './components/Error404/Error404';

const routes = {
  '/': Home,
  '/Login': Login,
  '/Error404': Error404
};

const Router = () => {
  const $content = document.getElementById('app');

  // route matching
  const init = () => {
    const component = getComponent();
    $content.innerHTML = `
    ${Header()}
    ${component}
    ${Footer()}
  `;
  };

  const getComponent = () => {
    const path = window.location.pathname;

    // route matching
    let component;
    if (path in routes) {
      component = routes[path];
    } else {
      component = routes['/Error404'];
    }
    return new component();
  };

  window.addEventListener('load', init);
  window.addEventListener('hashchange', init);

  return {
    getComponent,
    init
  };
};

export default Router;
