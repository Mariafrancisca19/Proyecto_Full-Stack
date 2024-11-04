import '../Estilos/formServi.css'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import MenuNav from './MenuNav';
import Footer from './Footer';


const Contacto = () => {
  
  const [name,setName] = useState("")
  const [email,SetEmail] = useState("")
  const [message,setMessage] = useState("")
 
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_hj499i7', 'template_1wk8pnf', form.current, {
        publicKey: 'kCLyikxWUKh17RPjL',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
 
  const espacioBlanco = () => {
  if (name.trim() === "" || email.trim() === "" || message.trim() === "")
    mostrarAlerta("error","Campos obligatorios")
  }


  return (
    <div>
    <MenuNav/>
    <form ref={form} onSubmit={sendEmail} className='form-contacto-email'>
      <label  className='label-contacto-email' style={{fontFamily:'fantasy', fontSize:" 30px"}}>CONTACTANOS</label>
      <label className='label-contacto-email'>Name</label>
      <input className='input-contacto-email' type="text" name="user_name" />
      <label className='label-contacto-email'>Email</label>
      <input className='input-contacto-email' type="email" name="user_email" disabled />
      <label className='label-contacto-email'>Message</label>
      <textarea className='text-contacto-email' name="message" />
      <input className='input-sutmit-email' type="submit" value="Send" />
    </form>
    <Footer/>
    </div>
  )
}

export default Contacto
