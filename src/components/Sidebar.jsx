import {PencilLine} from 'phosphor-react'

import styles from './sidebar.module.css'
import { Avatar } from './Avatar'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1483167496759-08cd7175e235?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        
        <div className={styles.profile}>
            <Avatar src='https://github.com/gabiediasalves.png'/>
            <strong>Gabrieli Alves</strong>
            <span>Desenvolvedor Plena</span>
        </div>

        <footer>
            <a href="#">
                <PencilLine size={20}/>
                Edite seu perfil
            </a>
        </footer>
        
        
        </aside>
    )
}