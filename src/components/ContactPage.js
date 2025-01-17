import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    const proxyUrl = "https://cors-anywhere.herokuapp.com/"; // CORS Proxy URL
    const apiUrl = "https://script.google.com/macros/s/AKfycbyFEtV7HZuoUqE8pTiqIMvc9CNziDsktUZWuCeNUQXx5pyUzQMHi191ds473Bord9ZP/exec"; // Your Google Apps Script URL

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("message", formData.message);

    fetch(proxyUrl + apiUrl, {
      method: "POST", // Using POST method
      body: formDataToSend,
    })
      .then((response) => response.text()) // or response.json() depending on your expected response type
      .then((data) => {
        console.log("Success:", data); // Success message from the API
        alert("Form submitted successfully!");
      })
      .catch((error) => {
        console.error("Error:", error); // Catch and log any errors
        alert("There was an error submitting the form.");
      });
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Phone:
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>
        <label>
          Message:
          <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactPage;
