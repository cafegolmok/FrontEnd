// src/components/Login/LoginModal/LoginModal.jsx

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { hideLoginModal, showSignupModal } from '../../../store/actions';
import BaseModal from '../../Helpers/BaseModal.jsx';
import EmailLogin from '../EmailLogin.jsx';

import {
  LoginModalContent,
  LoginModalText,
  SignupBtn,
  OrText,
} from './LoginModalStyle';
import KakaoLoginBtn from '../KakaoLoginBtn.jsx';

const LoginModal = () => {
  const isLoginModalVisible = useSelector(state => state.isLoginModalVisible);
  const dispatch = useDispatch();

  const handleHideLoginModal = () => {
    dispatch(hideLoginModal());
  };

  const handleShowSignupModal = () => {
    dispatch(hideLoginModal());
    dispatch(showSignupModal());
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);
  const [isLoginError, setIsLoginError] = useState(false);

  const handleChangeEmail = event => {
    setEmail(event.target.value);

    // 이메일이 비어있지 않고 형식이 잘못된 경우에만 경고 메시지 표시
    if (event.target.value !== '' && !validateEmail(event.target.value)) {
      setIsEmailInvalid(true);
    } else {
      setIsEmailInvalid(false);
    }

    // 이메일이 비어있는지 여부 확인
    setIsEmailEmpty(event.target.value === '');
  };

  const validateEmail = email => {
    const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return regex.test(email);
  };

  const handleChangePassword = event => {
    setPassword(event.target.value);

    // 패스워드가 비어있는지 확인
    setIsPasswordEmpty(event.target.value === '');
  };

  const handleSubmit = async event => {
    event.preventDefault();
    if (email === '') {
      setIsEmailEmpty(true);
    } else {
      setIsEmailEmpty(false);
    }

    if (email !== '' && !validateEmail(email)) {
      setIsEmailInvalid(true);
    } else {
      setIsEmailInvalid(false);
    }

    if (password === '') {
      setIsPasswordEmpty(true);
    } else {
      setIsPasswordEmpty(false);
    }

    // 입력이 올바르지 않은 경우에는 로그인 시도를 중단
    if (isEmailEmpty || isEmailInvalid || isPasswordEmpty) {
      return;
    }

    // 이메일과 패스워드가 존재하지 않을떄 로직 추가

    try {
      console.log(email, password);
    } catch (error) {
      setIsLoginError(true);
    }
  };

  return (
    <BaseModal
      isVisible={isLoginModalVisible}
      onClose={handleHideLoginModal}
      title='로그인 또는 회원가입'
    >
      <LoginModalContent onSubmit={handleSubmit}>
        <LoginModalText>☕️ 카페골목에 오신 것을 환영합니다.</LoginModalText>
        <EmailLogin
          email={email}
          password={password}
          handleChangeEmail={handleChangeEmail}
          handleChangePassword={handleChangePassword}
          handleSubmit={handleSubmit}
          isEmailEmpty={isEmailEmpty}
          isEmailInvalid={isEmailInvalid}
          isPasswordEmpty={isPasswordEmpty}
          isLoginError={isLoginError}
        />
        <OrText>또는</OrText>
        <KakaoLoginBtn />
        <SignupBtn type='button' onClick={handleShowSignupModal}>
          카페골목 회원가입 하기
        </SignupBtn>
      </LoginModalContent>
    </BaseModal>
  );
};

export default LoginModal;
