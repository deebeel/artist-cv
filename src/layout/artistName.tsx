import {graphql, Link, useStaticQuery} from 'gatsby';

export function ArtistName() {
    const name = useArtistName();
    return <header className="m-1 font-display">
        <Link to="/" className="uppercase font-bold text-lg">{name}</Link>
    </header>
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