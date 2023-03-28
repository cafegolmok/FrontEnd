// src/pages/Home.js

import CafeList from '../components/CafeList/CafeList';
import LoginModal from '../components/LoginModal/LoginModal';

const Home = () => {
  const cafeListComponent = CafeList();

  const fragment = document.createDocumentFragment();
  fragment.appendChild(cafeListComponent);

  return fragment;
};

export default Home;
