import './Header.scss';

import LoginModal from '../LoginModal/LoginModal';
import Overlay from '../Overlay/Overlay';
import { state } from '../../../store';

const Header = () => {
  // 요소 생성
  const header = document.createElement('header');
  const headerTop = document.createElement('div');
  const h1 = document.createElement('h1');
  const img = document.createElement('img');
  const label = document.createElement('label');
  const input = document.createElement('input');
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  const profileContainer = document.createElement('div');
  const profileBar = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'svg'
  );
  const profileBarPath = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  );
  const profile = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const profilePath = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  );

  const moreInfo = document.createElement('ul');
  moreInfo.classList.add('more-info', 'hidden');

  const loginTab = document.createElement('li');
  loginTab.classList.add('login-tab');
  loginTab.textContent = '로그인';

  const signupTab = document.createElement('li');
  signupTab.classList.add('signup-tab');
  signupTab.textContent = '회원가입';

  const categoryList = document.createElement('ul');

  // 상단 영역
  headerTop.classList.add('header-top');
  h1.classList.add('screen-out');
  h1.textContent = '카페골목 홈화면입니다.';
  img.setAttribute('src', 'assets/images/logo-cutout.png');
  img.setAttribute('alt', '카페골목 로고');
  img.classList.add('img-logo');

  // 검색바
  input.setAttribute('type', 'text');
  input.setAttribute('placeholder', '카페를 검색해 보세요');
  input.classList.add('search-cafe');
  input.setAttribute('id', 'search-bar');
  input.setAttribute('maxlength', '20');
  svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  svg.setAttribute('width', '26');
  svg.setAttribute('height', '26');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.classList.add('btn-search');
  path.setAttribute(
    'd',
    'M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z'
  );

  // 프로필 영역
  profileContainer.classList.add('profile-container');
  profileBar.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  profileBar.setAttribute('width', '30');
  profileBar.setAttribute('height', '30');
  profileBar.setAttribute('viewBox', '0 0 24 24');
  profileBar.classList.add('img-profile-bar');
  profileBarPath.setAttribute('d', 'M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z');
  profile.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  profile.setAttribute('width', '35');
  profile.setAttribute('height', '35');

  profile.setAttribute('viewBox', '0 0 24 24');
  profile.classList.add('img-profile');
  profilePath.setAttribute(
    'd',
    'M12 2C6.579 2 2 6.579 2 12s4.579 10 10 10 10-4.579 10-10S17.421 2 12 2zm0 5c1.727 0 3 1.272 3 3s-1.273 3-3 3c-1.726 0-3-1.272-3-3s1.274-3 3-3zm-5.106 9.772c.897-1.32 2.393-2.2 4.106-2.2h2c1.714 0 3.209.88 4.106 2.2C15.828 18.14 14.015 19 12 19s-3.828-.86-5.106-2.228z'
  );

  label.setAttribute('for', 'search-bar');
  label.classList.add('search-container');
  svg.appendChild(path);
  label.appendChild(input);
  label.appendChild(svg);

  profileBar.appendChild(profileBarPath);
  profileContainer.appendChild(profileBar);

  profile.appendChild(profilePath);
  profileContainer.appendChild(profile);

  headerTop.appendChild(h1);
  headerTop.appendChild(img);
  headerTop.appendChild(label);
  headerTop.appendChild(profileContainer);

  profileContainer.appendChild(moreInfo);
  moreInfo.appendChild(loginTab);
  moreInfo.appendChild(signupTab);

  // 카테고리 목록
  categoryList.classList.add('category-list');
  const categories = [
    {
      className: 'category-coffee',
      src: 'assets/images/coffee.png',
      alt: '커피 카테고리 버튼',
      name: '커피가 맛있어요'
    },
    {
      className: 'category-beverage',
      src: 'assets/images/beverage.png',
      alt: '음료 카테고리 버튼',
      name: '음료가 맛있어요'
    },
    {
      className: 'category-dessert',
      src: 'assets/images/short-cake.png',
      alt: '디저트 카테고리 버튼',
      name: '디저트가 맛있어요'
    },
    {
      className: 'category-speak',
      src: 'assets/images/speak.png',
      alt: '대화 카테고리 버튼',
      name: '대화하기 좋아요'
    },
    {
      className: 'category-seat',
      src: 'assets/images/chair.png',
      alt: '좌석 카테고리 버튼',
      name: '좌석이 편해요'
    },
    {
      className: 'category-socket',
      src: 'assets/images/plug.png',
      alt: '콘센트 카테고리 버튼',
      name: '콘센트가 많아요'
    },
    {
      className: 'category-study',
      src: 'assets/images/laptop.png',
      alt: '공부 카테고리 버튼',
      name: '집중하기 좋아요'
    },
    {
      className: 'category-money',
      src: 'assets/images/money.png',
      alt: '가성비 카테고리 버튼',
      name: '가성비가 좋아요'
    },
    {
      className: 'category-view',
      src: 'assets/images/island.png',
      alt: '전망 카테고리 버튼',
      name: '전망이 좋아요'
    },
    {
      className: 'category-mood',
      src: 'assets/images/sparkles.png',
      alt: '분위기 카테고리 버튼',
      name: '분위기가 좋아요'
    },
    {
      className: 'category-meeting',
      src: 'assets/images/people.png',
      alt: '모임 카테고리 버튼',
      name: '모임하기 좋아요'
    }
  ];

  categories.forEach(category => {
    const li = document.createElement('li');
    const categoryItem = document.createElement('div');
    const imgCategory = document.createElement('img');
    const strong = document.createElement('strong');

    li.classList.add('category-item', category.className);
    imgCategory.setAttribute('src', category.src);
    imgCategory.setAttribute('alt', category.alt);
    strong.classList.add('category-name');
    strong.textContent = category.name;

    categoryItem.appendChild(imgCategory);
    categoryItem.appendChild(strong);
    li.appendChild(categoryItem);
    categoryList.appendChild(li);
  });

  header.appendChild(headerTop);
  header.appendChild(categoryList);

  profileContainer.addEventListener('click', () => {
    moreInfo.classList.toggle('hidden');
  });

  loginTab.addEventListener('click', () => {
    state.modalVisible = true;
    state.overlayVisible = true;
  });

  signupTab.addEventListener('click', () => {
    state.modalVisible = true;
    state.overlayVisible = true;
  });

  return header;
};

export default Header;
