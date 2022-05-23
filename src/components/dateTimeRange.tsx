import {DateTimePreset, DateTime} from './dateTime';

export function DateTimeRange({from, to, preset, className}: GenericProps<{ from: string, to: string, preset?: DateTimePreset }>) {
    return <div className={className}>
        <DateTime at={from} preset={preset}/> - <DateTime at={to} preset={preset}/>
    </div>
}