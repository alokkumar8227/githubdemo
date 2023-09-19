import React from 'react'
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
    const [state, handleSubmit] = useForm("xrgwlazj");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <section id="contact" class="contact section-bg">
      <div class="container">

        <div class="section-title">
          <h2>Contact us</h2>
        </div>


        <div class="row mt-5 justify-content-center">
          <div class="col-lg-10">
            <form method="post" action='https://formspree.io/f/xrgwlazj' name="google-sheet" autocomplete="off" class="php-email-form" onSubmit={handleSubmit}>
              <div class="row">
                <div class="col-md-6 form-group">
                  <input type="text" name="Name" class="form-control" id="name" placeholder="Your Name" required/>
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <input class="form-control" placeholder="Your Email" id="email"
        type="email" 
        name="email" required/>
                </div>
              </div>
              
              <div class="form-group mt-3">
                <textarea class="form-control" name="Message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div class="my-3">
                <div class="loading">Loading</div>
                <div class="sent-message" id="sent-message"></div>
              </div>
              <div class="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact