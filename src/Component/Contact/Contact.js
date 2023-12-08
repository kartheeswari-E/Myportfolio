import React from 'react'
import "./Contact.css"
function Contact() {
  return<>
  <section id="contact" className="contact">

<div className="container" data-aos="fade-up">

  <header className="section-header">
    <h2>Contact</h2>
    <p>Contact Me</p>
  </header>

      <div className="row gy-4">
        <div className="col-md-3">
          <div className="info-box">
            <i className="bi bi-geo-alt"></i>
            <h3>Address</h3>
            <p>Ramanathapuram</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="info-box">
            <i className="bi bi-telephone"></i>
            <h3>Call Us</h3>
            <p>+91 9344245002</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="info-box">
            <i className="bi bi-envelope"></i>
            <h3>Email Us</h3>
            <p>kartheesw2001@gmail.com</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="info-box">
            <i className="bi bi-clock"></i>
            <h3>Contact Hours</h3>
            <p>9:00AM - 08:00PM</p>
          </div>
        </div>
      </div>

    </div>


</section>
  </>
}

export default Contact