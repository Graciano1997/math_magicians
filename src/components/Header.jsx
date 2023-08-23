import Logo from './Logo';
import Nav from './Nav';
import style from '../styles/Header.module.css';

const Header = () => (
  <header className={style.headerContainer}>
    <Logo />
    <Nav />
  </header>
);

export default Header;
