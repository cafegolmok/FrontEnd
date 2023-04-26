// src/components/Category/Category.jsx

import React from 'react';

import { CategoryImg, CategoryItem, CategoryList } from './CategoryStyle';

const categories = [
  {
    className: 'category-coffee',
    src: '/assets/images/coffee.png',
    alt: '커피 카테고리 버튼',
    name: '커피가 맛있어요'
  },
  {
    className: 'category-beverage',
    src: '/assets/images/beverage.png',
    alt: '음료 카테고리 버튼',
    name: '음료가 맛있어요'
  },
  {
    className: 'category-dessert',
    src: '/assets/images/short-cake.png',
    alt: '디저트 카테고리 버튼',
    name: '디저트가 맛있어요'
  },
  {
    className: 'category-speak',
    src: '/assets/images/speak.png',
    alt: '대화 카테고리 버튼',
    name: '대화하기 좋아요'
  },
  {
    className: 'category-seat',
    src: '/assets/images/chair.png',
    alt: '좌석 카테고리 버튼',
    name: '좌석이 편해요'
  },
  {
    className: 'category-socket',
    src: '/assets/images/plug.png',
    alt: '콘센트 카테고리 버튼',
    name: '콘센트가 많아요'
  },
  {
    className: 'category-study',
    src: '/assets/images/laptop.png',
    alt: '공부 카테고리 버튼',
    name: '집중하기 좋아요'
  },
  {
    className: 'category-money',
    src: '/assets/images/money.png',
    alt: '가성비 카테고리 버튼',
    name: '가성비가 좋아요'
  },
  {
    className: 'category-view',
    src: '/assets/images/island.png',
    alt: '전망 카테고리 버튼',
    name: '전망이 좋아요'
  },
  {
    className: 'category-mood',
    src: '/assets/images/sparkles.png',
    alt: '분위기 카테고리 버튼',
    name: '분위기가 좋아요'
  },
  {
    className: 'category-meeting',
    src: '/assets/images/people.png',
    alt: '모임 카테고리 버튼',
    name: '모임하기 좋아요'
  }
];

const Category = () => {
  return (
    <CategoryList>
      {categories.map(category => (
        <CategoryItem key={category.className} className={category.className}>
          <CategoryImg src={category.src} alt={category.alt} />
          <strong className="category-name">{category.name}</strong>
        </CategoryItem>
      ))}
    </CategoryList>
  );
};

export default Category;
