import { useRef, useState } from 'react';
import { useClickAway } from 'react-use';
import { Squash as Hamburger } from 'hamburger-react';
import { routes } from '../routes';

export const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const { ref } = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <div className="lg:hidden" ref={ref}>
      <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
      {isOpen && (
        <div
          className="container fixed shadow-4xl left-0 right-0 top-[5rem] p-5 pt-0 border border-black">
          <ul className="grid gap-2">
            {routes.map(({ title, href }) => {

              return (
                <li
                  key={title}
                  className="w-full p-[0.08rem] rounded-xl">
                  <a
                    onClick={() => setOpen((prev) => !prev)}
                    className={
                      'flex items-center justify-between w-full p-1 rounded-xl'
                    }
                    href={href}>
                    <span className="flex gap-1 text-lg">{title}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};