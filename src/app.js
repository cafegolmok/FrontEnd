// src/app.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Overlay from './components/Overlay/Overlay.jsx';
// import LoginModal from './components/Login/LoginModal/LoginModal.jsx';
import Home from './pages/Home.jsx';
import CafeDetail from './pages/CafeDetail.jsx';
import Error404 from './pages/Error404.jsx';

import GlobalStyles from './styles/globalStyle.js';
import SignupModal from './components/SignupModal/SignupModal.jsx';

import EmailLogin from './components/Login/EmailLogin.jsx';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cafe/:id' element={<CafeDetail />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
      <Footer />
      {/* <LoginModal /> */}
      <EmailLogin />
      <SignupModal />
      <Overlay />
    </Router>
  );
}

export default App;
