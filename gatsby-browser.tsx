import 'index.css';
import {PageRenderer, WrapPageElementBrowserArgs} from 'gatsby';
import {Modal, Layout} from './src/layout';

export async function onClientEntry() {
    if (location.pathname !== '/') {
        return ___loader.loadPage('../');
    }
}

export function wrapPageElement({element, props}: WrapPageElementBrowserArgs) {
    if (!props.pageContext.modal) {
        return <Layout title={props.pageContext.title}>
            {element}
        </Layout>;
    }
    return <>
        <PageRenderer location={{
            ...props.location,
            pathname: '../',
        }}/>
        <Modal onClose={() => props.navigate('../')}>
            {element}
        </Modal>
    </>
}

declare global {
    const ___loader: {
        loadPage(rawPath: string): Promise<void>;
        isPageNotFound(rawPath: string): boolean;
    }
}
