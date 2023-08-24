import { Link } from 'react-router-dom';
import style from '../styles/Nav.module.css';

const Nav = () => (
  <nav>
    <ul className={style.navContainer}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li className={style.second}>|</li>
      <li>
        <Link to="/calculator">Calculator</Link>
      </li>
      <li className={style.second}>|</li>
      <li>
        <Link to="/quotes">Quotes</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
