import classNames from 'classnames';

export function Video({link, title, className}: GenericProps<{ link: string, title?: string }>) {
    return <div className={classNames(className, 'flex justify-center')}>
        <YoutubeVideo link={link} title={title}/>
    </div>
}


function YoutubeVideo({link, title}: { link: string, title?: string }) {
    if (!link.startsWith('https://www.youtube.com')
        && !link.startsWith('https://youtu.be')) {
        return null;
    }
    const id = link.slice(link.lastIndexOf('/'))
    return <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${id}?rel=0`}
        title={title}
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
    />
}