import styles from './Navbar.module.scss';
import itens from './itens.json';

export default function Navbar(){
  return(
    <header className={styles['header']}>
      <nav className={styles['header__navbar']}>

        <ul className={styles['header__ul']}>
          {itens.map((item, index) => (
            <li
              key={index}
              className={ styles['header__item'] }
            >
              <a
                href={item.endPoint}
                className={ styles['header__anchor'] }
              >
                {item.item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}