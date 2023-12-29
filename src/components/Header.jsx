import styles from './Header.module.css'
import igniteLogo from '../assents/ignite-logo.svg'

export function Header(){
    return(
        <header className={styles.header}>
            <img src={igniteLogo} alt="" />
            <strong >Ignite</strong>
        </header>
    )
}