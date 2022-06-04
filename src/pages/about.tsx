import {graphql, PageProps} from 'gatsby';
import {Title} from 'components/title';
import {GatsbyImage} from 'gatsby-plugin-image';
import {Layout} from '../layout';

export default function About({data}: PageProps<{ artist: ArtistModel }>) {
    const {artist} = data;
    return <Layout title="About">
        <div>
            <GatsbyImage image={artist.photo.thumb} alt={`${artist.name} ${artist.surname}`}/>
        </div>
        <div className="flex flex-col">
            {artist.cv.map(cv => (
                <a title={cv.title} key={cv.id} href={cv.url} download target="_blank">{cv.title}</a>))}
        </div>
    </Layout>
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
                    thumb: gatsbyImage(height: 200)
                }
                cv {
                    id
                    title
                    url
                    mimeType
                }
            }
        }`

interface ArtistModel {
    id: string;
    name: string;
    surname: string;
    email: string;
    birthDay: string;
    photo: Demo.Image;
    cv: Demo.File[];
}
