export function NavGroup({children}: GenericProps<{}>) {
    return <section className="flex flex-col gap-2">
        <div className="flex flex-col gap-1 ml-1 font-body">
            {children}
        </div>
    </section>
}