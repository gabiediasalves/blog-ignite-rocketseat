import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment(){
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src='https://github.com/gabiediasalves.png'/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Gabrieli Alves</strong>
                            <time title="18 de dez às 22:45" dateTime="2023-12-28 22:44:01">Cerca de 1h atrás</time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                
                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>

               <footer>
                <button>
                    <ThumbsUp/>
                    Aplaudir <span> 23</span>
                </button>
               </footer>
            </div>
        </div>
    )
}