import Navigation from './Navigation';

// Header component that includes the Navigation component
// Google Fonts 'Sacramento' is used for the h1 element
function Header() {
  return (
    <header className="header d-flex flex-column flex-lg-row justify-content-between align-items-center p-5">
      <h1 className="display-1 text-center text-md-start" style={{ fontFamily: "'Sacramento', cursive", color: '#D58DF6' }}>
        Amelia Alvarado
      </h1>
      <Navigation />
    </header>
  );
}

export default Header;