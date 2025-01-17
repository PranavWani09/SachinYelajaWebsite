import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero bg-custom text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Expert GIC Solutions by Sachin Yelaja</h1>
          <p className="lead">Your trusted GIC Consultant for all your needs</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <p>
                We provide the best GIC consulting services with a focus on efficiency, trust, and quality. Our aim is to help you achieve your goals with ease.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="\images\sachin.png"
                className="img-fluid rounded shadow-lg"
                alt="About us"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <div>
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Our Services</h2>
          <div className="row">
            <div className="col-12 col-md-4 mb-4">
              <div className="card shadow-lg hover-effect">
                <img src="\images\GIC.png" className="card-img-top" alt="Service 1" />
                <div className="card-body">
                  <h5 className="card-title">Consultation</h5>
                  <p className="card-text">Expert consultation for your financial and insurance needs.</p>
                  <Link to="/contact" className="btn btn-primary">Contact Us</Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mb-4">
              <div className="card shadow-lg hover-effect">
                <img src="\images\UII.png" className="card-img-top" alt="Service 2" />
                <div className="card-body">
                  <h5 className="card-title">Guidance</h5>
                  <p className="card-text">Providing step-by-step guidance for your GIC journey.</p>
                  <Link to="/contact" className="btn btn-primary">Contact Us</Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mb-4">
              <div className="card shadow-lg hover-effect">
                <img src="\images\support.png" className="card-img-top" alt="Service 2" />
                <div className="card-body">
                  <h5 className="card-title">Support</h5>
                  <p className="card-text">We offer continuous support for all your insurance and investment queries.</p>
                  <Link to="/contact" className="btn btn-primary">Contact Us</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">What Our Clients Say</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="testimonial-card">
                <p>"Sachin Yelaja's services have been invaluable to me. Their advice is spot-on, and I always feel confident with my decisions." - Client 1</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial-card">
                <p>"The team is highly knowledgeable and guided me through the entire process with utmost professionalism." - Client 2</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial-card">
                <p>"I trust them completely with my GIC needs. Their personalized service is unmatched!" - Client 3</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="cta" className="bg-custom text-white py-5">
        <div className="container text-center">
          <h2>Ready to take the next step?</h2>
          <p>Contact us today and let us help you achieve your financial and investment goals.</p>
          <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
