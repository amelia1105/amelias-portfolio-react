import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="section bg-white p-3">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
