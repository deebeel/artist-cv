import slugify from '@sindresorhus/slugify';

export function JumpLink({title, children}: GenericProps<{ title: string }>) {
    return <a href={`#${slugify(title)}`}
              className="relative">
        <div>{children}</div>
    </a>
}