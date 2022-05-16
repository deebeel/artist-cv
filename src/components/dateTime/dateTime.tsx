export function DateTime(props: { at: string }): JSX.Element;
export function DateTime(props: { from: string, to: string }): JSX.Element;
export function DateTime({from, to, at}: { from?: string, to?: string, at?: string }) {
    if (at) {
        return <div>{at}</div>
    }
    return <div>
        {from}-{to}
    </div>
}