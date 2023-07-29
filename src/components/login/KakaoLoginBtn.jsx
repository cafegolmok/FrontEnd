import React from 'react';
import styled from 'styled-components';
import { SharedLoginBtn } from '../common/Button.jsx';
import { palette } from '../../styles/theme.js';

import { useDispatch } from 'react-redux';
import { login } from '../../store/authSlice.js';

import { kakaoLogin } from '../../api/auth.js';

const KakaoBtn = styled(SharedLoginBtn)`
  background-color: ${palette.yellowColor};
  font-weight: 500;
  font-size: 16px;
  color: ${palette.blackColor};
`;
const KakaoLoginBtn = () => {
  const dispatch = useDispatch();
  const handleKakaoLogin = async () => {
    if (typeof window !== 'undefined' && window.Kakao) {
      window.Kakao.Auth.login({
        success: authObj => {
          window.Kakao.API.request({
            url: '/v2/user/me',
            success: async res => {
              try {
                const response = await kakaoLogin(res.id);

                if (response.data.success) {
                  console.log('카카오 로그인 성공:', res);
                  dispatch(login(res));
                } else {
                  console.error('로그인 실패:', response.data.message);
                }
              } catch (error) {
                console.error('로그인 실패:', error);
              }
            },
            fail: error => {
              console.error('사용자 정보 가져오기 실패:', error);
            },
          });
        },
        fail: error => {
          console.error('카카오 로그인 실패:', error);
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
