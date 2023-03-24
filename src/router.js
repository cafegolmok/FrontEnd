// src/router.js

import routes from './routes';
import Home from './pages/Home';
import CafeDetail from './pages/CafeDetail';

const Router = () => {
  const app = document.getElementById('app');

  const init = () => {
    const page = getPage()();
    app.innerHTML = '';
    app.appendChild(page);
  };

  const getPage = () => {
    const path = window.location.pathname.toLowerCase();
    let page;

    if (path in routes) {
      page = routes[path];
    } else {
      page = routes['/error404'];
    }
    console.log(page);
    return page;
  };

  init();

  window.addEventListener('popstate', init);

  return {
    getPage,
    init
  };
};

export default Router;
