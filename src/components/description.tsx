import {renderRichText} from 'gatsby-source-contentful/rich-text';
import {GatsbyImage, IGatsbyImageData} from 'gatsby-plugin-image';
import {Block, BLOCKS, Inline, INLINES, MARKS, Node} from '@contentful/rich-text-types'
import {Options} from '@contentful/rich-text-react-renderer';
import {JumpLink} from 'components/jumpLink';

export type ReferenceContent = {
    contentful_id: string;
    title: string;
    description: string;
    gatsbyImage: IGatsbyImageData
    __typename: string;
}
export type DescriptionDefinition = {
    raw: string;
    references: ReferenceContent[]
};

const createJumpLink = (children: any) => {
    return <JumpLink title={children[0]}>{children}</JumpLink>
}

const options: Options = {
    renderMark: {
        [MARKS.BOLD]: (text: React.ReactNode) => <b className="font-bold">{text}</b>,
        [MARKS.ITALIC]: (text: React.ReactNode) => <i className="font-italic">{text}</i>,
        [MARKS.UNDERLINE]: (text: React.ReactNode) => <u className="underline">{text}</u>,
        [MARKS.CODE]: (text: React.ReactNode) => (
            <code className="font-mono px-1 py-2 mx-1 bg-gray-100 rounded text-sm">
                {text}
            </code>
        ),
    },
    renderNode: {
        [INLINES.HYPERLINK]: (node: Block | Inline, children: React.ReactNode) => (
            <a
                href={node.data.uri}
                target="_blank"
                rel="noreferrer"
                className="text-brand-default underline"
            >
                {children}
            </a>
        ),
        [BLOCKS.HEADING_1]: (node: Block | Inline, children: React.ReactNode) => (
            <h2 className="text-3xl sm:text-4xl text-left font-black text-gray-700 leading-tight mb-2">
                {children}
            </h2>
        ),
        [BLOCKS.HEADING_2]: (node: Block | Inline, children: React.ReactNode) => {
            return (
                <h2 className="text-3xl sm:text-4xl text-left font-black text-gray-700 leading-tight mb-2">
                    {createJumpLink(children)}
                </h2>
            )
        },
        [BLOCKS.HEADING_3]: (node: Block | Inline, children: React.ReactNode) => (
            <h3 className="text-2xl sm:text-3xl text-left font-black text-gray-700 leading-tight mb-2">
                {createJumpLink(children)}
            </h3>
        ),
        [BLOCKS.HEADING_4]: (node: Block | Inline, children: React.ReactNode) => (
            <h4 className="text-xl sm:text-2xl text-left font-black text-gray-700 leading-tight mb-2">
                {createJumpLink(children)}
            </h4>
        ),
        [BLOCKS.HEADING_5]: (node: Block | Inline, children: React.ReactNode) => (
            <h5 className="text-lg sm:text-xl text-left font-black text-gray-700 leading-tight mb-2">
                {createJumpLink(children)}
            </h5>
        ),
        [BLOCKS.HEADING_6]: (node: Block | Inline, children: React.ReactNode) => (
            <h6 className="text-md sm:text-lg text-left font-black text-gray-700 leading-tight mb-2">
                {createJumpLink(children)}
            </h6>
        ),

        [BLOCKS.OL_LIST]: (node: Block | Inline, children: React.ReactNode) => (
            <ol className="list-decimal pl-4">{children}</ol>
        ),
        [BLOCKS.UL_LIST]: (node: Block | Inline, children: React.ReactNode) => (
            <ul className="list-disc pl-4">{children}</ul>
        ),

        [BLOCKS.LIST_ITEM]: (node: Block | Inline, children: React.ReactNode) => (
            <li className="mb-1">{children}</li>
        ),
        [BLOCKS.PARAGRAPH]: (node: any, children: any) => {
            if (node.content[0]?.value === '') {
                return <br/>
            } else {
                return <p className="text-sm leading-relaxed">{children}</p>
            }
        },
        [BLOCKS.QUOTE]: (children: any) => (
            <blockquote className="border-l-4 border-brand-primary bg-gray-50 p-3 rounded font-bold my-6">
                "{children.content[0].content[0].value}"
            </blockquote>
        ),
        [BLOCKS.HR]: () => <hr className="mb-6"/>,
        [BLOCKS.EMBEDDED_ASSET]: (node: Node) => {
            const {thumb, title} = node.data.target as Demo.Image
            return <div className="flex justify-center items-center mb-10 mt-10">
                <GatsbyImage image={thumb} objectFit="contain" alt={title}/>
            </div>
        },
    },
}

export function Description({description}: { description: DescriptionDefinition }) {
    return <div className="flex flex-col gap-1">{renderRichText(description, options)}</div>;
}
