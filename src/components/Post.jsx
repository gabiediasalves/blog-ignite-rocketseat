import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post(){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src='https://github.com/gabiediasalves.png'/>
                    <div className={styles.authorInfo}>
                        <strong>Gabiediasalves</strong>
                        <span>Desenvolvedora Pleno</span>
                    </div>
                </div>

                <time title="18 de dez às 22:45" dateTime="2023-12-28 22:44:01">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p>👉 {' '} <a href="">jane.design/doctorcare</a></p>

                <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
                
            </div>

            <form className={styles.comentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder='Deixe seu comentário..'/>

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.contentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>
    )
}