// src/pages/_app.jsx

import React from 'react';
import Head from 'next/head';

import { Provider } from 'react-redux';
import store from '../store/index.js';

import Header from '../components/header/Header.jsx';
import Footer from '../components/footer/Footer.jsx';
import Overlay from '../components/overlay/Overlay.jsx';

import GlobalStyles from '../styles/globalStyle.js';
import SignupModal from '../components/signup/signupModal/SignupModal.jsx';
import LoginModal from '../components/login/loginModal/LoginModal.jsx';
import AddProfileImg from '../components/signup/addProfileImg/AddProfileImg.jsx';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Provider store={store}>
        <GlobalStyles />
        <Head>
          <script src='https://developers.kakao.com/sdk/js/kakao.min.js'></script>
          <script>{`Kakao.init('0aa492a9e7f7c59705913867a6020613');`}</script>
        </Head>
        <Header />
        <Component {...pageProps} />
        <Footer />
        <LoginModal />
        <SignupModal />
        <AddProfileImg />
        <Overlay />
      </Provider>
    </>
  );
};

export default App;
