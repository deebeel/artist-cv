import {IGatsbyImageData} from 'gatsby-plugin-image';

declare global {
    namespace Demo {
        export type File = {
            id: string;
            title: string;
            url: string;
            mimeType: string;
        }
        export type Image = File & {
            gatsbyImage: IGatsbyImageData
        }
    }
    type GenericProps<T = unknown> = T & {
        children?: React.ReactNode
    }
}
export {}