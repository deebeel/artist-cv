import {graphql, Link, useStaticQuery} from 'gatsby';

export function WorkNavigation() {
    const workNav = useWorkNavigationInfo();
    return <section>
        <h4>work</h4>
        <ul>
            {workNav.map(n => <li><Link to={`/works/${n.slug.toLowerCase()}`} key={n.id}>{n.title}</Link></li>)}
        </ul>
    </section>
}

type WorkNavigation = {
    title: string;
    slug: string;
    id: string;
}

function useWorkNavigationInfo() {
    const data = useStaticQuery(graphql`
    query allWorkNavigationInfo {
        allContentfulWork {
            nodes {
                id
                title
                slug
            }
        }
    }`);
    return data.allContentfulWork.nodes as WorkNavigation[]
}
