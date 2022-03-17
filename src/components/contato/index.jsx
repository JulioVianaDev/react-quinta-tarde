import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contato.css';

export const Contato = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6dtm5pb', 'template_vzan10q', form.current, '13yrUNUwgWQuDO6vu')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
        <div class="formulario">
            <center>
                <form ref={form} onSubmit={sendEmail}>
                <label>Name</label> <br/>
                <input type="text" name="name" /> <br/>
                <label>Email</label> <br/>
                <input type="email" name="email" /> <br/>
                <label>Whatsapp</label> <br/>
                <input type="text" name="whats" /> <br/>
                <label>Message</label> <br/>
                <textarea name="message" cols="22" rows="5" /> <br/>
                <input type="submit" value="Send" /> <br/>
                </form>
            </center>
        </div>
  );
};