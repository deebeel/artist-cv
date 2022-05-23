import {Content} from './content';
import {Title} from './title';
import {Nav} from './navigation';
export function Layout({pageTitle, children}: GenericProps<{ pageTitle: string }>) {
    return <div className="md:mx-24 md:mt-2 md:grid md:grid-cols-[200px_minmax(700px,_1fr)] md:gap-2 relative s:m-0">
        <div className="flex flex-col">
            <Title title={pageTitle}/>
            <Nav/>
        </div>
        <Content
            className="md:px-28"
            title={pageTitle}>
            {children}
        </Content>
    </div>
}