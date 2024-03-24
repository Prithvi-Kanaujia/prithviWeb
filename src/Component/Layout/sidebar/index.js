import './index.scss'
import {Link, NavLink} from 'react-router-dom'
import pkLogo from '../../../assets/images/bitmoji.png'
import resume from '../../../assets/images/Prithvi-Resume (1).pdf'
import LogoS from '../../../assets/images/logo-s.png'
import LogoSubtitle from '../../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile, faHome, faUser, faLayerGroup } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const sidebar = () => (
    <div className='nav-bar'>
        <Link className = 'logo' to = '/'>
            <img src = {pkLogo} alt = "logo"/>
            {/* <img className='sub-logo' src = {LogoSubtitle} alt = "slobodan"/> */}
        </Link>
        <nav className='icons'>
            <NavLink exact = "true" activeclassname = 'active' className = "Home-link" to = "/">
                <FontAwesomeIcon icon = {faUser} color='#4d4d4e' />
            </NavLink>
            <NavLink exact = "true" activeclassname = 'active' className ="about-link" to = "/about">
                <FontAwesomeIcon icon = {faLayerGroup} color='#4d4d4e' />
            </NavLink>
            <a href={resume} target='_blank' rel='noopener noreferrer'>
  <FontAwesomeIcon icon={faFile} color='#4d4d4e' />
</a>



        </nav>
        <ul>
            <li>
                <a target = "_blank" rel='noreferer' href='https://github.com/Prithvi-Kanaujia'>
                    <FontAwesomeIcon icon = {faGithub} color = "4d4d4e" />

                </a>
            </li>
            <li>
                <a target = "_blank" rel='noreferer' href='https://www.linkedin.com/in/prithvi-kanaujia/'>
                    <FontAwesomeIcon icon = {faLinkedin} color = "4d4d4e" />

                </a>
            </li>
            
            
        </ul>
    </div>
)

export default sidebar