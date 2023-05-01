// src/components/SignupModal/SignupModal.jsx

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hideSignupModal } from '../../store/actions';
import BaseModal from '../helpers/BaseModal.jsx';

import {
  SignupModalContent,
  EmailInput,
  PasswordInput,
  SignupBtn,
  WarningMsg,
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
        />
        <WarningMsg>이메일을 입력해 주세요.</WarningMsg>
        <WarningMsg>이메일을 50자 이내로 입력해 주세요.</WarningMsg>
        <WarningMsg>이메일 형식에 맞게 입력해 주세요.</WarningMsg>
        <WarningMsg>이미 가입된 이메일입니다.</WarningMsg>
        <PasswordLabel htmlFor='user-pw'>비밀번호</PasswordLabel>
        <PasswordInput
          type='password'
          id='user-pw'
          name='user-pw'
          placeholder='특수문자 포함 10 ~ 20자 이내로 입력해 주세요.'
        />
        <WarningMsg>비밀번호를 10 ~20자 이내로 입력해 주세요.</WarningMsg>
        <WarningMsg>특수문자를 포함해 주세요.</WarningMsg>
        <ConfirmPasswordLabel htmlFor='user-pw-check'>
          비밀번호 재확인
        </ConfirmPasswordLabel>
        <ConfirmPasswordInput
          type='password'
          id='user-pw-check'
          name='user-pw-check'
          placeholder='비밀번호를 한번 더 입력해주세요.'
        />
        <WarningMsg>
          비밀번호가 일치하지 않습니다. 다시 입력해 주세요.
        </WarningMsg>

        <NicknameLabel htmlFor='user-nickname'>닉네임</NicknameLabel>
        <ConfirmPasswordInput
          type='text'
          id='user-nickname'
          name='user-nickname'
          placeholder='2 ~ 20자로 입력해 주세요.'
        />
        <WarningMsg>
          닉네임은 2 ~ 20자 이내의 문자, 숫자와 특수기호(_),(-)만 사용
          가능합니다.
        </WarningMsg>
        <WarningMsg>닉네임을 2 ~ 20자 이내로 작성해 주세요.</WarningMsg>
        <WarningMsg>이미 사용중인 닉네임입니다.</WarningMsg>
        <SignupBtn>가입하기</SignupBtn>
      </SignupModalContent>
    </BaseModal>
  );
};

export default SignupModal;
