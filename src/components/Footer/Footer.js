import './Footer.scss';

const Footer = () => {
  const footer = document.createElement('footer');
  footer.classList.add('company-container');

  const section = document.createElement('section');
  section.classList.add('company');

  const title = document.createElement('strong');
  title.classList.add('title-company');
  title.textContent = '카페골목';

  const ul = document.createElement('ul');
  ul.classList.add('link-sns');

  const li1 = document.createElement('li');
  const a1 = document.createElement('a');
  a1.href = '#';
  a1.classList.add('link-github');
  const img1 = document.createElement('img');
  img1.src = 'assets/images/github.png';
  img1.alt = 'GitHub 로고';
  a1.appendChild(img1);
  li1.appendChild(a1);

  const li2 = document.createElement('li');
  const a2 = document.createElement('a');
  a2.href = '#';
  a2.classList.add('link-instagram');
  const img2 = document.createElement('img');
  img2.src = 'assets/images/instagram.png';
  img2.alt = 'Instagram 로고';
  a2.appendChild(img2);
  li2.appendChild(a2);

  ul.appendChild(li1);
  ul.appendChild(li2);

  section.appendChild(title);
  section.appendChild(ul);
  footer.appendChild(section);

  return footer;
};

export default Footer;
