import {InfoNavigation} from './infoNavigation';
import {WorkNavigation} from './workNavigation';

export function Navigation() {
    return <nav>
        <WorkNavigation/>
        <InfoNavigation/>
    </nav>
}