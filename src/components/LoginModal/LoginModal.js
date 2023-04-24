import React from 'react';
import './LoginModal.scss';


const LoginModal = () => {
  return (
    <div className="container-login-modal hidden">
      <div className="top-login-modal">
        <h1>로그인 또는 회원가입</h1>
      </div>
      <div className="content-login-modal">
        <p className="text-login-modal">☕️ 카페골목에 오신 것을 환영합니다.</p>
        <label htmlFor="user-email" className="email">
          이메일
        </label>
        <input
          type="text"
          id="user-email"
          name="user-email"
          placeholder="이메일을 입력해주세요."
          className="input-email"
        />
        <strong className="warning-message email-empty hidden">
          이메일을 입력해 주세요.
        </strong>
        <strong className="warning-message wrong-email-type hidden">
          이메일 형식에 맞게 입력해 주세요.
        </strong>
        <label htmlFor="user-pw" className="password">
          비밀번호
        </label>
        <input
          type="password"
          id="user-pw"
          name="user-pw"
          placeholder="비밀번호를 입력해주세요."
          className="input-password"
        />
        <strong className="warning-message password-empty hidden">
          비밀번호를 입력해 주세요.
        </strong>
        <strong className="warning-message wrong-login-value hidden">
          로그인 정보가 올바르지 않습니다. 다시 시도해 주세요.
        </strong>
        <button className="button-login button-original">로그인</button>
        <span className="or-txt">또는</span>
        <button className="button-login button-kakao">
          카카오톡 계정으로 로그인
        </button>
        <button className="button-login button-signup">
          카페골목 회원가입 하기
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
