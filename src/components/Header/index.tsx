import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';

import Link from 'next/link'
import { ActiveLink } from '../ActiveLink';

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="../assets/logo.svg" alt="logo" />
                <nav >
                    <ActiveLink activeClassName={styles.active} href="/">
                    <a className={styles.active}>Home</a>
                    </ActiveLink>
                    <ActiveLink activeClassName={styles.active} href='/posts'>
                    <a>Posts</a>
                    </ActiveLink>
                </nav>
                <SignInButton />
            </div>
        </header>
    )
}