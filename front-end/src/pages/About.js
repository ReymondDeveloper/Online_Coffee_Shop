import React from 'react'
import MultipleCoffee from '../assets/aboutMultiple.jpg'
import '../styles/About.css'
const About = () => {
  return (
    <div className='about' >
        <div className='aboutTop'  style={{backgroundImage: `url(${MultipleCoffee})`}}></div>
        <div className='aboutBottom'>
            <h1>ABOUT US</h1>
            <p>
              Whether you're searching for something new to warm your mug, 
            seeking the best brew method for your favorite blend or exploring our rarest offerings,
             you’ve come to the right place.
          </p>

        </div>
    </div>
  )
}

export default About
