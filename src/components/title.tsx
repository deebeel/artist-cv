export function Title({title}: { title: string }) {
    return <>
        <title>{title}</title>
        <h1 className="capitalize font-bold text-lg mb-1">{title}</h1>
    </>
}