function FooterSection() {
  return (
    <footer className="footer__Container">
      <div className="footer__links">
        <a
          href="https://github.com/fernandozarate07"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__link">
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.instagram.com/ferno.zarate"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__link">
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
      <p className="footer__content">&copy; Fernando Zárate {new Date().getFullYear()}. All rights reserved.</p>
    </footer>
  );
}
export default FooterSection;
