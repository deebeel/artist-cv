import {NavGroup} from './navGroup';
import {NavItem} from './navItem';
import {graphql, useStaticQuery} from 'gatsby';
import HamburgerIcon from 'components/icons/hamburger.svg'
import {useState} from 'react';
import classNames from 'classnames';
import slugify from '@sindresorhus/slugify';


type WorkDescriptor = {
    id: string;
    title: string;
}

export function Nav() {
    const workNav = useWorkNavigationInfo();
    return <nav>
        <MobileNav works={workNav}/>
        <DesktopNav works={workNav}/>
    </nav>;
}

function MobileNav({works}: { works: WorkDescriptor[] }) {
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

function DesktopNav({works}: { works: WorkDescriptor[] }) {
    return <div className="flex-col gap-3 hidden md:flex">
        <NavInternal workNavigations={works}/>
    </div>
}

function NavInternal({workNavigations}: { workNavigations: WorkDescriptor[] }) {
    return <>
        <NavGroup>
            {workNavigations.map(n => <NavItem key={n.id} location={`/works/${slugify(n.title)}`}>{n.title}</NavItem>)}
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
        worksNavigation:allContentfulWork(sort: {fields: date, order: DESC}) {
            nodes {
                id
                title
            }
        }
    }`);
    return data.worksNavigation.nodes as WorkDescriptor[]
}
