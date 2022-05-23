import {graphql, Link, useStaticQuery} from 'gatsby';

export function Title({title}: { title: string }) {
    const name = useArtistName();
    return <>
        <title>{title} | {name}</title>
        <header className="m-1 font-display">
            <Link to="/" className="uppercase font-bold text-lg">{name}</Link>
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