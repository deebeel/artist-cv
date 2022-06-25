import {Description, DescriptionDefinition} from 'components/description';
import {GatsbyImage} from 'gatsby-plugin-image';

export type WorkDefinition = {
    id: string;
    description: DescriptionDefinition;
    media: Demo.Image[]
}

export function Work({work}: { work: WorkDefinition }) {
    return <article className="flex flex-col gap-2 text-sm">
        <Description description={work.description}/>
        <Media media={work.media}/>
    </article>
}

function Media({media}: { media?: Demo.Image[] }) {
    if (media == null) {
        return null;
    }
    return <div className="grid justify-center gap-1
        grid-cols-1
        lg:grid-cols-2
        xl:grid-cols-3
    ">
        {media.map(m =>
            <div
                className="flex flex-col justify-center"
                key={m.id}>
                <GatsbyImage alt={m.title} image={m.thumb} objectFit="contain"/>
            </div>)}
    </div>

}



