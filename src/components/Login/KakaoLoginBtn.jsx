import React from 'react';
import styled from 'styled-components';
import { SharedBtn } from './loginModal/LoginModalStyle';
import { palette } from '../../styles/globalColor';

const KakaoBtn = styled(SharedBtn)`
  background-color: ${palette.yellowColor};
  font-weight: 500;
  font-size: 16px;
  color: ${palette.blackColor};
`;
const KakaoLoginBtn = () => {
  const handleKakaoLogin = () => {
    // window 객체가 있을 경우에만 카카오 로그인을 시도
    if (typeof window !== 'undefined' && window.Kakao) {
      window.Kakao.Auth.login({
        success: authObj => {
          console.log('Kakao login success:', authObj);

          // 사용자 정보 가져오기
          window.Kakao.API.request({
            url: '/v2/user/me',
            success: res => {
              console.log('User info:', res);
            },
            fail: error => {
              console.error('Failed to get user info:', error);
            },
          });
        },
        fail: error => {
          console.error('Kakao login failed:', error);
        },
      });
    }
  };

  return (
    <KakaoBtn type='button' onClick={handleKakaoLogin}>
      카카오톡 계정으로 로그인
    </KakaoBtn>
  );
};

export default KakaoLoginBtn;
