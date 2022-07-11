import {graphql, PageProps} from 'gatsby';
import {Layout} from 'components/layout';
import {Description, DescriptionDefinition} from 'components/description';

import {GatsbyImage} from 'gatsby-plugin-image';
import {isEmpty} from 'utils/isEmpty';
import {Video} from 'components/video';

export default function WorkPage({data}: PageProps<{ work: WorkDefinition }>) {
    const work = data.work;
    return <Layout>
        <Work work={work}/>
    </Layout>
}

export type WorkDefinition = {
    id: string;
    description: DescriptionDefinition;
    photos: Demo.Image[];
    videoLinks: string[]
}

function Videos({videoLinks}: { videoLinks: string[] }) {
    if (isEmpty(videoLinks)) {
        return null;
    }
    return <div className="flex flex-col justify-center items-center">
        {videoLinks.map(l => <Video className="w-full md:w-3/4 max-w-2xl" key={l} link={l}/>)}
    </div>
}

export function Work({work}: { work: WorkDefinition }) {
    return <article className="flex flex-col gap-10 text-sm">
        <Description description={work.description}/>
        <Videos videoLinks={work.videoLinks}/>
        <Photos photos={work.photos}/>
    </article>
}

function Photos({photos}: { photos?: Demo.Image[] }) {
    if (photos == null) {
        return null;
    }
    return <div className="flex flex-col justify-center items-center gap-10">
        {photos.map(m =>
            <div
                className="w-full w-3/4 max-w-2xl flex justify-center items-center"
                key={m.id}>
                <GatsbyImage alt={m.title} image={m.thumb} objectFit="contain"/>
            </div>)}
    </div>

}

export const pageQuery = graphql`
    query workPageQuery($id: String!) {
        work: contentfulWork(id: { eq: $id }) {
            description {  
                raw
            }
            photos: media {
                title
                url
                id
                mimeType
                thumb: gatsbyImage(width: 700, fit: CONTAIN)                                        
            } 
            videoLinks: videoLink
        }
    }
`;

