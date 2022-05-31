import {graphql, PageProps} from 'gatsby';
import {Image} from 'components/image';
import {Title} from '../components/title';

export default function About({data}: PageProps<{ artist: ArtistModel }>) {
    const {artist} = data;
    return <>
        <Title title="About"/>
        <Image image={artist.photo.thumb} alt={`${artist.name} ${artist.surname}`}/>
        <div className="flex flex-col">
            {artist.cv.map(cv => (
                <a title={cv.title} key={cv.id} href={cv.url} download target="_blank">{cv.title}</a>))}
        </div>
    </>
}

export const pageQuery = graphql`
        query ArtistPageQuery {
            artist: contentfulArtist {
                id
                name
                surname
                email
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
