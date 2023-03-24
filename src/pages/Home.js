// src/pages/Home.js

import CafeList from '../components/CafeList/CafeList';
import Login from '../components/Login/Login';

const Home = () => {
  const cafeListComponent = CafeList();
  const loginComponent = Login();

  const fragment = document.createDocumentFragment();
  fragment.appendChild(cafeListComponent);
  fragment.appendChild(loginComponent);

  return fragment;
};

export default Home;
