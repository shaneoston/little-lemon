import {routes} from '../routes'

export const NavDesktop = () => {
    return (
        <ul className="hidden lg:flex lg:items-center gap-10 text-sm">
            {routes.map((route) => {
                const {title, href} = route;
                return <li key={title}>
                    <a href={href}
                       className="flex items-center gap-1 hover:text-gold transition-all">
                        {title}
                    </a>
                </li>
            })}
        </ul>
    )
}