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






const Home = () => {
    return (

        <>
        {/* <Sidebar/> */}
        <div className="conatiner home-page">
            <div className="text-zone">
                <h1>Hi, <br />  I'm Prithvi Kanaujia <br/>
                <div class="line1"></div>
                <span>
                <Typewriter
                words = {['Software Developer', 'Student', 'Creator']}
                typeSpeed= {70}
                deleteSpeed ={50}
                loop= {0}
                cursor
                cursorStyle='|'
                    />
                </span>
                </h1>
                
            </div>
            <div className='top-right-container'>
                <div className='new-image'>
                    <img src={prithvi1} alt='prithvi' className='new-image-style' />
                </div>
            </div>
            <div className='grid'>
                <div className='image-container'>
                {/* <img src={meta} alt='prithvi' className='custom-image-style'/> */}
                <img src={umassLogo} alt='prithvi' className='custom-image-style'/>
                <img src={metadome} alt='prithvi' className='custom-image-style'/>
            </div>
            


            </div>
            
        </div>
        {/* <Particle/> */}

        </>
        
    )
}

export default Home