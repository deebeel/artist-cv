import {Carousel} from 'components/carousel';
import {graphql, navigate, PageProps} from 'gatsby';

export default function MediaPage({
                                      data, path
                                  }: PageProps<{ media: Demo.FullScreenImage, sibling: { paths: { previous?: { path: string }, node: { path: string }, next?: { path: string }, }[] } }>) {
    const {media, sibling} = data;
    const currentPathDefinition = sibling.paths.find(c => c.node.path === path)!;
    if (currentPathDefinition == null) {
        return null;
    }
    const next = currentPathDefinition.next || sibling.paths[0]?.next;
    const previous = currentPathDefinition.previous || sibling.paths[sibling.paths.length - 1]?.previous;
    return <Carousel image={media}
                     onPrev={!!previous ? () => navigate(previous.path) : undefined}
                     onNext={!!next ? () => navigate(next.path) : undefined}/>
}

export const pageQuery = graphql`
    query mediaWorkPageQuery($id: String!, $mediaPathGlob: String!) {      
        media: contentfulAsset(id: {eq: $id}) {
            id
            title
            url
            mimeType
            full: gatsbyImage(width: 1000)
        }
        sibling: allSitePage(filter: { path: { glob: $mediaPathGlob } }) {
            paths: edges {
                previous {
                    path
                }
                node {
                    path      
                }
                next {
                    path
                }
            }
        }
    }
`;
