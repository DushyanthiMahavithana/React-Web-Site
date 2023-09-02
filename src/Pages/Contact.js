import React from 'react';
import ContactImage from '../Images/contactsideimage.jpg';
import { Label } from '@material-ui/icons';
import { Input } from '@material-ui/core';
import '../Styles/Contact.css';

function Contact() {
  return (
    <div className='Contactus'>
      <div 
      className='contactImage'  
      style={{backgroundImage: `url(${ContactImage})`}}>
      </div>
      <div className='formSide'>
        <form id='contact-form' method='POST'>
          <Input name='fname' placeholder='First Name' type='text' required> </Input>
          <Input name='lname' placeholder='Last Name' type='text'> </Input>
          <Input name='email' placeholder='Email Address' type='email' required> </Input>
          <Input name='number' placeholder='Contact Number' type='tel' required> </Input>
          <textarea rows="6" placeholder='Message' name='message' required> </textarea>
          <button type='submit'>Submit</button>
        </form>
        </div>

    </div>
    
   
  );
}

export default Contact
