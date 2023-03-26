// src/routes.js

import CafeDetail from './pages/CafeDetail';
import Error404 from './pages/Error404';
import Home from './pages/Home';

const routes = {
  '/': Home,
  '/cafedetail': CafeDetail,
  '/error404': Error404
};

export default routes;
