import React, { useState } from 'react';
import LoginModal from './LoginModal/LoginModal.jsx';

const EmailLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);
  const [isLoginError, setIsLoginError] = useState(false);

  const handleChangeEmail = event => {
    setEmail(event.target.value);
    console.log(event.target.value);

    // 동적으로 이메일 유효성 검사
    setIsEmailInvalid(!validateEmail(event.target.value));
  };

  const validateEmail = email => {
    const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return regex.test(email);
  };

  const handleChangePassword = event => {
    setPassword(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    if (email === '') {
      setIsEmailEmpty(true);
      return;
    }

    if (!validateEmail(email)) {
      setIsEmailInvalid(true);
      return;
    }

    if (password === '') {
      setIsPasswordEmpty(true);
      return;
    }

    // 이메일 패스워드가 존재하지 않을떄 로직 추가

    try {
      // 로그인 성공 시 처리
      console.log(email, password);
    } catch (error) {
      // 로그인 실패 시 처리
      setError('로그인에 실패했습니다. 이메일과 비밀번호를 확인하세요.');
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
      isEmailEmpty={isEmailEmpty}
      isEmailInvalid={isEmailInvalid}
      isPasswordEmpty={isPasswordEmpty}
      isLoginError={isLoginError}
    />
  );
};

export default EmailLogin;
