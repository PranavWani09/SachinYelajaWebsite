import React, { useState } from 'react';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      message: document.getElementById("message").value,
    };

    const googleFormURL = "https://script.google.com/macros/s/AKfycbyFEtV7HZuoUqE8pTiqIMvc9CNziDsktUZWuCeNUQXx5pyUzQMHi191ds473Bord9ZP/exec";

    const params = new URLSearchParams();
    params.append("entry.2005620554", formData.name);
    params.append("entry.1045781291", formData.email);
    params.append("entry.1166974658", formData.phone);
    params.append("entry.839337160", formData.message);

    try {
      const response = await fetch(googleFormURL, {
        method: "POST",
        body: params,
      });

      if (response.ok) {
        alert("Message sent successfully!");
      } else {
        alert("Failed to send message!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while sending the message.");
    }
  };

  return (
    <div>
      <section id="contact" className="py-5 bg-custom text-white">
        <div className="container">
          <h2 className="text-center mb-4">Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Enter your message"
                  ></textarea>
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
