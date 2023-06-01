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
  validateSignupPasswordConfirm,
  validateSignupEmail,
  validateSignupNickname,
  validateSignupPassword,
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

  const [emailErrors, setEmailErrors] = useState('');
  const [passwordErrors, setPasswordErrors] = useState('');
  const [passwordConfirmErrors, setPasswordConfirmErrors] = useState('');
  const [nicknameErrors, setNicknameErrors] = useState('');

  // 이벤트 핸들러
  const handleChangeEmail = event => {
    const emailValidationErrors = validateSignupEmail(event.target.value);
    setEmail(event.target.value);
    setEmailErrors(emailValidationErrors.length > 0 ? emailValidationErrors : []);
  };

  const handleChangePassword = event => {
    const passwordValidationErrors = validateSignupPassword(event.target.value);
    setPassword(event.target.value);
    setPasswordErrors(
      passwordValidationErrors.length > 0 ? passwordValidationErrors : []
    );
  };

  const handleChangePasswordConfirm = event => {
    const passwordConfirmValidationErrors = validateSignupPasswordConfirm(
      password,
      event.target.value
    );
    setPasswordConfirm(event.target.value);
    setPasswordConfirmErrors(
      passwordConfirmValidationErrors.length > 0
        ? passwordConfirmValidationErrors
        : []
    );
  };

  const handleChangeNickname = event => {
    const nicknameValidationErrors = validateSignupNickname(event.target.value);
    setNickname(event.target.value);
    setNicknameErrors(
      nicknameValidationErrors.length > 0 ? nicknameValidationErrors : []
    );
  };

  const handleSubmit = async event => {
    const emailValidationErrors = validateSignupEmail(email);
    const passwordValidationErrors = validateSignupPassword(password);
    const passwordConfirmValidationErrors = validateSignupPasswordConfirm(
      password,
      passwordConfirm
    );
    const nicknameValidationErrors = validateSignupNickname(nickname);

    event.preventDefault();

    setEmailErrors(emailValidationErrors.length > 0 ? emailValidationErrors : []);
    setPasswordErrors(
      passwordValidationErrors.length > 0 ? passwordValidationErrors : []
    );
    setPasswordConfirmErrors(passwordConfirmValidationErrors);
    setNicknameErrors(
      nicknameValidationErrors.length > 0 ? nicknameValidationErrors : []
    );

    setPasswordConfirmErrors(
      passwordConfirmValidationErrors.length > 0
        ? passwordConfirmValidationErrors
        : ''
    );

    if (
      emailValidationErrors.length > 0 ||
      passwordValidationErrors.length > 0 ||
      passwordConfirmValidationErrors.length > 0 ||
      nicknameValidationErrors.length > 0
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
    } catch (errors) {
      if (errors.response) {
        const errorsMessages = errors.response.data.errors;
        console.log('errors', errors);
        console.log(errorsMessages);
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
          errors={emailErrors}
        />
        <WarningMsg
          show={emailErrors.length > 0}
          messages={emailErrors}
        ></WarningMsg>
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
          errors={nicknameErrors}
        />
        <WarningMsg
          show={nicknameErrors.length > 0}
          messages={nicknameErrors}
        ></WarningMsg>
        <SignupBtn
          type='submit'
          onClick={handleSubmit}
          disabled={
            emailErrors.length > 0 ||
            passwordErrors.length > 0 ||
            passwordConfirmErrors.length > 0 ||
            nicknameErrors.length > 0
          }
        >
          가입하기
        </SignupBtn>
      </SignupModalContent>
    </BaseModal>
  );
};

export default SignupModal;
