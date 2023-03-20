// src/components/app.js

import Router from '../router';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import routes from '../routes'; 

const App = () => {
  const router = new Router();

  const render = () => {
    const appElement = document.getElementById('app');

    appElement.innerHTML = `
      ${Header()}
      ${router.getComponent()()} 
      ${Footer()}
    `;
  };

  window.addEventListener('load', render);
  window.addEventListener('popstate', render);
  // router.init();

  const app = {
    render
  };

  return app;
};

export default App;

// 라우터 초기화
// const router = new Router();
// router.init();
