import {Link} from 'gatsby';
export function NavItem({location, children}: GenericProps<{ location: string; }>) {
    return <Link className="cursor-pointer text-sm text-primary-600 hover:opacity-30" activeClassName="opacity-70" to={location}>
        {children}
    </Link>
}