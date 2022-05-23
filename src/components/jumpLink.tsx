import slugify from '@sindresorhus/slugify';

export function JumpLink({title, children}: GenericProps<{ title: string }>) {
    return <a href={`#${slugify(title)}`}
              className="relative before:md:content-['#'] before:absolute
            before:inset-x-hash before:text-md before:text-gray-300 hover:before:text-gray-600
             hover:md:before:content-['#'] hover:before:text-brand-default">
        <div className="pl-5">{children}</div>
    </a>
}