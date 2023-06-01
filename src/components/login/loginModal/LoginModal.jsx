// src/components/login/loginModal/LoginModal.jsx

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  hideLoginModal,
  loginModalToSignupModal,
} from '../../../store/modalSlice';
import BaseModal from '../../common/BaseModal.jsx';
import EmailLogin from '../emailLogin/EmailLogin.jsx';

import {
  LoginModalContent,
  LoginModalText,
  SignupBtn,
  OrText,
} from './LoginModalStyle';
import KakaoLoginBtn from '../KakaoLoginBtn.jsx';

import {
  validateLoginEmail,
  validateLoginPassword,
} from '../../../utils/validation';

const LoginModal = () => {
  const isLoginModalVisible = useSelector(
    state => state.modal.isLoginModalVisible
  );
  const dispatch = useDispatch();

  const handleHideLoginModal = () => {
    dispatch(hideLoginModal());
  };

  const handleLoginModalToSignupModal = () => {
    dispatch(loginModalToSignupModal());
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailErrors, setEmailErrors] = useState('');
  const [passwordErrors, setPasswordErrors] = useState('');

  const handleChangeEmail = event => {
    const emailValidationErrors = validateLoginEmail(event.target.value);
    setEmail(event.target.value);
    setEmailErrors(
      emailValidationErrors.length > 0 ? emailValidationErrors : []
    );
  };

  const handleChangePassword = event => {
    const passwordValidationErrors = validateLoginPassword(event.target.value);
    setPassword(event.target.value);
    setPasswordErrors(
      passwordValidationErrors.length > 0 ? passwordValidationErrors : []
    );
  };

  const handleSubmit = async event => {
    const emailValidationErrors = validateLoginEmail(email);
    const passwordValidationErrors = validateLoginPassword(password);
    event.preventDefault();

    setEmailErrors(
      emailValidationErrors.length > 0 ? emailValidationErrors : []
    );
    setPasswordErrors(
      passwordValidationErrors.length > 0 ? passwordValidationErrors : []
    );

    if (emailErrors.length > 0 || passwordErrors.length > 0) {
      return;
    }

    try {
      console.log(email, password);
    } catch (errors) {
      console.log(errors);
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
          emailErrors={emailErrors}
          passwordErrors={passwordErrors}
        />
        <OrText>또는</OrText>
        <KakaoLoginBtn />
        <SignupBtn type='button' onClick={handleLoginModalToSignupModal}>
          카페골목 회원가입 하기
        </SignupBtn>
      </LoginModalContent>
    </BaseModal>
  );
};

export default LoginModal;
