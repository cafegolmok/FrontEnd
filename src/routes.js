// src/routes.js

import CafeList from './components/CafeList/CafeList';
import Login from './components/Login/Login';
import Error404 from './components/Error404/Error404';

const routes = {
  '/': CafeList,
  '/login': Login,
  '/error404': Error404
};

export default routes;
