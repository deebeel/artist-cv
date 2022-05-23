import {format} from 'date-fns'

export type DateTimePreset = 'y'

export function DateTime({at,className, preset = 'y'}: GenericProps<{ at: string, preset?: DateTimePreset }>) {
    const pattern = preset === 'y' ? 'yyyy' : 'YYYY.mm.DD HH:MM';
    return <time className={className}>{format(Date.parse(at), pattern)}</time>
}