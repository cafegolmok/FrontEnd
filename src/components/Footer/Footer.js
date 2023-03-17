import './Footer.scss';

const Footer = () => {
  const markup = `
  <footer class="company-container">
  <section class="company">
    <h2 class="screen-out">기업정보</h2>
    <strong class="title-company">카페골목</strong>
    <ul class="link-sns">
      <li>
        <a href="#" class="link-github">
          <img src="assets/images/github.png" alt="" />
        </a>
      </li>

      <li>
        <a href="#" class="link-instagram">
          <img src="assets/images/instagram.png" alt="" />
        </a>
      </li>
    </ul>
  </section>
</footer>
`;
  return markup;
};

export default Footer;
