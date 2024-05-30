import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useClickAway } from 'react-use';
import { Squash as Hamburger } from 'hamburger-react';
import { routes } from '../../routes';

export const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const { ref } = useRef(null);
  const showRoutes = routes.filter(r => !r.hidden);
  useClickAway(ref, () => setOpen(false));

  return (
    <div className="lg:hidden" ref={ref}>
      <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
      {isOpen && (
        <div
          className="container fixed bg-white shadow-4xl left-0 right-0 top-[5rem] p-5 pt-0 border border-little-green">
          <ul className="grid gap-2">
            {showRoutes.map(({ title, href }) => {
              return (
                <li
                  key={title}
                  className="w-full p-[0.08rem] rounded-xl">
                  <Link
                    onClick={() => setOpen((prev) => !prev)}
                    className={
                      'flex items-center justify-between w-full p-1 rounded-xl'
                    }
                    to={href}>
                    <span className="flex gap-1 text-lg">{title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};