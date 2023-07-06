// src/components/login/loginModal/LoginModal.jsx

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axiosInstance from '../../../axios.js';

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
  // 로그인 모달의 가시성 상태
  const isLoginModalVisible = useSelector(
    state => state.modal.isLoginModalVisible
  );
  const dispatch = useDispatch();

  // 로그인 모달을 숨기기
  const handleHideLoginModal = () => {
    dispatch(hideLoginModal());
  };

  // 로그인 모달에서 회원가입 모달로 전환
  const handleLoginModalToSignupModal = () => {
    dispatch(loginModalToSignupModal());
  };

  // 이메일과 비밀번호 입력값을 위한 상태
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 검증 에러들을 위한 상태
  const [emailErrors, setEmailErrors] = useState([]);
  const [passwordErrors, setPasswordErrors] = useState([]);

  // 이메일 입력값 변경을 처리
  const handleChangeEmail = event => {
    const emailValidationErrors = validateLoginEmail(event.target.value);
    setEmail(event.target.value);
    setEmailErrors(
      emailValidationErrors.length > 0 ? emailValidationErrors : []
    );
  };

  // 비밀번호 입력값 변경을 처리
  const handleChangePassword = event => {
    const passwordValidationErrors = validateLoginPassword(event.target.value);
    setPassword(event.target.value);
    setPasswordErrors(
      passwordValidationErrors.length > 0 ? passwordValidationErrors : []
    );
  };

  // 로그인 폼 제출을 처리
  const handleLoginSubmit = async event => {
    event.preventDefault();

    const emailValidationErrors = validateLoginEmail(email);
    const passwordValidationErrors = validateLoginPassword(password);

    setEmailErrors(
      emailValidationErrors.length > 0 ? emailValidationErrors : []
    );
    setPasswordErrors(
      passwordValidationErrors.length > 0 ? passwordValidationErrors : []
    );

    if (
      emailValidationErrors.length > 0 ||
      passwordValidationErrors.length > 0
    ) {
      return;
    }

    try {
      const response = await axiosInstance.post('/login', {
        email,
        password,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <BaseModal
      isVisible={isLoginModalVisible}
      onClose={handleHideLoginModal}
      title='로그인 또는 회원가입'
    >
      <LoginModalContent onSubmit={handleLoginSubmit}>
        <LoginModalText>☕️ 카페골목에 오신 것을 환영합니다.</LoginModalText>
        <EmailLogin
          email={email}
          password={password}
          handleChangeEmail={handleChangeEmail}
          handleChangePassword={handleChangePassword}
          handleLoginSubmit={handleLoginSubmit}
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
