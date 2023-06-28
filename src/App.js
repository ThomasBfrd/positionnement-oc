import './styles/css/app.css';
import Game from './components/Game';
import hand from './medias/main.png'
import Presentation from './components/Presentation';
import Competences from './components/Competences';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

const navBar = [
  {
    name: 'Présentation',
    link: 'presentation'
  },
  {
    name: 'Compétences',
    link: 'competences'
  },
  {
    name: 'Mini-Jeu',
    link: 'game'
  },
]
const footerLinks = [
  {
    social: 'Linkedin',
    link: 'https://www.linkedin.com/in/bouffardthomas/',
    logo: faLinkedin
  },
  {
    social: 'GitHub',
    link: 'https://github.com/thomasBfrd',
    logo: faGithub
  },
  {
    social: 'Instagram',
    link: 'https://instagram.com/itsartegon',
    logo: faInstagramSquare
  }
]

const handleMenuClick = (event, id) => {
  event.preventDefault();
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({behavior: 'smooth'})
  }
}

function App() {
  return (
    <>
    <header className='header' id='accueil'>
        <a href="#accueil" className="header__logo"><img src={hand} alt="logo" /></a>
        <nav>
        <ul className='header__nav'>
          {navBar.map((element, index) => {
            return (
              <li key={`${index}`} className='header__navLi'>
                <a href={`${element.link}`} onClick={(event) => handleMenuClick(event, element.link)}>{element.name}</a>
              </li>
              )
          })}
        </ul>
      </nav>
    </header>

    <div className='main-content'>
      <Presentation/>
      <Competences/>
      <Game/>
      <button className='toTheTop'><a href="#accueil">🔝</a></button>
    </div>

    <footer className='footer'>
      <h4>Bento : <a href="https://bento.me/thomasbfrd" className='footer__bento'>bento.me/thomasbfrd</a></h4>
      <ul className='footer__social'>
          {footerLinks.map((element, index) => 
          <li key={`${index}`} className='footer__social-logo'><a href={element.link}><FontAwesomeIcon icon={element.logo} className='fa-icon'/></a></li>
          )}
      </ul>
    </footer>
    </>
  );
}

export default App;
