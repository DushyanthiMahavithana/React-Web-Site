import React from 'react'
import InstaIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import '../Styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <FacebookIcon/> 
        <InstaIcon/>
        
      </div>
      <p>&copy; 2023 bakesbydushy.com</p>
      
    </div>
  )
}

export default Footer
