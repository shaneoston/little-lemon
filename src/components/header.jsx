import logo from '../assets/logo.svg';
import { NavDesktop } from './nav-desktop.jsx';
import { NavMobile } from './nav-mobile.jsx';

export const Header = () => {
  return (
    <header className="container max-w-4xl m-auto flex w-full justify-between items-center mb-5 pl-4 pt-4">
      <img src={logo} className="w-40 h-10" alt="Little Lemon logo" />
      <nav className="flex items-center justify-between px-1 md:px-5 py-1 lg:py-5">
        <NavDesktop />
        <NavMobile />
      </nav>
    </header>
  );
};