// src/components/Login/EmailLogin.jsx

import React from 'react';

import WarningMsg from '../../WarningMsg/WarningMsg.jsx';
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
      <LoginBtn type='submit'>로그인</LoginBtn>
    </EmailLoginContainer>
  );
};

export default EmailLogin;
