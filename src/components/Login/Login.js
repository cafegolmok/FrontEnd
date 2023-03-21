// src/components/Login/Login.js

import './Login.scss';

const Login = () => {
  const markup = `
  <div class="container-login-modal">
  <div class="top-login-modal">
    <h1>로그인 또는 회원가입</h1>
  </div>
  <div class="content-login-modal">
    <h2 class="screen-out">
      이메일 로그인과 소셜로그인 또는 회원가입 할 수 있습니다.
    </h2>
    <p class="text-login-modal">☕️ 카페골목에 오신 것을 환영합니다.</p>
    <label for="user-email" class="email">이메일</label>
    <input
      type="text"
      id="user-email"
      name="user-email"
      placeholder="이메일을 입력해주세요."
      class="input-email"
    />
    <strong class="warning-message email-empty"
      >이메일을 입력해 주세요.</strong
    >
    <strong class="warning-message wrong-email-type"
      >이메일 형식에 맞게 입력해 주세요.</strong
    >

    <label for="user-pw" class="password">비밀번호</label>
    <input
      type="password"
      id="user-pw"
      name="user-pw"
      placeholder="비밀번호를 입력해주세요."
      class="input-password"
    />
    <strong class="warning-message password-empty"
      >비밀번호를 입력해 주세요.</strong
    >
    <strong class="warning-message wrong-login-value"
      >로그인 정보가 올바르지 않습니다. 다시 시도해 주세요.</strong
    >
    <a href="#" class="button-login button-original">로그인</a>
    <span class="or-txt">또는</span>
    <a href="#" class="button-login button-kakao"
      >카카오톡 계정으로 로그인</a
    >
    <a href="#" class="button-login button-signup"
      >카페골목 회원가입 하기</a
    >
  </div>
</div>
  `;
  return markup;
};

export default Login;
