import {IGatsbyImageData} from 'gatsby-plugin-image';

declare global {
    namespace Demo {
        export type File = {
            id: string;
            title: string;
            url: string;
        }
        export type Image = File & {
            thumb: IGatsbyImageData
            description?: string;
        }
    }
    type GenericProps<T = unknown> = T & {
        children?: React.ReactNode
        className?: string;
    }
}
export {}