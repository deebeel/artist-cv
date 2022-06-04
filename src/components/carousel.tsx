import {GatsbyImage} from 'gatsby-plugin-image';
import NextIcon from 'components/icons/next.svg';
import PrevIcon from 'components/icons/prev.svg';
import mousetrap from 'mousetrap';
import {useEffect} from 'react';

export function Carousel({
                             image,
                             onNext,
                             onPrev
                         }: { image: Demo.FullScreenImage, onNext?: () => void, onPrev?: () => void }) {
    useEffect(() => {
        onPrev && mousetrap.bind(`left`, onPrev);
        onNext && mousetrap.bind(`right`, onNext);
        return () => {
            mousetrap.unbind(`left`);
            mousetrap.unbind(`right`);
        };
    }, [onNext, onNext]);
    return <div className="relative h-full">
        <div className="overflow-hidden h-full">
            <GatsbyImage
                alt={image.title}
                image={image.full}
                objectFit="contain"
                className="duration-700 ease-in-out block absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2"/>
        </div>
        {onPrev && <PrevButton onClick={onPrev}/>}
        {onNext && <NextButton onClick={onNext}/>}
    </div>
}

function PrevButton(props: { onClick: () => void }) {
    return <div
        onClick={props.onClick}
        className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-screen cursor-pointer group focus:outline-none">
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full
                sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60
                group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <PrevIcon/>
            </span>
    </div>;
}

function NextButton(props: { onClick: () => void }) {
    return <div
        onClick={props.onClick}
        className="
        flex justify-center items-center absolute top-0 right-0 z-30  px-4 h-screen cursor-pointer group focus:outline-none
        ">
            <span
                className="inline-flex justify-center items-center w-8 h-8 rounded-full
                sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60
                group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <NextIcon/>
            </span>
    </div>;
}
