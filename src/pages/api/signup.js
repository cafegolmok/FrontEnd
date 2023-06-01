// pages/api/signup.js

import {
  validateSignupEmail,
  validateSignupNickname,
  validateSignupPassword,
  validateSignupPasswordConfirm,
} from '../../utils/validation';
// 알맞은 유효성 검사 함수를 불러옵니다.

const signup = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  const { nickname, email, password, passwordConfirm, profileImage } =
    req.body.userInfo;

  // 닉네임 유효성 검사
  const nicknameValidationResult = validateSignupNickname(nickname);
  if (nicknameValidationResult !== true) {
    res
      .status(400)
      .json({ status: '400 Bad Request', error: nicknameValidationResult });
    return;
  }

  // 이메일 유효성 검사
  const emailValidationResult = validateSignupEmail(email);
  if (emailValidationResult !== true) {
    res
      .status(400)
      .json({ status: '400 Bad Request', error: emailValidationResult });
    return;
  }

  // 비밀번호 유효성 검사
  const passwordValidationResult = validateSignupPassword(password);
  if (passwordValidationResult !== true) {
    res
      .status(400)
      .json({ status: '400 Bad Request', error: passwordValidationResult });
    return;
  }

  // 비밀번호 재확인 검사
  if (password !== passwordConfirm) {
    res.status(400).json({
      status: '400 Bad Request',
      error: '비밀번호가 일치하지 않습니다. 다시 입력해 주세요.',
    });
    return;
  }

  // 이메일 및 닉네임이 이미 존재하는지 확인
  const emailExists = await checkEmailExistence(email);
  const nicknameExists = await checkNicknameExistence(nickname);
  if (emailExists) {
    res
      .status(400)
      .json({ status: '400 Bad Request', error: '이미 가입된 이메일입니다.' });
    return;
  }
  if (nicknameExists) {
    res.status(400).json({
      status: '400 Bad Request',
      error: '이미 사용중인 닉네임입니다.',
    });
    return;
  }

  // 모든 유효성 검사를 통과하면 사용자 생성 시도
  try {
    const user = await createUser({ nickname, email, password, profileImage });
    delete user.password;
    res.status(200).json({
      status: '200 OK',
      message: '회원가입 성공',
      userInfo: user,
    });
  } catch (error) {
    // 회원가입 실패 처리
    res.status(500).json({
      status: '500 Internal Server Error',
      error: '회원가입에 실패하였습니다. 다시 시도해주세요.',
    });
  }
};

// 예시를 위한 더미 함수
async function checkEmailExistence(email) {
  // 실제 데이터베이스 확인 로직으로 교체
  return false;
}

async function checkNicknameExistence(nickname) {
  // 실제 데이터베이스 확인 로직으로 교체
  return false;
}

async function createUser({ nickname, email, password, profileImage }) {
  // 실제 사용자 생성 로직으로 교체
  return {
    id: '123',
    nickname,
    email,
    password,
    profileImage,
    userStatus: '회원',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}

export default signup;
