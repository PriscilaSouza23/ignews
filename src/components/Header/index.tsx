import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';
import { ActiveLink } from '../ActiveLink';

export function Header() {

    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="Logo ig.news" />
                <nav>
                   <ActiveLink activeClassName={styles.active} href="/">
                   <a className={styles.active}>Home</a>
                   </ActiveLink>
                   <ActiveLink activeClassName={styles.active} href="/posts">
                   <a>Posts</a>
                   </ActiveLink>
                </nav>
                <SignInButton />
            </div>
        </header>
    )
}