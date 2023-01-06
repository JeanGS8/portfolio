import styles from './Home.module.scss';
import foto from '../../assets/quad.jpg';

export default function Home(){
  return(
    <div id='home' className={styles['container-bg']}>
      <div className={styles['container']}>

        <section className={styles['section-l']}>
          <div
            className={styles['section-l__informacoes']}
          >
            <p>Oi, eu sou</p>
            <h2 className={styles['section-l__informacoes__titulo']}>Jean Gomes.</h2>
            <p>Desenvolvedor Full-stack</p>
            <div>
              <a target="_blank" href="https://www.linkedin.com/in/jeangs/">
                Linkedin
              </a>
            </div>
          </div>
        </section>
        <section className={styles['section-r']}>
          <div>
            <img
              src={foto}
              alt="foto"
            />
          </div>
        </section>

      </div>
    </div>
  )
}