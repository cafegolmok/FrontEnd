// src/components/SignupModal/SignupModal.jsx

import React from 'react';

import {
  SignupModalContainer,
  SignupModalTop,
  SignupModalContent,
  SharedLabel,
  EmailInput,
  PasswordInput,
  SignupBtn,
  WarningMsg,
  CloseBtn,
  ConfirmPasswordInput,
} from './SignupModalStyle';

const SignupModal = () => {
  return (
    <SignupModalContainer>
      <SignupModalTop>
        <CloseBtn
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
        >
          <path d='m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z'></path>
        </CloseBtn>
        <h2>회원가입 완료하기</h2>
      </SignupModalTop>
      <SignupModalContent>
        <SharedLabel htmlFor='user-email'>이메일</SharedLabel>
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
        <SharedLabel htmlFor='user-pw'>비밀번호</SharedLabel>
        <PasswordInput
          type='password'
          id='user-pw'
          name='user-pw'
          placeholder='특수문자 포함 10 ~ 20자 이내로 입력해 주세요.'
        />
        <WarningMsg>비밀번호를 10 ~20자 이내로 입력해 주세요.</WarningMsg>
        <WarningMsg>특수문자를 포함해 주세요.</WarningMsg>
        <SharedLabel htmlFor='user-pw-check'>비밀번호 재확인</SharedLabel>
        <ConfirmPasswordInput
          type='password'
          id='user-pw-check'
          name='user-pw-check'
          placeholder='비밀번호를 한번 더 입력해주세요.'
        />
        <WarningMsg>
          비밀번호가 일치하지 않습니다. 다시 입력해 주세요.
        </WarningMsg>

        <SharedLabel htmlFor='user-nickname'>닉네임</SharedLabel>
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
    </SignupModalContainer>
  );
};

export default SignupModal;
