import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div className="singleCol social-media-icons-white d-flex justify-content-evenly">
        <a href="http://instagram.com">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://linktr.ee">
          <img src="/images/linktree.png" alt="linktree logo" />
        </a>
        <a href="http://tiktok.com">
          <FontAwesomeIcon icon={faTiktok} />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
