/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Links Úteis</h4>
          <ul>
            <li>
              <a href="#">Início</a>
            </li>
            <li>
              <a href="#">Catálogo</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Redes Sociais</h4>
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2024 Netflix Brasil . Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
