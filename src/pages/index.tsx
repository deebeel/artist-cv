import {graphql, PageProps} from 'gatsby';
import {DateTimeRange} from 'components/dateTimeRange';
import {JumpLink} from 'components/jumpLink';
import {Layout} from 'components/layout';
import {DateTime} from 'components/dateTime';
import {Description, DescriptionDefinition} from 'components/description';

type EventModel = {
    id: string;
    title: string;
    place: string;
    at: string;
    from: string;
    to: string;
    descriptionV2: DescriptionDefinition;
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
                at: from,
                descriptionV2 { 
                    raw
                    references {
                        contentful_id
                        title
                        description
                        thumb: gatsbyImage(width: 400)
                        __typename
                    } 
                }
            }
        }
    }`;


function Event({event}: { event: EventModel }) {
    return <section className="flex flex-col gap-1">
        <JumpLink title={event.title}>
            <h2 className="font-semibold mb-2">{event.title}</h2>
        </JumpLink>
        <div className="text-sm">{event.place}</div>
        {!event.to && <DateTime className="text-sm" at={event.at}/>}
        {event.to && <DateTimeRange className="text-sm" from={event.from} to={event.to}/>}
        <Description description={event.descriptionV2}/>
    </section>
}