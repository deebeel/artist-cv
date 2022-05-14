import {useStaticQuery, graphql} from 'gatsby'

import * as styles from './main.module.css';

export default function IndexPage() {

    const data = useStaticQuery(graphql`
    query pageQuery {
         contentfulNews {
            title
         }
    }
`);
    return (
        <main className={styles.main}>
            {data.contentfulNews.title}
        </main>
    )
}
