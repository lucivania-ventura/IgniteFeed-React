import PropTypes from 'prop-types';

//style
import styles from './Avatar.module.scss';

//adicionando validacao
Avatar.propTypes = {
  hasBorder: PropTypes.bool, // Defina o PropTypes para hasBorder
  src: PropTypes.string.isRequired, // Defina o PropTypes para src como obrigatório
};


export function Avatar({ hasBorder = true, src }) {
 
  return (
    <img className={hasBorder ? styles.avatarWithBorder : styles.Avatar} src={src} /> 
  );
}

/*<img className={props.hasBorder ? styles.avatarWithBorder : styles.Avatar} src={props.src} />  se as propriedades contem hasBorder vou mostrar (?) styles.avatarWithBorder se não (:) vou mostrar styles.avatar
- Desestruturação Avatar({hasBorder = true, src})*/