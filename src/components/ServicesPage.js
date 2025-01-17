import React from 'react';
import './ServicesPage.css';

function ServicesPage() {
  return (
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
                  <a href="#contact" className="btn btn-primary">Contact Us</a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mb-4">
              <div className="card shadow-lg hover-effect">
                <img src="\images\UII.png" className="card-img-top" alt="Service 2" />
                <div className="card-body">
                  <h5 className="card-title">Guidance</h5>
                  <p className="card-text">Providing step-by-step guidance for your GIC journey.</p>
                  <a href="#contact" className="btn btn-primary">Contact Us</a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mb-4">
              <div className="card shadow-lg hover-effect">
                <img src="\images\support.png" className="card-img-top" alt="Service 3" />
                <div className="card-body">
                  <h5 className="card-title">Support</h5>
                  <p className="card-text">We offer continuous support for all your insurance and investment queries.</p>
                  <a href="#contact" className="btn btn-primary">Contact Us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;
