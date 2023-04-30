// src/components/SignupModal/SignupModalStyle.js

import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { hideLoginModal } from '../../store/actions';

import {
  LoginModalContainer,
  LoginModalTop,
  LoginModalContent,
  LoginModalText,
  EmailInput,
  PasswordInput,
  OriginalBtn,
  SignupBtn,
  KakaoBtn,
  OrText,
  WarningMsg,
  CloseBtn,
  EmailLabel,
  PasswordLabel,
} from './LoginModalStyle';

const LoginModal = () => {
  const isLoginModalVisible = useSelector(state => state.isLoginModalVisible);
  const dispatch = useDispatch();
  const loginModalRef = useRef(null);

  const handlehideLoginModal = () => {
    dispatch(hideLoginModal());
  };

  const handleModalOutsideClick = event => {
    if (
      loginModalRef.current &&
      !loginModalRef.current.contains(event.target)
    ) {
      handlehideLoginModal();
    }
  };

  useEffect(() => {
    if (isLoginModalVisible) {
      document.addEventListener('mousedown', handleModalOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleModalOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleModalOutsideClick);
    };
  }, [isLoginModalVisible]);

  if (!isLoginModalVisible) {
    return null;
  }

  return (
    <LoginModalContainer ref={loginModalRef}>
      <LoginModalTop>
        <CloseBtn
          onClick={handlehideLoginModal}
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
        >
          <path d='m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z'></path>
        </CloseBtn>
        <h2>로그인 또는 회원가입</h2>
      </LoginModalTop>
      <LoginModalContent>
        <LoginModalText>☕️ 카페골목에 오신 것을 환영합니다.</LoginModalText>
        <EmailLabel htmlFor='user-email'>이메일</EmailLabel>
        <EmailInput
          type='text'
          id='user-email'
          name='user-email'
          placeholder='이메일을 입력해주세요.'
        />
        <WarningMsg>이메일을 입력해 주세요.</WarningMsg>
        <WarningMsg>이메일 형식에 맞게 입력해 주세요.</WarningMsg>
        <PasswordLabel htmlFor='user-pw'>비밀번호</PasswordLabel>
        <PasswordInput
          type='password'
          id='user-pw'
          name='user-pw'
          placeholder='비밀번호를 입력해주세요.'
        />
        <WarningMsg>비밀번호를 입력해 주세요.</WarningMsg>
        <WarningMsg>
          로그인 정보가 올바르지 않습니다. 다시 시도해 주세요.
        </WarningMsg>
        <OriginalBtn>로그인</OriginalBtn>
        <OrText>또는</OrText>
        <KakaoBtn>카카오톡 계정으로 로그인</KakaoBtn>
        <SignupBtn>카페골목 회원가입 하기</SignupBtn>
      </LoginModalContent>
    </LoginModalContainer>
  );
};

export default LoginModal;
