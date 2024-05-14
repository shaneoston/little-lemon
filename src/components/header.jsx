import logo from '../assets/logo.svg';
import { NavDesktop } from './nav-desktop.jsx';
import { NavMobile } from './nav-mobile.jsx';

export const Header = () => {
  return (
    <header className="flex w-full justify-between items-center">
      <img src={logo} className="w-40 h-10" alt="Little Lemon logo" />
      <nav className="flex items-center justify-between px-1 lg:px-5 py-1 lg:py-5">
        <NavDesktop />
        <NavMobile />
      </nav>
    </header>
  );
};