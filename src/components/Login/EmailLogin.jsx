import React, { useState } from 'react';
import LoginModal from './LoginModal/LoginModal.jsx';

const EmailLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true); // 이메일 유효성 여부 상태값 추가

  const handleChangeEmail = event => {
    setEmail(event.target.value);
    console.log(event.target.value);

    // 이메일 유효성 검사
    const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    setIsEmailValid(emailRegExp.test(event.target.value));
  };

  const handleChangePassword = event => {
    setPassword(event.target.value);
    console.log(event.target.value);
  };
  //
  const handleSubmit = async event => {
    event.preventDefault();
    try {
      if (isEmailValid) {
        // 이메일 유효성 검사를 통과한 경우에만 로그인 요청
        console.log(email, password);
      }
    } catch (error) {
      // 로그인 실패 시 처리
    }
  };

  return (
    <LoginModal
      email={email}
      password={password}
      handleChangeEmail={handleChangeEmail}
      handleChangePassword={handleChangePassword}
      handleSubmit={handleSubmit}
      error={error}
    />
  );
};

export default EmailLogin;
