import {graphql, PageProps} from 'gatsby';
import {GatsbyImage} from 'gatsby-plugin-image';
import {Layout} from 'components/layout';

export default function About({data}: PageProps<{ artist: ArtistModel }>) {
    const {artist} = data;
    return <Layout>
        <div className="flex flex-col gap-4">
            <div className="flex gap-2">
                {artist.cv.map(cv => <CVLink key={cv.id} cv={cv}/>)}
            </div>
            <div>
                <GatsbyImage image={artist.photo.thumb} alt={`${artist.name} ${artist.surname}`}/>
            </div>
        </div>
    </Layout>
}

function CVLink({cv}: { cv: Demo.File }) {
    return <a className="text-sm font-semibold hover:opacity-30"
              title={cv.title}
              href={cv.url}
              download target="_blank">{cv.title}</a>
}

export const pageQuery = graphql`
        query ArtistPageQuery {
            artist: contentfulArtist {
                id
                name
                surname
                birthDay
                photo {
                    id
                    title
                    url
                    mimeType,
                    thumb: gatsbyImage(height: 300)
                }
                cv {
                    id
                    title
                    url
                }
            }
        }`

interface ArtistModel {
    id: string;
    name: string;
    surname: string;
    photo: Demo.Image;
    cv: Demo.File[];
}
