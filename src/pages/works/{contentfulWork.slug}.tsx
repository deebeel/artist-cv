import {Layout} from 'components/layout';
import {graphql} from 'gatsby';
export const query = graphql`
query pageQuery($id:String!) {
  contentfulWork(id: { eq: $id }) {
      category
      year: date(formatString: "YYYY")
      description {
        description
      }
      title
      shortDescription {
        shortDescription
      }
      photos {
        title
        url
        id
        mimeType
      }  
  }
}
`
export default function WorkPage({data}:any) {
    return <Layout pageTitle="work">
        {JSON.stringify(data, null, 3)}
    </Layout>
}