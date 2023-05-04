// // src.components/Login/KakaoLogin.jsx

// import React from 'react';
// import LoginModal from './LoginModal/LoginModal.jsx';

// const KakaoLogin = () => {
//   const handleKakaoLogin = () => {
//     window.Kakao.Auth.login({
//       success: authObj => {
//         console.log('Kakao login success:', authObj);

//         // 사용자 정보 가져오기
//         window.Kakao.API.request({
//           url: '/v2/user/me',
//           success: res => {
//             console.log('User info:', res);
//           },
//           fail: error => {
//             console.error('Failed to get user info:', error);
//           },
//         });
//       },
//       fail: error => {
//         console.error('Kakao login failed:', error);
//       },
//     });
//   };
//   return <LoginModal handleKakaoLogin={handleKakaoLogin} />;
// };

// export default KakaoLogin;
