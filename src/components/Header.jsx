//stylo
import styles from'./Header.module.scss'

//img logo
import Logo from '../assets/A-removebg-preview.png'

export function Header() {
  return (
    <header className={styles.header}>
         <img src={Logo}/>
         <strong>Ignite Feed</strong>
    </header>
    
  );
}