import {Layout} from 'components/layout';
import {graphql, useStaticQuery} from 'gatsby';
import {GatsbyImage, getSrc} from 'gatsby-plugin-image';
import * as styles from './cv.module.css';

export default function Cv() {
    const artist = useArtist();
    const fullName = `${artist.name} ${artist.surname}`;
    const cvLinks = artist.cv.map(cv => (<a
        className={styles.cvLink}
        title={cv.title} key={cv.id}
        href={cv.url} target="_blank">{cv.title}</a>));
    return <Layout pageTitle="Cv">
        <GatsbyImage image={artist.photo.gatsbyImage} alt={fullName}/>
        <div>{fullName}</div>
        <div>{cvLinks}</div>
    </Layout>
}

function useArtist() {
    const data = useStaticQuery(graphql`
        query Artist {
            contentfulArtist {
                id
                name
                surname
                fullName: name surname
                email
                birthYear: birthDay(formatString: "YYYY")
                photo {
                    id
                    title
                    url
                    mimeType,
                    gatsbyImage(width: 200)
                }
                cv {
                    id
                    title
                    url
                    mimeType
                }
            }
        }`);

    return data.contentfulArtist as ArtistModel;
}

interface ArtistModel {
    id: string;
    name: string;
    surname: string;
    email: string;
    birthYear: string;
    photo: Demo.Image;
    cv: Demo.File[];
}
