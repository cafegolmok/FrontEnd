import React from 'react';

import {
  LoginModalContainer,
  LoginModalTop,
  LoginModalContent,
  LoginModalText,
  SharedLabel,
  SharedInput,
  OriginalBtn,
  SignupBtn,
  KakaoBtn,
  OrText,
  WarningMsg
} from './LoginModalStyle';

const LoginModal = () => {
  return (
    <LoginModalContainer>
      <LoginModalTop>
        <h1>로그인 또는 회원가입</h1>
      </LoginModalTop>
      <LoginModalContent>
        <LoginModalText>☕️ 카페골목에 오신 것을 환영합니다.</LoginModalText>
        <SharedLabel htmlFor="user-email">이메일</SharedLabel>
        <SharedInput
          type="text"
          id="user-email"
          name="user-email"
          placeholder="이메일을 입력해주세요."
        />
        <WarningMsg>이메일을 입력해 주세요.</WarningMsg>
        <WarningMsg>이메일 형식에 맞게 입력해 주세요.</WarningMsg>
        <SharedLabel htmlFor="user-pw">비밀번호</SharedLabel>
        <SharedInput
          type="password"
          id="user-pw"
          name="user-pw"
          placeholder="비밀번호를 입력해주세요."
        />
        <WarningMsg>비밀번호를 입력해 주세요.</WarningMsg>
        <WarningMsg>
          로그인 정보가 올바르지 않습니다. 다시 시도해 주세요.
        </WarningMsg>
        <OriginalBtn>로그인</OriginalBtn>
        <OrText>또는</OrText>
        <KakaoBtn>카카오톡 계정으로 로그인</KakaoBtn>
        <SignupBtn>카페골목 회원가입 하기</SignupBtn>
      </LoginModalContent>
    </LoginModalContainer>
  );
};

export default LoginModal;
