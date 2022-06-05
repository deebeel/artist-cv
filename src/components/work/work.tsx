import {DateTime} from 'components/dateTime';
import {isEmpty} from 'utils/isEmpty';
import {Description, DescriptionDefinition} from './description';
import {GatsbyImage} from 'gatsby-plugin-image';

export type WorkDefinition = {
    id: string;
    title: string;
    date: string;
    place?: string;
    category?: string[];
    material?: string[];
    overview?: string;
    descriptionV2: DescriptionDefinition;
    media: Demo.Image[]
}

export function Work({work}: { work: WorkDefinition }) {
    return <article className="flex flex-col gap-2 text-sm">
        <DateTime at={work.date} preset="y"/>
        <Place place={work.place}/>
        <Overview overview={work.overview}/>
        <Category category={work.category}/>
        <Material material={work.material}/>
        <Description description={work.descriptionV2}/>
        <Media media={work.media}/>
    </article>
}

function Overview({overview}: { overview?: string }) {
    if (overview) {
        return <p>{overview}</p>;
    }
    return null;
}

function Place({place}: { place?: string }) {
    if (place == null) {
        return null;
    }
    return <div>{place}</div>;
}

function Category({category}: { category?: string[] }) {
    if (isEmpty(category)) {
        return null;
    }
    return <div>{category}</div>;
}

function Material({material}: { material?: string[] }) {
    if (isEmpty(material)) {
        return null;
    }
    return <div>{material.join(', ')}</div>;
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



