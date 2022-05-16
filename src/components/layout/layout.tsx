import * as styles from './layout.module.css';
import {Header} from './header';
import {Navigation} from './navigation';
import {Content} from './content';

export function Layout({pageTitle, children}: GenericProps<{ pageTitle: string }>) {
    return <div className={styles.container}>
        <div>
            <Header title={pageTitle}/>
            <Navigation/>
        </div>
        <div>
            <Content title={pageTitle}>
                {children}
            </Content>
        </div>
    </div>
}