// src/app.js

import Router from './router.js';
import App from './components/app.js';

const app = new App();
const router = Router();

router.init();
app.render();

export default App;
