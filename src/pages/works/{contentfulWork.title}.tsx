import {graphql, PageProps} from 'gatsby';
import {Layout} from 'components/layout';
import {Description, DescriptionDefinition} from 'components/description';

import {GatsbyImage} from 'gatsby-plugin-image';

export default function WorkPage({data}: PageProps<{ work: WorkDefinition }>) {
    const work = data.work;
    return <Layout>
        <Work work={work}/>
    </Layout>
}

export type WorkDefinition = {
    id: string;
    description: DescriptionDefinition;
    media: Demo.Image[]
}

export function Work({work}: { work: WorkDefinition }) {
    return <article className="flex flex-col gap-10 text-sm">
        <Description description={work.description}/>
        <Media media={work.media}/>
    </article>
}

function Media({media}: { media?: Demo.Image[] }) {
    if (media == null) {
        return null;
    }
    return <div className="flex flex-col justify-center gap-10">
        {media.map(m =>
            <div
                className="flex flex-col justify-center"
                key={m.id}>
                <GatsbyImage alt={m.title} image={m.thumb}/>
            </div>)}
    </div>

}

export const pageQuery = graphql`
    query workPageQuery($id: String!) {
        work: contentfulWork(id: { eq: $id }) {
            description {  
                raw
            }
            media {
                title
                url
                id
                mimeType
                thumb: gatsbyImage(width: 600, fit: CONTAIN)                                        
            } 
        }
    }
`;

