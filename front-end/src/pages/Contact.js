
import React, { useEffect } from 'react';
import CoffeeLeft from '../assets/contactt.jpg';
import '../styles/Contact.css';
// Link Of SpreadSheets https://docs.google.com/spreadsheets/d/1FWupWLwzvhE_I_msG0KzXwcE1TieaUsF3JTyOauMDxs/edit#gid=0
const Contact = () => {
  useEffect(() => {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxAxzNh2zOv50G45hO6J-76ykwi8d_-jeOp1e3I4uuih95zSo79FBO4lZvOXLiDBURAdQ/exec';
    const form = document.forms['submit-to-google-sheet'];

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch(scriptURL, {
          method: 'POST',
          body: new FormData(form)
        });
        console.log('Success!', response);
        form.reset();
      } catch (error) {
        console.error('Error!', error.message);
      }
    };

    form.addEventListener('submit', handleSubmit);

    // Cleanup function to remove event listener
    return () => {
      form.removeEventListener('submit', handleSubmit);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div className='contact'>
      <div className='leftSide' style={{backgroundImage: `url(${CoffeeLeft})`}}></div>
      <div className='rightSide'>
        <h1>Contact Us</h1>
        <form id="contact-form" method="POST" name='submit-to-google-sheet'>
          <label htmlFor='name'>Full Name</label>
          <input name="FullName" placeholder='enter full Name...' type='text' />
          <label htmlFor='email'>Email</label>
          <input name="Email" placeholder='enter email...' type='email' />
          <label htmlFor='message'>Message</label>
          <textarea rows="6" placeholder='enter message...' name='Message' required></textarea>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
