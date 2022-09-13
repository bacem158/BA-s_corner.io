import React from 'react';
import "./contact.css";
import { useForm, ValidationError } from '@formspree/react';


function ContactForm() {
  const [state, handleSubmit] = useForm("xzbwdnan");
  if (state.succeeded) {
      return <ContactForm /> ;
  }
  return (
    <section className='contact container section' id='Contact'>
      <h2 className="section__title">Get In Touch</h2>
      
      <div className="contact__container grid">
       <div className="contact__info">
        <h3 className="contact__title">Let's talk about everything!</h3>
        <p className="contact__details">Send us an email. 👋</p>
       </div> 

      <form onSubmit={handleSubmit} className="contact__form">
      <div className="contact__form-group">
      
      <div className="contact__form-div">
        <input type="text" className="contact__form-input" placeholder='Insert your first name'/>
      </div>

      <div className="contact__form-div">
        <input type="text" className="contact__form-input" placeholder='Insert your last name'/>
      </div>

      <div className="contact__form-div">
        <label htmlFor="email"></label>
        <input id="email" type="email" name="email" className="contact__form-input" placeholder='Insert your email'/>
        <ValidationError prefix="Email"   field="email"  errors={state.errors}/>
      </div>

      <div className="contact__form-div">
        <label htmlFor="text"></label>
        <input id='subject' type="text" name='subject' className="contact__form-input" placeholder='Insert your subject'/>
      </div>

      </div>


      <div className="contact__form-div contact__form-area">
       <textarea id="message"name="message" cols="30" rows="10" className='contact__form-input' placeholder='Write your message'/>
       <ValidationError prefix="Message" field="message" errors={state.errors}/>
      </div>

      <button type="submit" disabled={state.submitting} className='btn'>Send Message </button>

    </form>
    </div>
    </section>
  );
}
const Contact = () => {
  return (
    <ContactForm />
    )
}

export default Contact