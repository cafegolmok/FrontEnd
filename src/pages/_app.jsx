// src/pages/_app.jsx

import React from 'react';
import { useSelector, Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import Head from 'next/head';
import PropTypes from 'prop-types';

import store from '../store/store.js';

import Header from '../components/header/Header.jsx';
import Footer from '../components/footer/Footer.jsx';
import Overlay from '../components/overlay/Overlay.jsx';

import GlobalStyles from '../styles/globalStyle.js';
import SignupModal from '../components/signup/signupModal/SignupModal.jsx';
import LoginModal from '../components/login/loginModal/LoginModal.jsx';

import AddProfileImg from '../components/signup/addProfileImg/AddProfileImg.jsx';

const App = ({ Component, pageProps }) => {
  const currentModalStep = useSelector(state => state.modal.currentModalStep);
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
        {currentModalStep === 'login' && <LoginModal />}
        {currentModalStep === 'signup' && <SignupModal />}
        {currentModalStep === 'addProfileImg' && <AddProfileImg />}
        <Overlay />
      </Provider>
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(App);
