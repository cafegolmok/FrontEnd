// src/pages/Home.js

import CafeList from '../components/CafeList/CafeList';
import LoginModal from '../components/LoginModal/LoginModal';

const Home = () => {
  const cafeListComponent = CafeList();
  const loginComponent = LoginModal();

  const fragment = document.createDocumentFragment();
  fragment.appendChild(cafeListComponent);
  fragment.appendChild(loginComponent);

  return fragment;
};

export default Home;
