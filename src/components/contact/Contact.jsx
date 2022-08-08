import React,{ useRef } from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlineFacebook} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p1twplq', 'template_9va7rf4', form.current, 'XM_hMf6hr3LEtM7bT')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>rishipatel.pes@gmail.com</h5>
            <a href="mailto:rishipatel.pes@gmail.com">Send A Mail</a>
          </article>
          <article className="contact__option">
            <AiOutlineFacebook className='contact__option-icon'/>
            <h4>Facebook</h4>
            <h5>Rishi Patel</h5>
            <a href="https://www.facebook.com/profile.php?id=100016670553009">Send A Request</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+91 9726304483</h5>
            <a href="https://api.whatsapp.com/send?phone=919726304483" target="_blank" rel="noreferrer">Send A Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" className="email" placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact