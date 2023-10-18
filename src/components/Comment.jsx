import PropTypes from 'prop-types';
import { useState } from 'react';

//componts
import { Avatar } from './Avatar'

//style
import styles from './Comment.module.scss'

// biblioteca de icon
import { ThumbsUp, Trash} from '@phosphor-icons/react'

// Adicionando validação
Comment.propTypes = {
 content: PropTypes.string.isRequired,
 onDeleteComment: PropTypes.func, // Usar PropTypes.func para indicar que é uma função
};

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment () {
  onDeleteComment (content);
  }

  function handleLikeComment () {
  setLikeCount ((state) => {
    return state + 1
  })
 }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src='https://tvartesanatopassoapasso.com.br/wp-content/uploads/2022/08/desenho-de-banana-para-colorir-personagem-2.jpg' alt='/'/>
       
        <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>Lua Molango</strong>
                <time title='20 de Setembro ás 10:00h' dateTime='2023-09-20'>Cerca de 1h atrás</time>
              </div>

              <button onClick={handleDeleteComment} title='Deletar comentário'>
                <Trash size={24}/>
              </button>
            </header>
            <p>{content}</p>
          </div>
          <footer>
            <button>
              <ThumbsUp onClick={handleLikeComment} />
               Like
              <span>{likeCount}</span>
            </button>
          </footer>
        </div>
    </div>
  )
}
