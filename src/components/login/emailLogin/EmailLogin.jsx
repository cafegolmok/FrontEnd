// src/components/Login/EmailLogin.jsx

import React from 'react';
import PropTypes from 'prop-types';

import WarningMsg from '../../warningMsg/WarningMsg.jsx';
import {
  EmailLoginContainer,
  EmailLabel,
  PasswordLabel,
  EmailInput,
  PasswordInput,
  LoginBtn,
} from './EmailLoginStyle.js';

const EmailLogin = ({
  email,
  password,
  handleChangeEmail,
  handleChangePassword,
  isEmailEmpty,
  isEmailInvalid,
  isPasswordEmpty,
  isLoginError,
}) => {
  const handleSubmit = async () => {
    // 이메일, 비밀번호 등의 유효성 검사 수행

    if (isEmailEmpty || isEmailInvalid) {
      // 이메일이 비어있거나 유효하지 않은 경우 처리 로직
      return;
    }

    if (isPasswordEmpty) {
      // 비밀번호가 비어있는 경우 처리 로직
      return;
    }

    // 유효성 검사 통과한 경우 로그인 처리 로직
    // 예: 서버에 로그인 요청을 보내는 등의 동작 수행

    try {
      // 비동기 동작 수행 (예: 서버에 로그인 요청)
      console.log('로그인 성공');

      // 로그인 성공 처리 로직
    } catch (error) {
      // 예외 상황 처리 로직
      console.error('로그인 오류:', error);
      // 예외 메시지를 사용자에게 표시하는 등의 동작 수행
    }
  };

  const isSubmitButtonDisabled =
    isEmailEmpty || isEmailInvalid || isPasswordEmpty;

  return (
    <EmailLoginContainer>
      <EmailLabel htmlFor='user-email'>이메일</EmailLabel>
      <EmailInput
        type='text'
        id='user-email'
        name='user-email'
        placeholder='이메일을 입력해주세요.'
        value={email}
        onChange={handleChangeEmail}
        error={isEmailEmpty || isEmailInvalid}
      />
      <WarningMsg show={isEmailEmpty} message='이메일을 입력해 주세요.' />
      <WarningMsg
        show={isEmailInvalid}
        message='이메일 형식에 맞게 입력해 주세요.'
      />
      <PasswordLabel htmlFor='user-pw'>비밀번호</PasswordLabel>
      <PasswordInput
        type='password'
        id='user-pw'
        name='user-pw'
        placeholder='비밀번호를 입력해주세요.'
        value={password}
        onChange={handleChangePassword}
        error={isPasswordEmpty || isLoginError}
      />
      <WarningMsg show={isPasswordEmpty} message='비밀번호를 입력해 주세요.' />
      <WarningMsg
        show={isLoginError}
        message='로그인 정보가 올바르지 않습니다. 다시 시도해 주세요.'
      />
      <LoginBtn
        type='submit'
        disabled={isSubmitButtonDisabled}
        onClick={handleSubmit}
      >
        로그인
      </LoginBtn>
    </EmailLoginContainer>
  );
};

EmailLogin.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleChangeEmail: PropTypes.func.isRequired,
  handleChangePassword: PropTypes.func.isRequired,
  isEmailEmpty: PropTypes.bool.isRequired,
  isEmailInvalid: PropTypes.bool.isRequired,
  isPasswordEmpty: PropTypes.bool.isRequired,
  isLoginError: PropTypes.bool.isRequired,
};

export default EmailLogin;
