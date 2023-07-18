// src/components/signup/signupForm/signupForm.jsx

import React from 'react';
import PropTypes from 'prop-types';

import {
  EmailInput,
  PasswordInput,
  ConfirmPasswordInput,
  EmailLabel,
  PasswordLabel,
  ConfirmPasswordLabel,
  NicknameLabel,
  NicknameInput,
  SignupFormContent,
  SignupBtn,
} from './SignupFormStyle.js';
import WarningMsg from '../../warningMsg/WarningMsg.jsx';

const SignupForm = ({
  email,
  password,
  passwordConfirm,
  nickname,
  emailErrors,
  passwordErrors,
  passwordConfirmErrors,
  nicknameErrors,
  serverEmailError,
  serverNicknameError,
  handleChangeEmail,
  handleChangePassword,
  handleChangePasswordConfirm,
  handleChangeNickname,
  handleSignupSubmit,
}) => (
  <SignupFormContent>
    <EmailLabel htmlFor='user-email'>이메일</EmailLabel>
    <EmailInput
      type='text'
      id='user-email'
      name='user-email'
      placeholder='이메일을 입력해주세요.'
      value={email}
      onChange={handleChangeEmail}
      errors={emailErrors.length > 0 ? emailErrors : serverEmailError}
    />
    <WarningMsg
      show={emailErrors.length > 0}
      messages={emailErrors}
    ></WarningMsg>
    {serverEmailError && (
      <WarningMsg show={true} messages={[serverEmailError]} />
    )}
    <PasswordLabel htmlFor='user-pw'>비밀번호</PasswordLabel>
    <PasswordInput
      type='password'
      id='user-pw'
      name='user-pw'
      placeholder='특수문자 포함 10 ~ 20자 이내로 입력해 주세요.'
      value={password}
      onChange={handleChangePassword}
      errors={passwordErrors}
    />
    <WarningMsg
      show={passwordErrors.length > 0}
      messages={passwordErrors}
    ></WarningMsg>
    <ConfirmPasswordLabel htmlFor='user-pw-check'>
      비밀번호 재확인
    </ConfirmPasswordLabel>
    <ConfirmPasswordInput
      type='password'
      id='user-pw-check'
      name='user-pw-check'
      placeholder='비밀번호를 한번 더 입력해주세요.'
      value={passwordConfirm}
      onChange={handleChangePasswordConfirm}
      errors={passwordConfirmErrors}
    />
    <WarningMsg
      show={passwordConfirmErrors.length > 0}
      messages={passwordConfirmErrors}
    ></WarningMsg>
    <NicknameLabel htmlFor='user-nickname'>닉네임</NicknameLabel>
    <NicknameInput
      type='text'
      id='user-nickname'
      name='user-nickname'
      placeholder='2 ~ 20자로 입력해 주세요.'
      value={nickname}
      onChange={handleChangeNickname}
      errors={nicknameErrors.length > 0 ? nicknameErrors : serverNicknameError}
    />
    <WarningMsg
      show={nicknameErrors.length > 0}
      messages={nicknameErrors}
    ></WarningMsg>
    {serverNicknameError && (
      <WarningMsg show={true} messages={[serverNicknameError]} />
    )}
    <SignupBtn
      type='submit'
      onClick={handleSignupSubmit}
      disabled={
        emailErrors.length > 0 ||
        passwordErrors.length > 0 ||
        passwordConfirmErrors.length > 0 ||
        nicknameErrors.length > 0
      }
    >
      가입하기
    </SignupBtn>
  </SignupFormContent>
);

SignupForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  passwordConfirm: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  emailErrors: PropTypes.arrayOf(PropTypes.string).isRequired,
  passwordErrors: PropTypes.arrayOf(PropTypes.string).isRequired,
  passwordConfirmErrors: PropTypes.arrayOf(PropTypes.string).isRequired,
  nicknameErrors: PropTypes.arrayOf(PropTypes.string).isRequired,
  serverEmailError: PropTypes.string,
  serverNicknameError: PropTypes.string,
  handleChangeEmail: PropTypes.func.isRequired,
  handleChangePassword: PropTypes.func.isRequired,
  handleChangePasswordConfirm: PropTypes.func.isRequired,
  handleChangeNickname: PropTypes.func.isRequired,
  handleSignupSubmit: PropTypes.func.isRequired,
};

export default SignupForm;
