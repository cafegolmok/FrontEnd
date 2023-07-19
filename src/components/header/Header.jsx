// src/components/Header/Header.jsx

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../api/auth';

import {
  HeaderContainer,
  HeaderTop,
  Logo,
  ProfileContainer,
  ProfileBarImg,
  DefaultProfileImg,
  ProfileImg,
  SearchImg,
  SearchContainer,
  SearchInput,
  ProfileMoreInfo,
  SharedTab,
  SearchBtn,
} from './HeaderStyle';
import { ScreenOut } from '../../styles/commonStyle';

import Category from '../category/Category.jsx';
import { showLoginModal } from '../../store/modalSlice';
import { logout } from '../../store/authSlice';

const Header = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const userProfileImage = useSelector(state => state.auth.user?.profileImage);
  console.log(userProfileImage);
  const handleshowLoginModal = () => {
    dispatch(showLoginModal());
    setShowProfileMoreInfo(false);
  };

  // 로그아웃 처리 함수
  const handleLogout = async event => {
    event.stopPropagation();
    try {
      const response = await logoutUser();

      // 응답이 성공적인 경우, 프론트엔드 상태 업데이트
      if (response.status === 200) {
        dispatch(logout());
        router.push('/');
      }
      console.log(response.data);
    } catch (error) {
      // 로그아웃 요청이 실패했을 경우에도 프론트엔드 상태 업데이트
      dispatch(logout());
      console.error(error);
    }
  };

  const [showProfileMoreInfo, setShowProfileMoreInfo] = useState(false);
  const profileContainerRef = useRef(null);

  // 프로필 추가 정보 외부를 클릭했을 때 프로필 추가 정보를 숨기는 함수
  const handleModalOutsideClick = event => {
    if (
      showProfileMoreInfo &&
      profileContainerRef.current &&
      !profileContainerRef.current.contains(event.target)
    ) {
      setShowProfileMoreInfo(false);
    }
  };

  // showProfileMoreInfo 상태 변경 시마다 이벤트 리스너를 추가/제거하는 side effect
  useEffect(() => {
    if (showProfileMoreInfo) {
      document.addEventListener('mousedown', handleModalOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleModalOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleModalOutsideClick);
    };
  }, [showProfileMoreInfo]);

  return (
    <HeaderContainer>
      <HeaderTop>
        <ScreenOut as='h1'>카페골목 홈화면입니다.</ScreenOut>
        <Logo src='/assets/images/logo-cutout.png' alt='카페골목 로고' />
        {!router.pathname.includes('/profile') && (
          <SearchContainer htmlFor='search-bar'>
            <SearchInput
              type='text'
              placeholder='카페를 검색해 보세요'
              id='search-bar'
              maxLength={20}
            />
            <SearchBtn>
              <SearchImg
                xmlns='http://www.w3.org/2000/svg'
                width='15'
                height='15'
                viewBox='0 0 24 24'
              >
                <path d='M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z'></path>
              </SearchImg>
            </SearchBtn>
          </SearchContainer>
        )}
        <ProfileContainer
          ref={profileContainerRef}
          onClick={() => setShowProfileMoreInfo(!showProfileMoreInfo)}
        >
          <ProfileBarImg
            xmlns='http://www.w3.org/2000/svg'
            width='25'
            height='25'
            viewBox='0 0 24 24'
          >
            <path d='M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z'></path>
          </ProfileBarImg>
          {isLoggedIn && userProfileImage ? (
            <ProfileImg
              src={`http://localhost:8000/${userProfileImage}`}
              width='35'
              height='35'
            />
          ) : (
            <DefaultProfileImg
              xmlns='http://www.w3.org/2000/svg'
              width='33'
              height='33'
              viewBox='0 0 24 24'
            >
              <path d='M12 2C6.579 2 2 6.579 2 12s4.579 10 10 10 10-4.579 10-10S17.421 2 12 2zm0 5c1.727 0 3 1.272 3 3s-1.273 3-3 3c-1.726 0-3-1.272-3-3s1.274-3 3-3zm-5.106 9.772c.897-1.32 2.393-2.2 4.106-2.2h2c1.714 0 3.209.88 4.106 2.2C15.828 18.14 14.015 19 12 19s-3.828-.86-5.106-2.228z'></path>
            </DefaultProfileImg>
          )}

          {showProfileMoreInfo && !isLoggedIn && (
            <ProfileMoreInfo onClick={event => event.stopPropagation()}>
              <SharedTab onClick={handleshowLoginModal}>로그인</SharedTab>
              <SharedTab onClick={handleshowLoginModal}>회원가입</SharedTab>
            </ProfileMoreInfo>
          )}

          {showProfileMoreInfo && isLoggedIn && (
            <ProfileMoreInfo onClick={event => event.stopPropagation()}>
              <SharedTab>프로필 관리</SharedTab>
              <SharedTab>즐겨찾기</SharedTab>
              <SharedTab onClick={event => handleLogout(event)}>
                로그아웃
              </SharedTab>
            </ProfileMoreInfo>
          )}
        </ProfileContainer>
      </HeaderTop>
      {router.pathname === '/' && <Category />}{' '}
    </HeaderContainer>
  );
};

export default Header;
