import { Link } from 'react-router-dom';
import '../styles/nav_styles.css';

const Header = () => {
  return (
    <nav className="nav">
      <Link to="/">LEWK</Link>
      <ul>
        <li>
          <Link to="/articles">Articles</Link>
        </li>
        <li>
          <Link to="/photoshoots">Photoshoots</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
