// // src/pages/api/login.js

// import axios from 'axios';

// export default async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const response = await axios.post(
//       'http://localhost:8000/auth/login',
//       {
//         email,
//         password,
//       },
//       {
//         withCredentials: true,
//       }
//     );

//     res.status(200).json(response.data);
//   } catch (error) {
//     res.status(500).json({ error: error.toString() });
//   }
// };
