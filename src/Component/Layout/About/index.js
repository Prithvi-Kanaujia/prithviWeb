import Sidebar from '../sidebar/index.js'
import Particle from '../particles.js'
import typingAnimation from '../typewriter.js'
import './index.scss'
import TypewriterComponent from 'typewriter-effect'
import { Typewriter } from 'react-simple-typewriter'
import umassLogo from '../../../assets/images/umass.webp'
import metadome from '../../../assets/images/metadome_logo.jpeg'
import meta from '../../../assets/images/meta.png'
import gg from '../../../assets/images/gg.jpg'
import spot from '../../../assets/images/Screenshot 2024-03-19 at 18.05.57.png'
import mann from '../../../assets/images/manne.png'
import shark from '../../../assets/images/shark.png'
import scrabble from '../../../assets/images/scrabble.png'
import prithvi1 from '../../../assets/images/prithvi1.jpeg'
import Cards from '../Cards/Crads.js'

const About = () => {
    const cardData = [
        { title: 'geo Guessr bot', link:'https://colab.research.google.com/drive/16cJVO3VI1aOiLiN3aA3XCjYPSMFzmPPy?usp=sharing' , imageUrl: gg, body: '• Used machine learning to create a model that can predict the location of a Google street view image from the game GeoGuessr.• Trained the model using 900,000 images around the world sourced from Google’s street view API and Mapillary. • Used Convolutional Neural Networks (CNN) to stride over parts of each image and train the model. ' },
        { title: 'spotify round up', link:'https://prithvi-kanaujia.github.io/spotify-roundup/' , imageUrl: spot, body: '• Showcased user’s Spotify top tracks, insights, and listening history using React and hosted the web application on GitHub pages. • Integrated Spotify’s OAuth2, API scopes, and endpoints to access the user’s data.' },
        { title: 'clothing visualiser', link:'https://prithvi-kanaujia.github.io/showroom/' , imageUrl: mann, body: 'created an interactive dynamic 3d scene for clients to visualise different articles of clothing on a mannequinn • Integrated the scene with parent wesbite using iframes  ' },
        { title: 'shark tank game', link:'' , imageUrl: shark, body: '• Implemented AI algorithms for intelligent Non-Player Characters (NPCs) in the game.• Developed algorithms for the procedural creation of diverse levels, landscapes, and textures. • Integrated dynamic character animations and particle effects.' },
        // { title: 'Card 2', imageUrl: scrabble, body: 'Content for Card 2' },
        // Add more card data as needed
      ];
    return (

        <>
        {/* <Sidebar/> */}
        <div className='card-grid'>
        {cardData.map((card, index) => (
        <Cards key={index} title={card.title} link ={card.link} imageUrl={card.imageUrl} body={card.body} />
      ))}
        </div>
        
        {/* <Particle/> */}

        </>
        
    )
}

export default About