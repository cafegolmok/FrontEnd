// src/routes.js

import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Error404 from './components/Error404/Error404';

const routes = {
  '/': Home,
  '/login': Login,
  '/error404': Error404
};

export default routes;
