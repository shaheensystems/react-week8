import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header>
      <h3>NZ Bakery</h3>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
      </nav>

    </header>
  );
}

export default Header;
