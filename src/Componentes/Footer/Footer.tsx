import {AiOutlineHome, AiOutlineMail, AiOutlineWhatsApp, AiOutlineGithub, AiOutlineLinkedin} from 'react-icons/ai';
import styles from './Footer.module.scss';

export default function Footer(){
  return(
    <footer className={styles['footer']}>
      <div>
        <ul className={styles['lista-l']}>
          <h3> Redes Sociais </h3>
          <li>
            <AiOutlineGithub />
            <a target='_blank' href="https://github.com/JeanGS8">
              Github
            </a>
          </li>
          <li>
            <AiOutlineLinkedin /> 
            <a target='_blank' href="https://www.linkedin.com/in/jeangs/">
              Linkedin
            </a>
          </li>
        </ul>
        <ul className={styles['lista-r']}>
          <h3>Informações</h3>
          <li>
            <AiOutlineHome />
            <p>Maré, Rio de Janeiro - RJ</p>
          </li>
          <li>
            <AiOutlineWhatsApp />
            <p>&#40;21&#41; 9 6670-8042</p>
          </li>
          <li>
            <AiOutlineMail />
            <p>Jean118877@hotmail.com</p>
          </li>
        </ul>
      </div>
    </footer>
  )
}