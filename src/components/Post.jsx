import { Avatar } from './Avatar'
import { Comment } from './Comment'
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import styles from './Post.module.css'
import { useState } from 'react';

    export function Post({author, publishedAt, content}){
    const [comments, setComments] = useState([])
    const [newCommentText, setNewCommentText] = useState('')
    const publichedAtFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR})
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {locale: ptBR, addSuffix: true})

    function handleCreateNewComment(){
            event.preventDefault()
            setComments([...comments, newCommentText])
            setNewCommentText('')
    }

    function handleNewCommentChange(){
        setNewCommentText(event.target.value)
        
    }

    function deleteComment(commentDelete){
        const commentsWithoutDeleteOne = comments.filter(comment => {
            return comment !== commentDelete
        })
        setComments(commentsWithoutDeleteOne);
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publichedAtFormatted} dateTime={publishedAt.toISOString()}>
                {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type == 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type == 'link') {
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
    
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.comentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                name="comment" 
                placeholder='Deixe seu comentário..'
                value={newCommentText}
                onChange={handleNewCommentChange}
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.contentList}>
                {comments.map(comment => {
                    return (
                    <Comment 
                        key={comment} 
                        content={comment} 
                        onDeleteComment={deleteComment}
                    />
                    )
                })}
               
            </div>
        </article>
    )
}