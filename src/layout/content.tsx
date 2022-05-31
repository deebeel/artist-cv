import classNames from 'classnames';

export function Content({children, className}: GenericProps<{}>) {
    return <main className={classNames('flex flex-col font-body gap-2', className)}>
        {children}
    </main>
}