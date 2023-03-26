import './LoginModal.scss';

const Login = () => {
  const loginWrapper = document.createElement('div');
  loginWrapper.className = 'container-login-modal hidden';

  const loginTop = document.createElement('div');
  loginTop.className = 'top-login-modal';

  const loginTitle = document.createElement('h1');
  loginTitle.innerText = '로그인 또는 회원가입';

  const loginContent = document.createElement('div');
  loginContent.className = 'content-login-modal';

  const loginText = document.createElement('p');
  loginText.className = 'text-login-modal';
  loginText.innerText = '☕️ 카페골목에 오신 것을 환영합니다.';

  const emailLabel = document.createElement('label');
  emailLabel.className = 'email';
  emailLabel.setAttribute('for', 'user-email');
  emailLabel.innerText = '이메일';

  const emailInput = document.createElement('input');
  emailInput.type = 'text';
  emailInput.id = 'user-email';
  emailInput.name = 'user-email';
  emailInput.placeholder = '이메일을 입력해주세요.';
  emailInput.className = 'input-email';

  const emailEmptyWarning = document.createElement('strong');
  emailEmptyWarning.className = 'warning-message email-empty hidden';
  emailEmptyWarning.innerText = '이메일을 입력해 주세요.';

  const wrongEmailTypeWarning = document.createElement('strong');
  wrongEmailTypeWarning.className = 'warning-message wrong-email-type hidden';
  wrongEmailTypeWarning.innerText = '이메일 형식에 맞게 입력해 주세요.';

  const passwordLabel = document.createElement('label');
  passwordLabel.className = 'password';
  passwordLabel.setAttribute('for', 'user-pw');
  passwordLabel.innerText = '비밀번호';

  const passwordInput = document.createElement('input');
  passwordInput.type = 'password';
  passwordInput.id = 'user-pw';
  passwordInput.name = 'user-pw';
  passwordInput.placeholder = '비밀번호를 입력해주세요.';
  passwordInput.className = 'input-password';

  const passwordEmptyWarning = document.createElement('strong');
  passwordEmptyWarning.className = 'warning-message password-empty hidden';
  passwordEmptyWarning.innerText = '비밀번호를 입력해 주세요.';

  const wrongLoginValueWarning = document.createElement('strong');
  wrongLoginValueWarning.className = 'warning-message wrong-login-value hidden';
  wrongLoginValueWarning.innerText =
    '로그인 정보가 올바르지 않습니다. 다시 시도해 주세요.';

  const loginButton = document.createElement('a');
  loginButton.href = '#';
  loginButton.className = 'button-login button-original';
  loginButton.innerText = '로그인';

  const orText = document.createElement('span');
  orText.className = 'or-txt';
  orText.innerText = '또는';

  const kakaoLoginButton = document.createElement('a');
  kakaoLoginButton.href = '#';
  kakaoLoginButton.className = 'button-login button-kakao';
  kakaoLoginButton.innerText = '카카오톡 계정으로 로그인';

  const signUpButton = document.createElement('a');
  signUpButton.href = '#';
  signUpButton.className = 'button-login button-signup';
  signUpButton.innerText = '카페골목 회원가입 하기';

  // 로그인 모달 컴포넌트에 자식 요소들을 추가합니다.
  loginTop.appendChild(loginTitle);
  loginWrapper.appendChild(loginTop);

  loginContent.appendChild(loginText);
  loginContent.appendChild(emailLabel);
  loginContent.appendChild(emailInput);
  loginContent.appendChild(emailEmptyWarning);
  loginContent.appendChild(wrongEmailTypeWarning);
  loginContent.appendChild(passwordLabel);
  loginContent.appendChild(passwordInput);
  loginContent.appendChild(passwordEmptyWarning);
  loginContent.appendChild(wrongLoginValueWarning);
  loginContent.appendChild(loginButton);
  loginContent.appendChild(orText);
  loginContent.appendChild(kakaoLoginButton);
  loginContent.appendChild(signUpButton);
  loginWrapper.appendChild(loginContent);

  return loginWrapper;
};

export default Login;
