// src/components/Category/Category.jsx

import React from 'react';

import { CategoryImg, CategoryItem, CategoryList } from './CategoryStyle';

const Category = () => {
  return (
    <CategoryList>
      <CategoryItem className="category-coffee">
        <CategoryImg src="/assets/images/coffee.png" alt="커피 카테고리 버튼" />
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
        <CategoryImg src="/assets/images/speak.png" alt="대화 카테고리 버튼" />
        <strong className="category-name">대화하기 좋아요</strong>
      </CategoryItem>
      <CategoryItem className="category-seat">
        <CategoryImg src="/assets/images/chair.png" alt="좌석 카테고리 버튼" />
        <strong className="category-name">좌석이 편해요</strong>
      </CategoryItem>
      <CategoryItem className="category-socket">
        <CategoryImg src="/assets/images/plug.png" alt="콘센트 카테고리 버튼" />
        <strong className="category-name">콘센트가 많아요</strong>
      </CategoryItem>
      <CategoryItem className="category-study">
        <CategoryImg src="/assets/images/laptop.png" alt="공부 카테고리 버튼" />
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
        <CategoryImg src="/assets/images/island.png" alt="전망 카테고리 버튼" />
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
        <CategoryImg src="/assets/images/people.png" alt="모임 카테고리 버튼" />
        <strong className="category-name">모임하기 좋아요</strong>
      </CategoryItem>
    </CategoryList>
  );
};

export default Category;
