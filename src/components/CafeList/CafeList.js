import './CafeList.scss';
import cafeDataList from '../../../data';

const CafeList = () => {
  const main = document.createElement('main');
  main.classList.add('main-container');

  const div = document.createElement('div');
  div.classList.add('posts-container');

  const h2 = document.createElement('h2');
  h2.classList.add('screen-out');
  h2.textContent = '가고 싶은 카페를 클릭해 보세요';

  const ul = document.createElement('ul');
  ul.classList.add('posts');

  cafeDataList.forEach(cafe => {
    const li = document.createElement('li');
    li.classList.add('post');

    const article = document.createElement('article');

    const img = document.createElement('img');
    img.src = cafe.imgToUrl;
    img.alt = '섬네일 이미지';
    img.classList.add('img-thumbnail');

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '26');
    svg.setAttribute('height', '26');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.classList.add('btn-bookmark');

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute(
      'd',
      'M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z'
    );

    svg.appendChild(path);

    const dl = document.createElement('dl');
    dl.classList.add('tags');

    const dt = document.createElement('dt');
    dt.classList.add('screen-out');
    dt.textContent = '카테고리';

    cafe.tags.forEach(tag => {
      const dd1 = document.createElement('dd');
      dd1.classList.add('tag-item');
      dd1.textContent = tag;
      dl.appendChild(dd1);
    });

    dl.appendChild(dt);

    const cafeContainer = document.createElement('div');
    cafeContainer.classList.add('cafe-container');

    const h3 = document.createElement('h3');
    h3.classList.add('cafe-name');
    h3.textContent = cafe.cafeName;

    const starDl = document.createElement('dl');

    const starDt = document.createElement('dt');
    const starSvg = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'svg'
    );
    starSvg.setAttribute('width', '15');
    starSvg.setAttribute('height', '15');
    starSvg.setAttribute('viewBox', '0 0 24 24');
    starSvg.classList.add('star');

    const starPath = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'path'
    );
    starPath.setAttribute(
      'd',
      'M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z'
    );

    starSvg.appendChild(starPath);
    starDt.appendChild(starSvg);
    starDl.appendChild(starDt);

    const starDd = document.createElement('dd');
    starDd.classList.add('star-number');
    starDd.textContent = cafe.starRating;

    starDl.appendChild(starDd);

    cafeContainer.appendChild(h3);
    cafeContainer.appendChild(starDl);

    const cafeLocation = document.createElement('strong');
    cafeLocation.classList.add('cafe-location');
    cafeLocation.textContent = cafe.location;

    article.appendChild(img);
    article.appendChild(svg);
    article.appendChild(dl);
    article.appendChild(cafeContainer);
    article.appendChild(cafeLocation);

    li.appendChild(article);
    ul.appendChild(li);
  });

  div.appendChild(h2);
  div.appendChild(ul);
  main.appendChild(div);

  return main;
};

export default CafeList;
