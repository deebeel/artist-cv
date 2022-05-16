import {DateTime} from 'components/dateTime';
import * as styles from './event.module.css';

type Props = {
    title: string;
    place: string;
    from: string;
    to: string;
    description: string;
};

export function Event({title, place, from, to, description}: Props) {
    return <section className={styles.event}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.place}>{place}</div>
        <DateTime from={from} to={to}/>
        <div className={styles.description}>{description}</div>
    </section>
}