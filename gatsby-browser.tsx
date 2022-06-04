import 'index.css';
import {PageRenderer, WrapPageElementBrowserArgs} from 'gatsby';
import {Modal} from './src/components/modal';

export async function onClientEntry() {
    if (location.pathname !== '/') {
        return ___loader.loadPage('../');
    }
}

export function wrapPageElement({element, props}: WrapPageElementBrowserArgs) {
    if (!props.pageContext.modal) {
        return element;
    }

    return <Modal
        background={<PageRenderer location={{pathname: `../`} as any}/>}
        content={element}
        onClose={() => props.navigate('../')}/>
}

declare global {
    const ___loader: { loadPage(path: string): Promise<void> }
}
