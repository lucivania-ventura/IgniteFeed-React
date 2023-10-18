//components
import { Avatar } from './Avatar';

//style
import styles from './Sidebar.module.scss'

//blibioteca de icones (Phosphor Icons)
import {PencilLine} from '@phosphor-icons/react'

export function Sidebar () {
  return(
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover}
        src='https://images.unsplash.com/photo-1694875464862-978a879a1210?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=50' 
      /> 

      <div className={styles.profile}>
        <Avatar src='https://media.istockphoto.com/id/1335403929/pt/vetorial/funny-cartoon-illustration-of-a-walking-banana-in-retro-style.jpg?s=612x612&w=0&k=20&c=HyUwJQEhikBWF3ZRtSl-PysiBdLY5vRMje5OqAVoFx8='/> 
       

        <strong>Bamana Moneira</strong>
        <span>Front end</span>
      </div>

      <footer>
        <a href='#'>
          <PencilLine size={20}/>
          Editar seu Perfil
          </a>
      </footer>
    </aside>
  );
}

// https://unsplash.com/ otimo para buscar fotos aleatorias
