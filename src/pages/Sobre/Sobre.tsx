import styles from './Sobre.module.scss';
import icone from 'assets/icone-sobre.svg';

export default function Sobre(){
  return(
    <div id='sobre' className={ styles['container'] }>
        <section className={ styles['container__section-l'] }>
          <img src={icone} alt="icone" />
        </section>
        <section  className={ styles['container__section-r'] }>
          <div>
            <h3>Sobre mim</h3>
            <p>
              &nbsp; Meu nome é Jean Gomes, sou carioca e tenho 21 anos. Atualmente estou cursando análise e desenvolvimento de sistemas pela UNISUAM e participando do bootcamp Full-Stack JavaScript pela Generation Brasil. Sempre fui apaixonado por tecnologia e tenho como objetivo me tornar um desenvolvedor Full-Stack. Possuo alguns conhecimentos, como Node, Nest, TypeScript, Java e C++. Sou uma pessoa amigável, prestativa, persistente, tenho responsabilidade pessoal e sei trabalhar em equipe.
            </p>
          </div>
        </section>
      </div>
  )
}