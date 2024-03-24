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


import React from 'react';
import './index.scss';
import CardItem from './CardItem';

function Cards({title,imageUrl,body,link}) {
  return (
    <div className='card-container'>
        <div className='image-container'>
            <img src={imageUrl}alt=''/>
        </div>
        <div className='card-content'>
            <div className='card-title'>
            <h3>{title}</h3>
        </div>
        <div className='card-body'>
            <p>{body}</p>
        </div>
        <br></br>
        <a href={link} className='btn' target='_blank' rel='noopener noreferrer'>
            Check it out!
        </a>
            
        </div>
        

    </div>
  );
}

export default Cards;