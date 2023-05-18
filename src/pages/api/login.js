// src/pages/api/login.js

export default (req, res) => {
  const { username, password } = req.body;

  if (username && password) {
    const token = Buffer.from(`${username}:${password}`).toString('base64');

    res.status(200).json({ token: token });
  } else {
    res.status(400).json({ error: 'Invalid username or password' });
  }
};
