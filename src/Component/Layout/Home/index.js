import Sidebar from '../sidebar/index.js'
import Particle from '../particles.js'
import typingAnimation from '../typewriter.js'
import './index.scss'
import TypewriterComponent from 'typewriter-effect'
import { Typewriter } from 'react-simple-typewriter'




const Home = () => {
    return (

        <>
        <Sidebar/>
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
        </div>
        {/* <Particle/> */}

        </>
        
    )
}

export default Home