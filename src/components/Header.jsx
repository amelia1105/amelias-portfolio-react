import Navigation from './Navigation';
import '../styles/Header.css';

function Header() {
    return (
      <header className="header">
        <h1>Welcome to my website! 😊</h1>
        <h2>Amelia Alvarado</h2>
        <Navigation className="nav" />
      </header>
    );
  }
  
  export default Header;
  