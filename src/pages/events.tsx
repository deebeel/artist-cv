import {graphql, useStaticQuery} from 'gatsby';
import {Title} from 'components/title';
import {DateTimeRange} from 'components/dateTimeRange';
import {JumpLink} from 'components/jumpLink';

export default function Events() {
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


type Props = {
    title: string;
    place: string;
    from: string;
    to: string;
    description: string;
};

export function Event({title, place, from, to, description}: Props) {
    return <section className="flex flex-col gap-1">
        <JumpLink title={title}>
            <h2 className="font-semibold mb-2">{title}</h2>
        </JumpLink>
        <div className="text-sm">{place}</div>
        <DateTimeRange className="text-sm" from={from} to={to}/>
        <div className="mb-2 text-base">{description}</div>
    </section>
}