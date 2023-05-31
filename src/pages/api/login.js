// src/pages/api/login.js

export default function login(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  const { email, password } = req.body;

  // 로그인 처리 로직
  // ...

  // 로그인 성공 시 응답
  res.status(200).json({ message: '로그인 성공' });

  // 로그인 실패 시 응답
  res.status(401).json({ error: '로그인 실패' });
}
