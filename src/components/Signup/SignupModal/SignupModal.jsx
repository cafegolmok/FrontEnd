// src/components/SignupModal/SignupModal.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import {
  hideSignupModal,
  signupModalToLoginModal,
  signupModalToAddProfileImgModal,
} from '../../../store/modalSlice.js';
import BaseModal from '../../common/BaseModal.jsx';
import WarningMsg from '../../warningMsg/WarningMsg.jsx';
import {
  validatePasswordConfirm,
  validateEmail,
  validateNickname,
  validatePassword,
} from '../../../utils/validation.js';

import {
  SignupModalContent,
  EmailInput,
  PasswordInput,
  SignupBtn,
  ConfirmPasswordInput,
  EmailLabel,
  PasswordLabel,
  ConfirmPasswordLabel,
  NicknameLabel,
  NicknameInput,
} from './SignupModalStyle';

const SignupModal = () => {
  const isSignupModalVisible = useSelector(
    state => state.modal.isSignupModalVisible
  );

  const dispatch = useDispatch();

  const handleHideSignupModal = () => {
    dispatch(hideSignupModal());
  };

  const handleSignupModalToLoginModal = () => {
    dispatch(signupModalToLoginModal());
  };

  const handleSignupModalToAddProfileImgModal = () => {
    console.log('모달전환');
    dispatch(signupModalToAddProfileImgModal());
  };

  // 각 입력창의 값과 검증에 대한 상태 정의
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [nickname, setNickname] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordConfirmError, setPasswordConfirmError] = useState('');
  const [nicknameError, setNicknameError] = useState('');

  // 이벤트 핸들러
  const handleChangeEmail = event => {
    const emailValidationError = validateEmail(event.target.value);
    setEmail(event.target.value);
    setEmailError(emailValidationError !== true ? emailValidationError : '');
  };

  const handleChangePassword = event => {
    const passwordValidationError = validatePassword(event.target.value);
    setPassword(event.target.value);
    setPasswordError(
      passwordValidationError !== true ? passwordValidationError : ''
    );
  };

  const handleChangePasswordConfirm = event => {
    const passwordConfirmValidationError = validatePasswordConfirm(
      password,
      event.target.value
    );
    setPasswordConfirm(event.target.value);
    setPasswordConfirmError(
      passwordConfirmValidationError !== true
        ? passwordConfirmValidationError
        : ''
    );
  };

  const handleChangeNickname = event => {
    const nicknameValidationError = validateNickname(event.target.value);
    setNickname(event.target.value);
    setNicknameError(
      nicknameValidationError !== true ? nicknameValidationError : ''
    );
  };

  const handleSubmit = async event => {
    event.preventDefault();

    const emailValidationError = validateEmail(email);
    const passwordValidationError = validatePassword(password);
    const passwordConfirmValidationError = validatePasswordConfirm(
      password,
      passwordConfirm
    );
    const nicknameValidationError = validateNickname(nickname);

    setEmailError(emailValidationError !== true ? emailValidationError : '');
    setPasswordError(
      passwordValidationError !== true ? passwordValidationError : ''
    );
    setPasswordConfirmError(passwordConfirmValidationError);
    setNicknameError(
      nicknameValidationError !== true ? nicknameValidationError : ''
    );

    setPasswordConfirmError(
      passwordConfirmValidationError !== true
        ? passwordConfirmValidationError
        : ''
    );

    if (
      !emailValidationError ||
      !passwordValidationError ||
      !passwordConfirmValidationError ||
      !nicknameValidationError
    ) {
      return;
    }

    try {
      const response = await axios.post('/api/signup', {
        nickname,
        email,
        password,
        passwordConfirm,
      });
      const user = response.data.userInfo;
      console.log('회원가입 성공', user);
      handleSignupModalToAddProfileImgModal();
    } catch (error) {
      if (error.response) {
        const errorMessage = error.response.data.error;
        console.log('error', error);
        console.log(errorMessage);
      }
    }
  };

  return (
    <BaseModal
      isVisible={isSignupModalVisible}
      onClose={handleHideSignupModal}
      onBack={handleSignupModalToLoginModal}
      title='회원가입 완료하기'
    >
      <SignupModalContent>
        <EmailLabel htmlFor='user-email'>이메일</EmailLabel>
        <EmailInput
          type='text'
          id='user-email'
          name='user-email'
          placeholder='이메일을 입력해주세요.'
          value={email}
          onChange={handleChangeEmail}
          error={!!emailError}
        />
        <WarningMsg show={!!emailError} message={emailError}></WarningMsg>
        <PasswordLabel htmlFor='user-pw'>비밀번호</PasswordLabel>
        <PasswordInput
          type='password'
          id='user-pw'
          name='user-pw'
          placeholder='특수문자 포함 10 ~ 20자 이내로 입력해 주세요.'
          value={password}
          onChange={handleChangePassword}
          error={!!passwordError}
        />
        <WarningMsg show={!!passwordError} message={passwordError}></WarningMsg>
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
          error={!!passwordConfirmError}
        />
        <WarningMsg
          show={!!passwordConfirmError}
          message={passwordConfirmError}
        ></WarningMsg>

        <NicknameLabel htmlFor='user-nickname'>닉네임</NicknameLabel>
        <NicknameInput
          type='text'
          id='user-nickname'
          name='user-nickname'
          placeholder='2 ~ 20자로 입력해 주세요.'
          value={nickname}
          onChange={handleChangeNickname}
          error={!!nicknameError}
        />
        <WarningMsg show={!!nicknameError} message={nicknameError}></WarningMsg>

        <SignupBtn
          type='submit'
          onClick={handleSubmit}
          disabled={
            !!(
              emailError ||
              passwordError ||
              passwordConfirmError ||
              nicknameError
            )
          }
        >
          가입하기
        </SignupBtn>
      </SignupModalContent>
    </BaseModal>
  );
};

export default SignupModal;
