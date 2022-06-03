import {NavGroup} from './navGroup';
import {NavItem} from './navItem';
import {graphql, useStaticQuery} from 'gatsby';

export function Nav() {
    const workNav = useWorkNavigationInfo();
    return <nav className="flex flex-col gap-3">
        <NavGroup>
            {workNav.map(n => <NavItem key={n.path} location={n.path}>{n.pageContext.title}</NavItem>)}
        </NavGroup>
        <NavGroup>
            <NavItem location="/about">About</NavItem>
            <NavItem location="/contacts">Contacts</NavItem>
            <NavItem location="/">Events</NavItem>
        </NavGroup>
    </nav>;
}

type WorkNavigation = {
    path: string;
    pageContext: { title: string };
}

function useWorkNavigationInfo() {
    const data = useStaticQuery(graphql`
    query allWorkNavigationInfo {
        worksNavigation:allSitePage(filter: {path: {glob: "/works/*"}}) {
            nodes {
                path
                pageContext
            }
        }
    }`);
    return data.worksNavigation.nodes as WorkNavigation[]
}
