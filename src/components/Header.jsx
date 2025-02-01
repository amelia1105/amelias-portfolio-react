import Navigation from './Navigation';

function Header() {
  return (
    <header className="header text-center" style={{ backgroundColor: '#B9929F' }}>
      <h1 className="text-dark-pink pt-5 display-1" style={{ fontFamily: 'tahoma, serif', color: '#693A52' }}>Amelia Alvarado</h1>
      <Navigation />
    </header>
  );
}
  
export default Header;
  