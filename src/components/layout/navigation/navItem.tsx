import {Link} from 'gatsby';
export function NavItem({location, children}: GenericProps<{ location: string; }>) {
    return <Link className="cursor-pointer text-sm text-primary-600" to={location}>
        {children}
    </Link>
}