import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';

export const NavDesktop = () => {
  return (
    <ul className="hidden lg:flex lg:items-center gap-10 text-sm">
      {routes.map((route) => {
        const { title, href } = route;
        return <li key={title}>
          <NavLink to={href}
                   className="flex items-center gap-1 hover:text-llgreen hover:font-bold hover:underline transition-all text-lg">
            {title}
          </NavLink>
        </li>;
      })}
    </ul>
  );
};