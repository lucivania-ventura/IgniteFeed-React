import { useState } from 'react';
import PropTypes from 'prop-types';

//components
import { Avatar } from './Avatar';
import { Comment } from './Comment';

//style
import styles from './Post.module.scss';

//biblioteca date-fns
import { format, formatDistanceToNow} from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

// Adicionando validação
Post.propTypes = {
  author: PropTypes.object,
  publishedAt: PropTypes.instanceOf(Date),
  content: PropTypes.array,
};

export function Post({ author, publishedAt, content }){
  const [comments, setComments ] = useState([
    'Post interessante, obrigada por compartilhar!'
  ])

  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format (publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
    locale: ptBr,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true,
  })

  function handleCreateNewCommit() {
    event.preventDefault()

    setComments([...comments, newCommentText]);
    setNewCommentText('');
  
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value)
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity('Este Campo é obrigatório!');
  }

  function deleteComment (commentToDelete) {
   const commentWithoutDeletedOne = comments.filter(comment => {
    return comment != commentToDelete;
   })
    setComments(commentWithoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.length == 0;

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

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>

      <div className={styles.content}>
       {content.map(line => {
        if(line.type === 'paragraph') {
          return <p key={line.content}>{line.content}</p>;
        }else if (line.type === 'link'){
          return <p key={line.content}><a href='#'>{line.content}</a></p>
        }
       })}
      </div>

      <form onSubmit={handleCreateNewCommit} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          name="comment"
          placeholder='Deixe seu comentário'
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

      <footer>
      <button type='submit' disabled={isNewCommentEmpty}>
        Publicar
      </button>
      </footer>
        
      </form>

      <div className={styles.commentList}>
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

/*<time>Publicado há 1h</time> está tag é especifica para publicações             
<time title='20 de Setembro de 2023' dateTime='2023-09-20'>Publicado há 1h</time>
no react no composto já vem no padrão camelCase segundo nome com letra maiuscula
para dar espaço no react jsx é {' '}*/
