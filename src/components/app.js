// src/components/app.js

// 애플리케이션의 논리를 구현하는 코드를 담고 있습니다. 즉, 애플리케이션의 구성 요소인 컴포넌트들을 정의하고, 라우팅 로직 등을 구현하는 역할을 합니다.
import Header from './Header/Header';
import Home from './Home/Home';
import Footer from './Footer/Footer';
import Login from './Login/Login';
import Router from '../router';

function App() {
  const router = new Router();

  const render = () => {
    const appElement = document.getElementById('app');
    appElement.innerHTML = `
      ${Header()}
    ${router.getComponent()}
      ${Footer()}
    `;
  };

  return {
    render
  };
}

export default App;
