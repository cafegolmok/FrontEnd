// src/components/LoginModal/LoginModalStyle.jsx

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { hideLoginModal } from '../../store/actions';
import BaseModal from '../helpers/BaseModal.jsx';

import {
  LoginModalContent,
  LoginModalText,
  EmailInput,
  PasswordInput,
  OriginalBtn,
  SignupBtn,
  KakaoBtn,
  OrText,
  WarningMsg,
  EmailLabel,
  PasswordLabel,
} from './LoginModalStyle';

const LoginModal = () => {
  const isLoginModalVisible = useSelector(state => state.isLoginModalVisible);
  const dispatch = useDispatch();

  const handleHideLoginModal = () => {
    dispatch(hideLoginModal());
  };

  return (
    <BaseModal
      isVisible={isLoginModalVisible}
      onClose={handleHideLoginModal}
      title='로그인 또는 회원가입'
    >
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
    </BaseModal>
  );
};

export default LoginModal;
