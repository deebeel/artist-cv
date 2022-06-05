import {graphql, PageProps} from 'gatsby';
import {Work, WorkDefinition} from './work';

export default function WorkPage({data}: PageProps<{ work: WorkDefinition }>) {
    const work = data.work;
    return <Work work={work}/>
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

