import classNames from 'classnames';

export function Content({title, children, className}: GenericProps<{ title: string }>) {
    return <main className={classNames('flex flex-col font-body gap-3', className)}>
        <h1 className="capitalize font-bold text-lg">{title}</h1>
        <section className="flex flex-col gap-2">
            {children}
        </section>
    </main>
}