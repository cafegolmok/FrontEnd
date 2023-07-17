// src/components/SignupModal/SignupModal.jsx

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  hideSignupModal,
  signupModalToLoginModal,
  signupModalToAddProfileImgModal,
} from '../../../store/modalSlice.js';
import { login } from '../../../store/authSlice.js';
import BaseModal from '../../common/BaseModal.jsx';
import WarningMsg from '../../warningMsg/WarningMsg.jsx';
import {
  validateSignupPasswordConfirm,
  validateSignupEmail,
  validateSignupNickname,
  validateSignupPassword,
} from '../../../utils/validation.js';
import { signupUser } from '../../../api/auth.js';

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

  // 액션 디스패치하는 핸들러 함수 정의
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

  // 각 입력창의 상태와 에러 메시지를 관리할 상태 정의
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [nickname, setNickname] = useState('');

  const [emailErrors, setEmailErrors] = useState([]);
  const [passwordErrors, setPasswordErrors] = useState('');
  const [passwordConfirmErrors, setPasswordConfirmErrors] = useState('');
  const [nicknameErrors, setNicknameErrors] = useState([]);
  const [serverEmailError, setServerEmailError] = useState('');
  const [serverNicknameError, setServerNicknameError] = useState('');

  // 이메일 핸들러
  const handleChangeEmail = event => {
    const emailValidationErrors = validateSignupEmail(event.target.value);
    setEmail(event.target.value);
    setEmailErrors(
      emailValidationErrors.length > 0 ? emailValidationErrors : []
    );
    setServerEmailError('');
  };

  // 비밀번호 핸들러
  const handleChangePassword = event => {
    const passwordValidationErrors = validateSignupPassword(event.target.value);
    setPassword(event.target.value);
    setPasswordErrors(
      passwordValidationErrors.length > 0 ? passwordValidationErrors : []
    );
  };

  // 비밀번호 확인 핸들러
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

  // 닉네임 핸들러
  const handleChangeNickname = event => {
    const nicknameValidationErrors = validateSignupNickname(event.target.value);
    setNickname(event.target.value);
    setNicknameErrors(
      nicknameValidationErrors.length > 0 ? nicknameValidationErrors : []
    );
    setServerNicknameError('');
  };

  // 회원가입 폼 제출 이벤트 핸들러
  const handleSignupSubmit = async event => {
    event.preventDefault();

    // 모든 입력 값에 대해 유효성 검사 진행 및 검사 결과 상태에 반영
    const emailValidationErrors = validateSignupEmail(email);
    const passwordValidationErrors = validateSignupPassword(password);
    const passwordConfirmValidationErrors = validateSignupPasswordConfirm(
      password,
      passwordConfirm
    );
    const nicknameValidationErrors = validateSignupNickname(nickname);

    setEmailErrors(
      emailValidationErrors.length > 0 ? emailValidationErrors : []
    );
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

    // 모든 입력 값이 유효하지 않으면 함수를 종료
    if (
      emailValidationErrors.length > 0 ||
      passwordValidationErrors.length > 0 ||
      passwordConfirmValidationErrors.length > 0 ||
      nicknameValidationErrors.length > 0
    ) {
      return;
    }

    // 모든 입력 값이 유효하면 서버에 회원가입 요청
    try {
      const response = await signupUser(
        nickname,
        email,
        password,
        passwordConfirm
      );
      const user = response.data.user;
      console.log('회원가입 성공', user);

      // 회원가입에 성공하면 바로 로그인 상태로 전환
      dispatch(login(user));

      // 회원가입에 성공하면 프로필 이미지 설정 모달로 전환
      handleSignupModalToAddProfileImgModal();
    } catch (errors) {
      // 서버에서 에러 메시지를 받으면 해당 메시지를 상태에 반영
      if (errors.response && errors.response.data) {
        console.log(errors.response.data);

        const serverErrorMessages = errors.response.data.errors;

        if (errors.response.status === 409) {
          serverErrorMessages.forEach(errorMessage => {
            if (errorMessage === '이미 사용 중인 이메일입니다.') {
              setServerEmailError(errorMessage);
            }
            if (errorMessage === '이미 사용 중인 닉네임입니다.') {
              setServerNicknameError(errorMessage);
            }
          });
          return;
        }
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
          errors={
            nicknameErrors.length > 0 ? nicknameErrors : serverNicknameError
          }
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
      </SignupModalContent>
    </BaseModal>
  );
};

export default SignupModal;
