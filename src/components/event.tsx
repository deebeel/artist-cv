import {DateTimeRange} from 'components/dateTimeRange';
import {JumpLink} from './jumpLink';

type Props = {
    title: string;
    place: string;
    from: string;
    to: string;
    description: string;
};

export function Event({title, place, from, to, description}: Props) {
    return <section className="flex flex-col gap-1">
        <JumpLink title={title}>
            <h2 className="font-semibold mb-2">{title}</h2>
        </JumpLink>
        <div className="text-sm">{place}</div>
        <DateTimeRange className="text-sm" from={from} to={to}/>
        <div className="mb-2 text-base">{description}</div>
    </section>
}