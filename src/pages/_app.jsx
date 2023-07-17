// src/pages/_app.jsx

import React, { useEffect } from 'react';
import { useSelector, Provider, useDispatch } from 'react-redux';

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
import SignupSuccess from '../components/signup/signupSuccess/SignupSuccess.jsx';

import { login, logout } from '../store/authSlice.js';
import { checkUserLoginStatus } from '../api/auth.js';

const App = ({ Component, pageProps }) => {
  const dispatch = useDispatch();
  const currentModalStep = useSelector(state => state.modal.currentModalStep);

  // 로그인 상태를 확인하는 함수
  const checkLoginStatus = async () => {
    try {
      const response = await checkUserLoginStatus();
      // 응답이 성공적인 경우, 프론트엔드 상태 업데이트
      if (response.status === 200) {
        dispatch(login(response.data.user)); // 사용자가 로그인한 경우
      } else {
        dispatch(logout()); // 사용자가 로그아웃한 경우
      }
    } catch (error) {
      console.error(error);
    }
  };

  // 컴포넌트 마운트 시 로그인 상태 확인
  useEffect(() => {
    checkLoginStatus();
  }, []);

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
        {currentModalStep === 'signupSuccess' && <SignupSuccess />}
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
