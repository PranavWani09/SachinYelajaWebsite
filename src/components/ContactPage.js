import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactPage() {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_3kxj1ek',          // Replace with your Service ID
      'template_yn3e40s',         // Replace with your Template ID
      form.current,
      'bmySbilL8h3A-Wnqy'        // Replace with your Public Key
    )
    .then((result) => {
      console.log(result.text);
      setIsSent(true);
      alert('Message sent successfully!');    // Show alert message
      form.current.reset();                   // Clear form fields
      setTimeout(() => setIsSent(false), 3000); // Reset success state after 3 seconds
    })
    .catch((error) => {
      console.log(error.text);
      alert('Failed to send message. Please try again later.');
    });
  };

  return (
    <div>
      <section id="contact" className="py-5 bg-custom text-white">
        <div className="container">
          <h2 className="text-center mb-4">Contact Us</h2>
          <form ref={form} onSubmit={sendEmail}>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input type="text" className="form-control" name="name" placeholder='Enter your fullname' id="name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" name="email" placeholder='Enter your email' id="email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="mobile" className="form-label">Phone Number</label>
                  <input type="tel" className="form-control" name="mobile" placeholder='Enter your phone number' id="mobile" required />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" name="message" placeholder='Enter your message' id="message" rows="5" required></textarea>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-light">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
