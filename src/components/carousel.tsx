import {GatsbyImage} from 'gatsby-plugin-image';
import {useReducer} from 'react';
import classNames from 'classnames';
import NextIcon from 'components/icons/next.svg';
import PrevIcon from 'components/icons/prev.svg';

export function Carousel({images, activeId}: { images: Demo.FullScreenImage[], activeId?: string }) {
    const active = images.find(i => i.id === activeId) ?? images[0];
    const [state, dispatch] = useReducer(reducer, createState(active, images));
    return <div className="relative h-full">
        <div className="overflow-hidden relative rounded-lg h-full">
            {images.map(i =>
                <GatsbyImage
                    key={i.id}
                    alt={i.title}
                    image={i.full}
                    className={classNames('duration-700 object-contain ease-in-out block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2', {hidden: state.active !== i})}/>
            )}
        </div>
        <div
            onClick={() => dispatch({type: 'prev'})}
            className={classNames('flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none', {
                'hidden': images.length === 0
            })}>
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full
                sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60
                group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <PrevIcon/>
            </span>
        </div>
        <div
            onClick={() => dispatch({type: 'next'})}
            className={classNames('flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none', {
                'hidden': images.length === 0
            })}>
            <span
                className="inline-flex justify-center items-center w-8 h-8 rounded-full
                sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60
                group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <NextIcon/>
            </span>
        </div>
    </div>
}

type CarouselState = {
    images: Demo.FullScreenImage[];
    active: Demo.FullScreenImage;
    next: Demo.FullScreenImage;
    prev: Demo.FullScreenImage;
}

function reducer(state: CarouselState, action: { type: 'prev' | 'next' }): CarouselState {
    switch (action.type) {
        case 'next': {
            return createState(state.next, state.images);
        }
        case 'prev': {
            return createState(state.prev, state.images);
        }

        default:
            throw new Error(`No such action '${action.type}'`);
    }
}

function createState(newActive: Demo.FullScreenImage, images: Demo.FullScreenImage[]): CarouselState {
    const length = images.length;
    const currentIndex = images.indexOf(newActive);
    const newNext = images[newIndex(currentIndex + 1, length)];
    const newPrev = images[newIndex(currentIndex - 1, length)];
    return {
        images,
        active: newActive,
        next: newNext,
        prev: newPrev
    };
}


function newIndex(tempCurrentIndex: number, length: number) {
    return tempCurrentIndex < 0
        ? length - 1
        : tempCurrentIndex === length
            ? 0
            : tempCurrentIndex;
}
