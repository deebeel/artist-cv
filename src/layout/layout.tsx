import {Content} from './content';
import {ArtistName} from './artistName';
import {Nav} from './navigation';

export function Layout({children}: GenericProps<{  }>) {
    return <div
        className="relative grid mt-2 mx-2 grid-cols-[150px_1fr] gap-1
        md:mx-24 md:grid-cols-[200px_minmax(700px,_1fr)] md:gap-2">
        <div className="flex flex-col">
            <ArtistName/>
            <Nav/>
        </div>
        <Content className="md:px-28">
            {children}
        </Content>
    </div>
}