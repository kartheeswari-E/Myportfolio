import React from 'react'
import "./Hero.css"
import hero from "../Images/demo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
function Hero() {
  return <>
   <section id="hero" className="hero d-flex align-items-center">

<div className="container">
  <div className="row">
    <div className="col-lg-6 d-flex flex-column justify-content-center">
      <h3>Hai there👋</h3>
      <h1 data-aos="fade-up">I'm Kartheeswari E</h1>
      <h2 data-aos="fade-up" data-aos-delay="400">This is My Official Protfolio Website</h2>
      <div data-aos="fade-up" data-aos-delay="600">
        <div className="text-center text-lg-start">
          <a href="https://drive.google.com/file/d/1AaZAJTpcBlWlaxsnIIGc6ILZosBSvxOx/view?usp=sharing" target={'_blank'} className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
            <span>Show Resume</span>
            <i className="bi bi-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
    <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
      <img src={hero} className="img-fluid" alt=""/>
    </div>
  </div>
</div>

</section>
  </>
}

export default Hero
library.add(fab, fas, far)