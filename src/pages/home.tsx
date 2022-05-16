import {Layout} from 'components/layout';
import {graphql, useStaticQuery} from 'gatsby';
import {Event} from 'components/event';

export default function Home() {
    const allEvents = useAllEvents();
    return <Layout pageTitle="events">
        {allEvents.map(e => <Event
            key={e.id} place={e.place} title={e.title}
            from={e.from} to={e.to} description={e.description}/>)}
    </Layout>
}


type EventModel = {
    id: string;
    title: string;
    place: string;
    from: string;
    to: string;
    description: string;
}

function useAllEvents() {
    const data = useStaticQuery(graphql`
    query AllEvents {
        allContentfulNews(sort: {fields: from, order: DESC}) {
            nodes {
                id,
                title,
                place,
                from(formatString: "MMMM D, YYYY"),
                to(formatString: "MMMM D, YYYY"),
                description {
                    description
                }
            }
        }
    }`)
    return data.allContentfulNews.nodes.map(({description, ...rest}: any) => ({
        ...rest,
        description: description.description
    })) as EventModel[]
}