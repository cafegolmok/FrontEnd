// src/components/Login/LoginModal/LoginModalStyle.jsx

import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { hideLoginModal } from '../../../store/actions';
import BaseModal from '../../helpers/BaseModal.jsx';

import {
  LoginModalContent,
  LoginModalText,
  EmailInput,
  PasswordInput,
  OriginalBtn,
  SignupBtn,
  KakaoBtn,
  OrText,
  EmailLabel,
  PasswordLabel,
} from './LoginModalStyle';

import WarningMsg from '../../WarningMsg/WarningMsg.jsx';

const LoginModal = ({
  email,
  password,
  handleChangeEmail,
  handleChangePassword,
  handleSubmit,
  error,
}) => {
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);
  const [isLoginError, setIsLoginError] = useState(false);

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
      <LoginModalContent onSubmit={handleSubmit}>
        <LoginModalText>☕️ 카페골목에 오신 것을 환영합니다.</LoginModalText>
        <EmailLabel htmlFor='user-email'>이메일</EmailLabel>
        <EmailInput
          type='text'
          id='user-email'
          name='user-email'
          placeholder='이메일을 입력해주세요.'
          value={email}
          onChange={handleChangeEmail}
        />
        <WarningMsg show={isEmailEmpty} message='이메일을 입력해 주세요.' />{' '}
        <WarningMsg
          show={isEmailInvalid}
          message='이메일 형식에 맞게 입력해 주세요.'
        />{' '}
        <PasswordLabel htmlFor='user-pw'>비밀번호</PasswordLabel>
        <PasswordInput
          type='password'
          id='user-pw'
          name='user-pw'
          placeholder='비밀번호를 입력해주세요.'
          value={password}
          onChange={handleChangePassword}
        />
        <WarningMsg
          show={isPasswordEmpty}
          message='비밀번호를 입력해 주세요.'
        />{' '}
        <WarningMsg
          show={isLoginError}
          message='로그인 정보가 올바르지 않습니다. 다시 시도해 주세요.'
        />
        <OriginalBtn type='submit'>로그인</OriginalBtn>
        <OrText>또는</OrText>
        <KakaoBtn>카카오톡 계정으로 로그인</KakaoBtn>
        <SignupBtn>카페골목 회원가입 하기</SignupBtn>
      </LoginModalContent>
    </BaseModal>
  );
};

LoginModal.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleChangeEmail: PropTypes.func.isRequired,
  handleChangePassword: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
};

export default LoginModal;
