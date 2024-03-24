import Sidebar from '../sidebar/index.js'
import Particle from '../particles.js'
import typingAnimation from '../typewriter.js'
import './index.scss'
import TypewriterComponent from 'typewriter-effect'
import { Typewriter } from 'react-simple-typewriter'
import umassLogo from '../../../assets/images/umass.webp'
import metadome from '../../../assets/images/metadome_logo.jpeg'
import meta from '../../../assets/images/meta.png'
import prithvi1 from '../../../assets/images/prithvi1.jpeg'
import { Link } from 'react-router-dom'






const CardItem = () => {
    return (
        <>
      <li className='cards__item'>
        <Link className='cards__item__link'>
          <figure className='cards__item__pic-wrap' >
            <img
              className='cards__item__img'
              alt='Travel Image'
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'></h5>
          </div>
        </Link>
      </li>
    </>
    )
}

export default CardItem;