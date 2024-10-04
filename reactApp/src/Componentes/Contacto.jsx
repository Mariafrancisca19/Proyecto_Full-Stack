import '../Estilos/contacto.css'
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
    <form ref={form} onSubmit={sendEmail} className='form-contacto'>
      <label>CONTACTANOS</label>
      <label className='label-contacto'>Name</label>
      <input className='input-contacto' type="text" name="user_name" />
      <label className='label-contacto'>Email</label>
      <input className='input-contacto' type="email" name="user_email" value={"franciscasaborio19@gmail.com"} disabled />
      <label className='label-contacto'>Message</label>
      <textarea className='text-contacto' name="message" />
      <input className='input=contacto' type="submit" value="Send" />
    </form>
    <Footer/>
    </div>
  )
}

export default Contacto
