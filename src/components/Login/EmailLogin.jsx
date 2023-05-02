import React, { useState } from 'react';
import LoginModal from './LoginModal/LoginModal.jsx';

const EmailLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleChangeEmail = event => {
    setEmail(event.target.value);
    console.log(event.target.value);
  };

  const handleChangePassword = event => {
    setPassword(event.target.value);
    console.log(event.target.value);
  };
// 
  const handleSubmit = async event => {
    event.preventDefault();
    try {
      // 로그인 성공 시 처리
      console.log(email);
      console.log(password);
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
