import { Link } from 'react-router-dom';
import { routes } from '../../routes';

export const NavDesktop = () => {
  const showRoutes = routes.filter(r => !r.hidden);
  return (
    <ul className="hidden lg:flex lg:items-center gap-10 text-sm">
      {showRoutes.map((route) => {
        const { title, href } = route;
        return <li key={title}>
          <Link to={href}
                className="flex items-center gap-1 hover:text-llgreen hover:font-bold hover:underline transition-all text-lg">
            {title}
          </Link>
        </li>;
      })}
    </ul>
  );
};