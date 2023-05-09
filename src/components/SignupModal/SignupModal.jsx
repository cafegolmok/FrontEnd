// src/components/SignupModal/SignupModal.jsx

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hideSignupModal } from '../../store/actions';
import BaseModal from '../helpers/BaseModal.jsx';
import WarningMsg from '../WarningMsg/WarningMsg.jsx';

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
} from './SignupModalStyle';

const SignupModal = () => {
  const isSignupModalVisible = useSelector(state => state.isSignupModalVisible);
  const dispatch = useDispatch();

  const handleHideSignupModal = () => {
    dispatch(hideSignupModal());
  };

  // 상태 추가
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [nickname, setNickname] = useState('');

  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [isEmailTooLong, setIsEmailTooLong] = useState(false);

  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);
  const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);
  const [isPasswordLengthInvalid, setIsPasswordLengthInvalid] = useState(false);
  const [isPasswordConfirmEmpty, setIsPasswordConfirmEmpty] = useState(false);
  const [isPasswordMismatch, setIsPasswordMismatch] = useState(false);
  const [isNicknameEmpty, setIsNicknameEmpty] = useState(false);
  const [isNicknameLengthInvalid, setIsNicknameLengthInvalid] = useState(false);
  const [isNicknameInvalid, setIsNicknameInvalid] = useState(false);

  // 입력값 검증 함수 추가
  const validateEmail = email => {
    const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return regex.test(email);
  };

  const validatePassword = password => {
    const regex = /^(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/;
    return regex.test(password);
  };

  const validateNickname = nickname => {
    const regex = /^[A-Za-z0-9_-]+$/;
    return regex.test(nickname);
  };

  // 이벤트 핸들러 수정
  const handleChangeEmail = event => {
    console.log(event.target.value);
    setEmail(event.target.value);
    setIsEmailEmpty(event.target.value === '');

    if (event.target.value !== '' && !validateEmail(event.target.value)) {
      setIsEmailInvalid(true);
    } else {
      setIsEmailInvalid(false);
    }

    if (event.target.value.length > 50) {
      setIsEmailTooLong(true);
    } else {
      setIsEmailTooLong(false);
    }
  };

  const handleChangePassword = event => {
    setPassword(event.target.value);
    setIsPasswordEmpty(event.target.value === '');

    if (event.target.value !== '' && !validatePassword(event.target.value)) {
      setIsPasswordInvalid(true);
    } else {
      setIsPasswordInvalid(false);
    }

    if (event.target.value.length < 10 || event.target.value.length > 20) {
      setIsPasswordLengthInvalid(true);
    } else {
      setIsPasswordLengthInvalid(false);
    }
  };

  const handleChangePasswordConfirm = event => {
    setPasswordConfirm(event.target.value);
    setIsPasswordConfirmEmpty(event.target.value === '');
  };

  const handleChangeNickname = event => {
    setNickname(event.target.value);
    setIsNicknameEmpty(event.target.value === '');

    if (event.target.value !== '' && !validateNickname(event.target.value)) {
      setIsNicknameInvalid(true);
    } else {
      setIsNicknameInvalid(false);
    }

    if (event.target.value.length < 2 || event.target.value.length > 20) {
      setIsNicknameLengthInvalid(true);
    } else {
      setIsNicknameLengthInvalid(false);
    }
  };

  // 회원가입 API 연동 및 결과 처리 로직 구현
  const handleSubmit = async event => {
    event.preventDefault();

    if (email === '') {
      setIsEmailEmpty(true);
    } else {
      setIsEmailEmpty(false);
    }

    if (email !== '' && !validateEmail(email)) {
      setIsEmailInvalid(true);
    } else {
      setIsEmailInvalid(false);
    }

    if (password === '') {
      setIsPasswordEmpty(true);
    } else {
      setIsPasswordEmpty(false);
    }

    if (passwordConfirm === '') {
      setIsPasswordConfirmEmpty(true);
    } else {
      setIsPasswordConfirmEmpty(false);
    }

    if (password !== passwordConfirm) {
      setIsPasswordMismatch(true);
    } else {
      setIsPasswordMismatch(false);
    }

    if (nickname === '') {
      setIsNicknameEmpty(true);
    } else {
      setIsNicknameEmpty(false);
    }

    if (!validateNickname(nickname)) {
      setIsNicknameInvalid(true);
    } else {
      setIsNicknameInvalid(false);
    }

    if (
      isEmailEmpty ||
      isEmailInvalid ||
      isPasswordEmpty ||
      isPasswordInvalid ||
      isPasswordConfirmEmpty ||
      isPasswordMismatch ||
      isNicknameEmpty ||
      isNicknameInvalid
    ) {
      return;
    }

    try {
      // 회원가입 API 연동 구현
      // 예: const response = await axios.post('/api/signup', { email, password, nickname });
      // 결과 처리
      // 예: if (response.status === 200) {
      //       alert('회원가입 성공');
      //       handleHideSignupModal();
      // 로그인 페이지로 이동 또는 로그인 상태로 변경하는 로직 구현
      // 예: history.push('/login');
      // }
    } catch (error) {
      // 서버에서 반환된 에러 메시지를 처리합니다.
      // 예: alert(error.response.data.message);
    }
  };

  return (
    <BaseModal
      isVisible={isSignupModalVisible}
      onClose={handleHideSignupModal}
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
          error={isEmailEmpty || isEmailInvalid || isEmailTooLong}
        />
        <WarningMsg
          show={isEmailEmpty}
          message='이메일을 입력해 주세요.'
        ></WarningMsg>
        <WarningMsg
          show={isEmailInvalid}
          message='이메일 형식에 맞게 작성해 주세요.'
        ></WarningMsg>
        <WarningMsg
          show={isEmailTooLong}
          message='이메일을 50자 이내로 입력해 주세요.'
        ></WarningMsg>
        {/* <WarningMsg>이메일 형식에 맞게 입력해 주세요.</WarningMsg> */}
        {/* <WarningMsg>이미 가입된 이메일입니다.</WarningMsg> */}
        <PasswordLabel htmlFor='user-pw'>비밀번호</PasswordLabel>
        <PasswordInput
          type='password'
          id='user-pw'
          name='user-pw'
          placeholder='특수문자 포함 10 ~ 20자 이내로 입력해 주세요.'
          value={password}
          onChange={handleChangePassword}
          error={isPasswordEmpty || isPasswordInvalid}
        />
        <WarningMsg
          show={isPasswordEmpty || isPasswordLengthInvalid}
          message='비밀번호를 10 ~ 20자 이내로 입력해 주세요.'
        ></WarningMsg>
        <WarningMsg
          show={isPasswordInvalid}
          message='특수문자를 포함해 주세요.'
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
          error={isPasswordConfirmEmpty || isPasswordMismatch}
        />
        <WarningMsg
          show={isPasswordConfirmEmpty}
          message='비밀번호를 한번 더 입력하세요.'
        ></WarningMsg>
        <WarningMsg
          show={isPasswordMismatch}
          message='비밀번호가 일치하지 않습니다. 다시 입력해 주세요.'
        ></WarningMsg>
        <NicknameLabel htmlFor='user-nickname'>닉네임</NicknameLabel>
        <ConfirmPasswordInput
          type='text'
          id='user-nickname'
          name='user-nickname'
          placeholder='2 ~ 20자로 입력해 주세요.'
          value={nickname}
          onChange={handleChangeNickname}
          error={isNicknameInvalid || isNicknameEmpty}
        />
        <WarningMsg
          show={isNicknameInvalid}
          message='닉네임은 문자와 숫자, 특수기호(_),(-)만 사용
          가능합니다.'
        ></WarningMsg>
        <WarningMsg
          show={isNicknameEmpty || isNicknameLengthInvalid}
          message='닉네임을 2 ~ 20자 이내로 작성해 주세요.'
        ></WarningMsg>
        {/* <WarningMsg>이미 사용중인 닉네임입니다.</WarningMsg> */}
        <SignupBtn type='submit' onClick={handleSubmit}>
          가입하기
        </SignupBtn>
      </SignupModalContent>
    </BaseModal>
  );
};

export default SignupModal;
