import React from 'react';

function ContactPage() {
  return (
    <div>
      <section id="contact" className="py-5 bg-custom text-white">
        <div className="container">
          <h2 className="text-center mb-4">Contact Us</h2>
          <form>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input type="text" className="form-control" placeholder='Enter your fullname' id="name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" placeholder='Enter your email' id="email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="mobile" className="form-label">Phone Number</label>
                  <input type="tel" className="form-control" placeholder='Enter your phone number'  id="mobile" required />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" placeholder='Enter your message' id="message" rows="5" required></textarea>
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
