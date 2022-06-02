import {Modal} from 'components/modal';
import {Carousel} from 'components/carousel';
import {graphql, navigate, PageProps} from 'gatsby';
import {Work, WorkDefinition} from './work';
import slugify from '@sindresorhus/slugify';

export default function MediaPage({
                                      data,
                                      pageContext
                                  }: PageProps<{ work: WorkDefinition, media: Demo.FullScreenImage }, { nextTitle?: string, prevTitle?: string }>) {
    const {work, media} = data;
    const {prevTitle, nextTitle} = pageContext;

    return <>
        <Work work={work}/>
        <Modal onClose={() => navigate(`../`)}>
            <Carousel image={media}
                      onPrev={!!prevTitle ? () => navigate(`../${slugify(prevTitle!)}`) : undefined}
                      onNext={!!nextTitle ? () => navigate(`../${slugify(nextTitle!)}`) : undefined}/>
        </Modal>
    </>
}

export const pageQuery = graphql`
    query mediaWorkPageQuery($id: String!, $workId: String!) {
        work: contentfulWork(id: { eq: $workId }) {
            title
            date
            place
            category
            material
            descriptionV2 {  
                raw
                references {
                    contentful_id
                    title
                    description
                    thumb: gatsbyImage(width: 300)
                    __typename
                } 
            }          
        }
        media: contentfulAsset(id: {eq: $id}) {
            id
            title
            url
            mimeType
            full: gatsbyImage(width: 1000)
        }
    }
`;
