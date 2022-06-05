import {graphql, PageProps} from 'gatsby';
import {Work, WorkDefinition} from 'components/work';
import {Layout} from 'components/layout';
import {Title} from 'components/title';

export default function WorkPage({data}: PageProps<{ work: WorkDefinition }>) {
    const work = data.work;
    return <Layout>
        <Title title={work.title}/>
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
                thumb: gatsbyImage(width: 400, fit: CONTAIN)                                        
            } 
        }
    }
`;

