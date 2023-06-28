import '../styles/css/competences.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact } from '@fortawesome/free-brands-svg-icons';

const icons = [
    {
        icon: faHtml5,
        name: 'HTML5'
    },
    {
        icon: faCss3Alt,
        name: 'CSS'
    },
    {
        icon: faJs,
        name: 'Javascript'
    },
    {
        icon: faReact,
        name: 'React'
    },
]


function Competences() {
    return (
    <div className='competences' id='competences'>
      <h1>Mes compétences</h1>
      <ul className='competences__list'>
        {icons.map((element, index) => 
            <li key={`${index}`} className='competences__logo'><FontAwesomeIcon icon={element.icon} className='fa-icon'/></li>
        )}
      </ul>
    </div>
    )
}

export default Competences
