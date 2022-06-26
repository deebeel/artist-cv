import {NavGroup} from './navGroup';
import {NavItem} from './navItem';
import {graphql, useStaticQuery} from 'gatsby';
import HamburgerIcon from 'components/icons/hamburger.svg'
import {useState} from 'react';
import classNames from 'classnames';


type WorkNavigation = {
    path: string;
    pageContext: { title: string };
}

export function Nav() {
    const workNav = useWorkNavigationInfo();
    return <nav>
        <MobileNav works={workNav}/>
        <DesktopNav works={workNav}/>
    </nav>;
}

function MobileNav({works}: { works: WorkNavigation[] }) {
    const [isOpen, setOpen] = useState(false);

    return <section className="md:hidden" onClick={() => isOpen && setOpen(false)}>
        <HamburgerIcon className="absolute top-0 right-0 w-8 h-8" onClick={() => setOpen(v => !v)}/>
        <div className={classNames('flex-col gap-3 absolute z-10 right-0 w-full h-screen bg-gray-300/95', {
            hidden: !isOpen,
            flex: isOpen
        })}>
            <NavInternal workNavigations={works}/>
        </div>
    </section>
}

function DesktopNav({works}: { works: WorkNavigation[] }) {
    return <div className="flex-col gap-3 hidden md:flex">
        <NavInternal workNavigations={works}/>
    </div>
}

function NavInternal({workNavigations}: { workNavigations: WorkNavigation[] }) {
    return <>
        <NavGroup>
            {workNavigations.map(n => <NavItem key={n.path} location={n.path}>{n.pageContext.title}</NavItem>)}
        </NavGroup>
        <NavGroup>
            <NavItem location="/about">About</NavItem>
            <NavItem location="/contacts">Contacts</NavItem>
            <NavItem location="/">Events</NavItem>
        </NavGroup>
    </>;
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
