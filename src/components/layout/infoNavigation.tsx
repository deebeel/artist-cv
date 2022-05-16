import * as styles from './layout.module.css';
import {Link} from 'gatsby';

export function InfoNavigation() {
    return <section>
        <h4>info</h4>
        <ul className={styles.navLinks}>
            <li className={styles.navLinkItem}>
                <Link to="/" className={styles.navLinkText}>
                    Home
                </Link>
            </li>
            <li className={styles.navLinkItem}>
                <Link to="/cv" className={styles.navLinkText}>
                    Cb
                </Link>
            </li>
        </ul>
    </section>
}