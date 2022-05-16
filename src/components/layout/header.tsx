import {graphql, Link, useStaticQuery} from 'gatsby';
import * as styles from './layout.module.css';

export function Header({title}: { title: string }) {
    const name = useArtistName();
    return <>
        <title>{title} | {name}</title>
        <header className={styles.header}>
            <Link to="/">{name}</Link>
        </header>
    </>
}

function useArtistName() {
    const data = useStaticQuery(graphql`
        query {
            contentfulArtist {
                name
                surname
            }
        }`);

    const artist = data.contentfulArtist;
    return `${artist.name} ${artist.surname}`;
}