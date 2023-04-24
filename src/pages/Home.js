// src/pages/Home.js

import React from 'react';
import CafeList from '../components/CafeList/CafeList';
import LoginModal from '../components/LoginModal/LoginModal';

const Home = () => {
  return (
    <>
      <CafeList />
      <LoginModal />
    </>
  );
};

export default Home;
