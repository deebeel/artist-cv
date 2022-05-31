import 'index.css';
import {WrapPageElementBrowserArgs} from 'gatsby';
import {Layout} from 'layout';

export function wrapPageElement(p: WrapPageElementBrowserArgs) {
    return <Layout>{p.element}</Layout>;
}