import React from 'react'
import { Link } from 'react-router-dom';
import BannerImage from '../Images/homeBanner.jpg';
import '../Styles/Home.css';

function Home() {
  return (
    <div className='homeBanner'>
     <div 
        className='header' 
        style={{backgroundImage: `url(${BannerImage})`}}>
      <h1>Bakes By Dushy</h1>
      <p>Order Now</p>
      <Link to="/recipes" >
        <button>click me</button>
      </Link>
      </div>
    </div>
  );   
}

export default Home
