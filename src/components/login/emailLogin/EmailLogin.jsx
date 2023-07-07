// src/components/login/emailLogin/EmailLogin.jsx

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
  emailErrors,
  passwordErrors,
  handleLoginSubmit,
  serverLoginErrors,
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
        errors={passwordErrors.length > 0 ? passwordErrors : serverLoginErrors}
      />
      <WarningMsg show={emailErrors.length > 0} messages={emailErrors} />

      <PasswordLabel htmlFor='user-pw'>비밀번호</PasswordLabel>
      <PasswordInput
        type='password'
        id='user-pw'
        name='user-pw'
        placeholder='비밀번호를 입력해주세요.'
        value={password}
        onChange={handleChangePassword}
        errors={passwordErrors.length > 0 ? passwordErrors : serverLoginErrors}
      />
      <WarningMsg show={passwordErrors.length > 0} messages={passwordErrors} />
      {serverLoginErrors && (
        <WarningMsg
          show={serverLoginErrors}
          messages={['로그인 정보가 올바르지 않습니다. 다시 시도해 주세요.']}
        />
      )}

      <LoginBtn
        type='submit'
        disabled={emailErrors.length > 0 || passwordErrors.length > 0}
        onClick={handleLoginSubmit}
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
  emailErrors: PropTypes.arrayOf(PropTypes.string).isRequired,
  passwordErrors: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleLoginSubmit: PropTypes.func.isRequired,
  serverLoginErrors: PropTypes.string.isRequired,
};

export default EmailLogin;
