import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
          style={{ color: currentPage === '/' ? '#7C505E' : 'black', fontWeight: currentPage === '/' ? 'bold' : 'normal' }}
        >
          About Me
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Portfolio"
          className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
          style={{ color: currentPage === '/Portfolio' ? '#7C505E' : 'black', fontWeight: currentPage === '/Portfolio' ? 'bold' : 'normal' }}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Resume"
          className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
          style={{ color: currentPage === '/Resume' ? '#7C505E' : 'black', fontWeight: currentPage === '/Resume' ? 'bold' : 'normal' }}
        >
          Resume
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
          style={{ color: currentPage === '/Contact' ? '#7C505E' : 'black', fontWeight: currentPage === '/Contact' ? 'bold' : 'normal' }}
        >
          Contact Me
        </Link>
      </li>
    </ul>
  );
}

export default Navigation;
