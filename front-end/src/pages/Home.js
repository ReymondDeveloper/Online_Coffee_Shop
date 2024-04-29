import React from 'react'
import {Link} from 'react-router-dom';
import BannerImage from "../assets/newbg.jpg"
import '../styles/Home.css'
const Home = () => {
  return (
    <div className='home' style={{backgroundImage: `url(${BannerImage})`}} >
        <div className='headerContainer'>
            <h1>Reymond Coffee Palace</h1>
            <p>Coffee To Fit Any Taste</p>
            <Link to ="/menu"><button>ORDER NOW</button> </Link> 
        </div>
    </div>
  )
}

export default Home
