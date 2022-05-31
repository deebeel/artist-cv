export function NavGroup({title, children}: GenericProps<{ title: string }>) {
    return <section className="flex flex-col gap-2">
        <h4 className="cursor-default text-xs text-primary-400 font-display">{title}</h4>
        <div className="flex flex-col gap-1 ml-1 font-body">
            {children}
        </div>
    </section>
}