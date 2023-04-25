// src/components/Header/Header.jsx

import React from 'react';

import {
  CategoryImg,
  CategoryItem,
  CategoryList,
  HeaderContainer,
  HeaderTop,
  Logo,
  ProfileContainer,
  ProfileBar,
  ProfileImg,
  SearchButton,
  SearchContainer,
  SearchInput
} from './HeaderStyle';
import { ScreenOut } from '../../styles/commonStyle';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTop>
        <ScreenOut as="h1">카페골목 홈화면입니다.</ScreenOut>
        <Logo src="/assets/images/logo-cutout.png" alt="카페골목 로고" />
        <SearchContainer htmlFor="search-bar">
          <SearchInput
            type="text"
            placeholder="카페를 검색해 보세요"
            id="search-bar"
            maxLength={20}
          />
          <SearchButton
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
          >
            <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
          </SearchButton>
        </SearchContainer>
        <ProfileContainer>
          <ProfileBar
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
          </ProfileBar>
          <ProfileImg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.579 2 2 6.579 2 12s4.579 10 10 10 10-4.579 10-10S17.421 2 12 2zm0 5c1.727 0 3 1.272 3 3s-1.273 3-3 3c-1.726 0-3-1.272-3-3s1.274-3 3-3zm-5.106 9.772c.897-1.32 2.393-2.2 4.106-2.2h2c1.714 0 3.209.88 4.106 2.2C15.828 18.14 14.015 19 12 19s-3.828-.86-5.106-2.228z"></path>
          </ProfileImg>
        </ProfileContainer>
      </HeaderTop>
      <CategoryList>
        <CategoryItem className="category-coffee">
          <CategoryImg
            src="/assets/images/coffee.png"
            alt="커피 카테고리 버튼"
          />
          <strong className="category-name">커피가 맛있어요</strong>
        </CategoryItem>
        <CategoryItem className="category-beverage">
          <CategoryImg
            src="/assets/images/beverage.png"
            alt="음료 카테고리 버튼"
          />
          <strong className="category-name">음료가 맛있어요</strong>
        </CategoryItem>
        <CategoryItem className="category-dessert">
          <CategoryImg
            src="/assets/images/short-cake.png"
            alt="디저트 카테고리 버튼"
          />
          <strong className="category-name">디저트가 맛있어요</strong>
        </CategoryItem>
        <CategoryItem className="category-speak">
          <CategoryImg
            src="/assets/images/speak.png"
            alt="대화 카테고리 버튼"
          />
          <strong className="category-name">대화하기 좋아요</strong>
        </CategoryItem>
        <CategoryItem className="category-seat">
          <CategoryImg
            src="/assets/images/chair.png"
            alt="좌석 카테고리 버튼"
          />
          <strong className="category-name">좌석이 편해요</strong>
        </CategoryItem>
        <CategoryItem className="category-socket">
          <CategoryImg
            src="/assets/images/plug.png"
            alt="콘센트 카테고리 버튼"
          />
          <strong className="category-name">콘센트가 많아요</strong>
        </CategoryItem>
        <CategoryItem className="category-study">
          <CategoryImg
            src="/assets/images/laptop.png"
            alt="공부 카테고리 버튼"
          />
          <strong className="category-name">집중하기 좋아요</strong>
        </CategoryItem>
        <CategoryItem className="category-money">
          <CategoryImg
            src="/assets/images/money.png"
            alt="가성비 카테고리 버튼"
          />
          <strong className="category-name">가성비가 좋아요</strong>
        </CategoryItem>
        <CategoryItem className="category-view">
          <CategoryImg
            src="/assets/images/island.png"
            alt="전망 카테고리 버튼"
          />
          <strong className="category-name">전망이 좋아요</strong>
        </CategoryItem>
        <CategoryItem className="category-mood">
          <CategoryImg
            src="/assets/images/sparkles.png"
            alt="분위기 카테고리 버튼"
          />
          <strong className="category-name">분위기가 좋아요</strong>
        </CategoryItem>
        <CategoryItem className="category-meeting">
          <CategoryImg
            src="/assets/images/people.png"
            alt="모임 카테고리 버튼"
          />
          <strong className="category-name">모임하기 좋아요</strong>
        </CategoryItem>
      </CategoryList>
    </HeaderContainer>
  );
};

export default Header;
