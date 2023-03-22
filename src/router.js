// src/router.js

import CafeList from './components/CafeList/CafeList';
import Login from './components/Login/Login';
import Error404 from './components/Error404/Error404';
import routes from './routes';

const Router = () => {
  const content = document.getElementById('app');

  const init = () => {
    const component = getComponent();
    content.innerHTML = `
      ${component()}
    `;
  };

  const getComponent = () => {
    const path = window.location.pathname.toLowerCase();
    let component;

    if (path in routes) {
      component = routes[path];
    } else {
      component = routes['/error404'];
    }
    // console.log(component);
    return component;
  };

  init();

  window.addEventListener('popstate', init);

  return {
    getComponent,
    init
  };
};

export default Router;
