import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

export const ContactUs = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_j7q0ria', 'template_tokqgrg', form.current, 'PfxrSLUByoGXF6oI4')
      .then((result) => {
        console.log('send status: ' + result.text)
        const submit = document.querySelector('#submit-button')
        // adding event to let user know their form was submitted
        submit.value = 'Message Sent!'
        document.querySelector('#name').value = ''
        document.querySelector('#email').value = ''
        document.querySelector('#message-box').value = ''
        setTimeout(() => { submit.value = 'Submit' }, 5000)
      }, (error) => {
        console.log(error.text)
      })
  }

  return (
    <form id='contact-form' ref={form} onSubmit={sendEmail}>
      <label className='about-name' htmlFor='name'>Name</label>
      <input id='name' type='text' name='user_name' />
      <br />
      <label className='about-email' htmlFor='email'>Email</label>
      <input id='email' type='email' name='user_email' />
      <br />
      <label className='about-message' htmlFor='message-box'>Message</label>
      <br />
      <textarea id='message-box' name='message' rows='10' cols='30' />
      <br />
      <input id='submit-button' type='submit' value='Send' />
    </form>
  )
}
