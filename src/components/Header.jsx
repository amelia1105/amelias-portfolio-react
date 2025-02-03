import Navigation from './Navigation';
import '../styles/header.css';

// Header component that includes the Navigation component
// Google Fonts 'Sacramento' is used for the h1 element
function Header() {
  return (
    <header className="header d-flex flex-row justify-content-between pt-5 ps-5 pb-0 pb-md-5 p-xl-5">
      <h1>
        Amelia Alvarado
      </h1>
      <Navigation />
    </header>
  );
}

export default Header;