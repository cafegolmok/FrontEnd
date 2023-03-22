// src/index.js

import './style.scss';
import '../public/assets/images/beverage.png';
import '../public/assets/images/chair.png';
import '../public/assets/images/coffee.png';
import '../public/assets/images/icecream.png';
import '../public/assets/images/island.png';
import '../public/assets/images/laptop.png';
import '../public/assets/images/logo-cutout.png';
import '../public/assets/images/money.png';
import '../public/assets/images/people.png';
import '../public/assets/images/plug.png';
import '../public/assets/images/short-cake.png';
import '../public/assets/images/sparkles.png';
import '../public/assets/images/speak.png';
import '../public/assets/images/osee.jpeg';
import '../public/assets/images/github.png';
import '../public/assets/images/instagram.png';

import App from './app.js';
import Router from './router';

const router = new Router();

// 애플리케이션 시작
const app = new App();
app.renderApp();

