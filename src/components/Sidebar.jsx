import {PencilLine} from 'phosphor-react'

import styles from './sidebar.module.css'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1483167496759-08cd7175e235?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        
        <div className={styles.profile}>
            <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/95694730?v=4"/>
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