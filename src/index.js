// src/index.js

// 웹팩 설정 파일에서 entry point로 설정되어 있으며, 그 역할은 애플리케이션의 초기 설정을 담당하는 것입니다. 이 파일에서는 애플리케이션을 구동하기 위해 필요한 라이브러리나 모듈 등을 import하고, DOM에 애플리케이션의 컴포넌트를 렌더링합니다.

// 필요한 모듈 import
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
app.render();

