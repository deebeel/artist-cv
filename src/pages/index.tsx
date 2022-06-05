import {graphql, PageProps} from 'gatsby';
import {DateTimeRange} from 'components/dateTimeRange';
import {JumpLink} from 'components/jumpLink';
import {Layout} from 'components/layout';

type EventModel = {
    id: string;
    title: string;
    place: string;
    from: string;
    to: string;
    description: { text: string };
}


export default function EventsPage({data}: PageProps<{ event: { nodes: EventModel[] } }>) {
    return <Layout>
        <div className="flex flex-col gap-4">
            {data.event.nodes.map(e => <Event key={e.id} event={e}/>)}
        </div>
    </Layout>
}
export const pageQuery = graphql`
    query EventsPageQuery {
        event: allContentfulEvent(sort: {fields: from, order: DESC}) {
            nodes {
                id,
                title,
                place,
                from,
                to,
                description { text: description }
            }
        }
    }`;


function Event({event}: { event: EventModel }) {
    return <section className="flex flex-col gap-1">
        <JumpLink title={event.title}>
            <h2 className="font-semibold mb-2">{event.title}</h2>
        </JumpLink>
        <div className="text-sm">{event.place}</div>
        <DateTimeRange className="text-sm" from={event.from} to={event.to}/>
        <div className="mb-2 text-base">{event.description.text}</div>
    </section>
}