const Navbar = () => {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        LEWK
      </a>
      <ul>
        <li>
          <a href="/articles">Articles</a>
        </li>
        <li>
          <a href="/photoshoots">Photoshoots</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
