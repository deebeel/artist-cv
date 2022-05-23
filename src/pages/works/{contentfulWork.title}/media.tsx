import {Modal} from 'components/modal';
import {Carousel} from 'components/carousel';
import {graphql, navigate, PageProps} from 'gatsby';
import {Work, WorkDefinition} from 'components/work';
import {Layout} from 'components/layout';

export default function MediaPage({data, location, ...rest}: PageProps<{ work: WorkDefinition }, {}, { id?: string }>) {
    const work = data.work;
    return <Layout pageTitle={work.title}>
        <Work work={work}/>
        <Modal onClose={() => navigate(-1)}>
            <Carousel images={work.media} activeId={location.state?.id}/>
        </Modal>
    </Layout>
}

export const pageQuery = graphql`
    query mediaWorkPageQuery($id:String!) {
        work:contentfulWork(id: { eq: $id }) {
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
            media {
                title
                url
                id
                mimeType
                thumb: gatsbyImage(width: 200)             
                full: gatsbyImage(width: 1000)             
            } 
        }
    }
`;
