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
            description {  
                raw
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

