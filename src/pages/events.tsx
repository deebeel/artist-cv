import {graphql, useStaticQuery} from 'gatsby';
import {Event} from 'components/event';
import {Title} from 'components/title';

export default function events() {
    const allEvents = useAllEvents();
    return <>
        <Title title="Events"/>
        <div className="flex flex-col gap-4">
            {allEvents.map(e => <Event
                key={e.id} place={e.place} title={e.title}
                from={e.from} to={e.to} description={e.description}/>)}
        </div>
    </>
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
                from,
                to,
                description { description }
            }
        }
    }`)
    return data.allContentfulNews.nodes.map(({description, ...rest}: any) => ({
        ...rest,
        description: description.description
    })) as EventModel[]
}