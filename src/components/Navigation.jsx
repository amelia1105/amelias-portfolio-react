import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-tabs justify-content-end">
      <li className="nav-item">
        <Link
          to="/"
          className={`nav-link ${currentPage === '/' ? 'active' : ''}`}
          style={{ color: currentPage === '/' ? '#7C505E' : 'black', fontWeight: currentPage === '/' ? 'bold' : 'normal' }}
        >
          About Me
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Portfolio"
          className={`nav-link ${currentPage === '/Portfolio' ? 'active' : ''}`}
          style={{ color: currentPage === '/Portfolio' ? '#7C505E' : 'black', fontWeight: currentPage === '/Portfolio' ? 'bold' : 'normal' }}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Resume"
          className={`nav-link ${currentPage === '/Resume' ? 'active' : ''}`}
          style={{ color: currentPage === '/Resume' ? '#7C505E' : 'black', fontWeight: currentPage === '/Resume' ? 'bold' : 'normal' }}
        >
          Resume
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          className={`nav-link ${currentPage === '/Contact' ? 'active' : ''}`}
          style={{ color: currentPage === '/Contact' ? '#7C505E' : 'black', fontWeight: currentPage === '/Contact' ? 'bold' : 'normal' }}
        >
          Contact Me
        </Link>
      </li>
    </ul>
  );
}

export default Navigation;
