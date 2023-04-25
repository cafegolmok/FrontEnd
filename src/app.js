// src/app.js

import React from 'react';

import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Overlay from './components/Overlay/Overlay.jsx';
import LoginModal from './components/LoginModal/LoginModal.jsx';
import Home from './pages/Home.jsx';
// import CafeDetail from './pages/CafeDetail';
// import Error404 from './pages/Error404';

import GlobalStyles from './styles/globalStyle.js';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Home />
      <Footer />
      <LoginModal />
      <Overlay />
    </>
  );
}

export default App;
