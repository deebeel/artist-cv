import * as styles from './layout.module.css';

export function Content({title, children}: GenericProps<{ title: string }>) {
    return <main>
        <h1 className={styles.heading}>{title}</h1>
        <section>
            {children}
        </section>
    </main>
}