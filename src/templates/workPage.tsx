import {Layout} from 'components/layout';
import {graphql, PageProps} from 'gatsby';
import {Work, WorkDefinition} from 'components/work';

export default function WorkPage({data}: PageProps<{ work: WorkDefinition }>) {
    const work = data.work;
    return <Layout pageTitle={work.title}>
        <Work work={work}/>
    </Layout>
}
export const pageQuery = graphql`
    query workPageQuery($id: String!) {
        work: contentfulWork(id: { eq: $id }) {
            title
            date
            place
            category
            material
            overview
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

