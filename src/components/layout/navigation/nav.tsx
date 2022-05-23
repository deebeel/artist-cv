import {NavGroup} from './navGroup';
import {NavItem} from './navItem';
import {graphql, useStaticQuery} from 'gatsby';
import slugify from '@sindresorhus/slugify';

export function Nav() {
    const workNav = useWorkNavigationInfo();
    return <nav className="flex flex-col gap-3">
        <NavGroup title="Works">
            {workNav.map(n => <NavItem key={n.id} location={`/works/${slugify(n.title)}`}>{n.title}</NavItem>)}
        </NavGroup>
        <NavGroup title="Info">
            <NavItem location="/">Home</NavItem>
            <NavItem location="/about">About</NavItem>
        </NavGroup>
    </nav>;
}

type WorkNavigation = {
    title: string;
    id: string;
}

function useWorkNavigationInfo() {
    const data = useStaticQuery(graphql`
    query allWorkNavigationInfo {
        allContentfulWork {
            nodes {
                id
                title
            }
        }
    }`);
    return data.allContentfulWork.nodes as WorkNavigation[]
}
