import React,{useState} from 'react'
import Logo from "../Images/logo1.png";
import { Link } from 'react-router-dom';
import ReorderIcon from '@material-ui/icons/Reorder';
import "../Styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  }

  return (
    <div className='navbar'>
        <div className='logo' id={openLinks ? "open" : "close"}>
            <img src={Logo}></img>
              <div className='hidden-menu-icon'>
                <Link to='/'>Home</Link>
                <Link to='/recipes'>Recipes</Link>
                <Link to='/about'>About Us</Link>
                <Link to='/contact'>Contact Us</Link>
              </div>
        </div>
        <div className='menu'>
          <Link to='/'>Home</Link>
          <Link to='/recipes'>Recipes</Link>
          <Link to='/about'>About Us</Link>
          <Link to='/contact'>Contact Us</Link>
        </div>
          <div className='menu-icon'>
            <button onClick={toggleNavbar}>
              <ReorderIcon></ReorderIcon>
            </button>
          </div>
    </div>
  )
}

export default Navbar
