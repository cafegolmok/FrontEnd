// src/pages/index.js

// 라우팅할 페이지들을 import
import Home from './pages/home.js';
import Router from '../router.js';

// 라우팅할 페이지들을 Router 객체에 등록
const router = new Router([{ path: '/', component: Home }]);

// 페이지가 로드되면 라우터를 시작
window.addEventListener('load', router.init);
