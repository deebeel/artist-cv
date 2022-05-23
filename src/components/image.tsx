import {GatsbyImage, GatsbyImageProps} from 'gatsby-plugin-image';

export function Image({className, ...rest}: GenericProps<GatsbyImageProps>) {
    return <div className={className}>
        <GatsbyImage {...rest}/>
    </div>
}