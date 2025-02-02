import { Link, useLocation } from 'react-router-dom';

// Navigation component with links to About Me, Portfolio, Resume, and Contact
function Navigation() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav justify-content-end">
      <li className="nav-item">
        {/* If you are on a page, the color of the tab is set to #D58DF6 and the font weight is set to bold */}
        <Link
          to="/"
          className={`nav-link ${currentPage === '/' ? 'active' : ''}`}
          style={{ color: currentPage === '/' ? '#D58DF6' : 'white', fontWeight: currentPage === '/' ? 'bold' : 'normal' }}
        >
          About Me
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Portfolio"
          className={`nav-link ${currentPage === '/Portfolio' ? 'active' : ''}`}
          style={{ color: currentPage === '/Portfolio' ? '#D58DF6' : 'white', fontWeight: currentPage === '/Portfolio' ? 'bold' : 'normal' }}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Resume"
          className={`nav-link ${currentPage === '/Resume' ? 'active' : ''}`}
          style={{ color: currentPage === '/Resume' ? '#D58DF6' : 'white', fontWeight: currentPage === '/Resume' ? 'bold' : 'normal' }}
        >
          Resume
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          className={`nav-link ${currentPage === '/Contact' ? 'active' : ''}`}
          style={{ color: currentPage === '/Contact' ? '#D58DF6' : 'white', fontWeight: currentPage === '/Contact' ? 'bold' : 'normal' }}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default Navigation;