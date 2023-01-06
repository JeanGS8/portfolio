import classNames from 'classnames';
import styles from './Projetos.module.scss';
import projetos from './projetos.json';

export default function Projetos(){
  return(
    <div id='projetos' className={styles['container']}>
      <h2> Projetos </h2>
      <div className={styles['container__cards']}>
        {projetos.map( projeto => (
          <div className={styles['card']}>
            <a
              className={ styles['card__btn'] }
              target="_blank"
              href={projeto.github}
            >
              <img className={styles['card__btn__img']} src={projeto.foto} alt='foto do projeto' width='300px'/>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}