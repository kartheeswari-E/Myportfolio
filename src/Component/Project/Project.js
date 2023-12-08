import React, { useState } from 'react'
import "./Project.css"
import guvi from "../Images/guvi temple pic.png"
import Paymentgateway from "../Images/car.png"
import Journal from "../Images/journal.png"
import portfolio from "../Images/kportfoliotemp.png"
import template from "../Images/template.png"
import movie from "../Images/movie.png"
import chat from "../Images/chat.png"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function Project() {




  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return <>
   <section id="project" class="portfolio">

<div class="container" data-aos="fade-up">

  <header class="section-header">
    <h2>Project</h2>
    <p>Check My latest work</p>
  </header>

  <div class="row" data-aos="fade-up" data-aos-delay="100">
    <div class="col-lg-12 d-flex justify-content-center">
      <ul id="portfolio-flters">
         <li  data-filter=".filter-card">Full stack Projects</li> 
        </ul>
    </div>
  </div>

  <div class="row gy-4 portfolio-container" data-aos="fade-up" data-aos-delay="200">

    <div class="col-lg-4 col-md-6 portfolio-item filter-Full stack">
      <div class="portfolio-wrap">
        <img src={guvi} class="img-fluid" alt=""/>
        <div class="portfolio-info">
          <h4>Zen Class Student Dashboard</h4>
          {/* <p>Created like a Ecommerce Website and having a Features like Solving the Customer Queries and they have a option to choose the Experts by own .Concepts which i is Used Authentication, Payment Gateway(Razorpay), Fetch, Nodemailer.

</p> */}
          <div class="portfolio-links">
          <a href="https://splendorous-travesseiro-cb808f.netlify.app/" target="_blank"><i class="bi bi-link"></i>&nbsp;Live</a>
        <a onClick={handleShow}><i class="bi bi-plus"></i>&nbsp;More</a>
  

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Zen Class Student Dashboard</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Created like a actual Zen Class Student Portal and the UI is more similar to the actual Zen.It have 2 main roles Student and Mentor.Concepts which i used is CRUD, Role Based Authentication,Fetch,NodeMailer.
        
        <h5 style={{"color":"blue","marginTop":"10px"}}>Source Code</h5>
        <Button  variant="primary"><a style={{"color":"white","textDecoration":"none"}} href="https://github.com/kartheeswari-E/zen-student-dashboard-frontend." target="_blank">Frontend</a></Button>&nbsp;
        <Button variant="primary"><a style={{"color":"white","textDecoration":"none"}}  href="https://github.com/kartheeswari-E/zen-student-dashboard-backend" target="_blank">Backend</a></Button>
        </Modal.Body>

      </Modal>

          </div>
        </div>
      </div>
    </div>

    <div class="col-lg-4 col-md-6 portfolio-item filter-Full stack">
      <div class="portfolio-wrap">
        <img src={Paymentgateway } class="img-fluid" alt=""/>
        <div class="portfolio-info">
          <h4>CRM Application</h4>
          {/* <p>Web</p> */}
          <div class="portfolio-links">
          <a href="https://heroic-palmier-84480e.netlify.app/" target="_blank"><i class="bi bi-link"></i>&nbsp;Live</a>
          <a onClick={handleShow}><i class="bi bi-plus"></i>&nbsp;More</a>
  

  <Modal
    show={show}
    onHide={handleClose}
    backdrop="static"
    keyboard={false}
  >
    <Modal.Header closeButton>
      <Modal.Title>CRM Application</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    Created like a Ecommerce Website and having a Features like Solving the Customer Queries and they have a option to choose the Experts by own .Concepts which i is Used Authentication, Payment Gateway(Razorpay), Fetch, Nodemailer.
    <h5 style={{"color":"blue","marginTop":"10px"}}>Source Code</h5>
    <Button variant="primary"><a href="https://github.com/kartheeswari-E/Crm-frontend" target="_blank">Frontend</a></Button>&nbsp;
    <Button variant="primary"><a href="https://github.com/kartheeswari-E/Crm_backend"  target="_blank">Backend</a></Button>
    </Modal.Body>

  </Modal> </div>
        </div>
      </div>
    </div>

    <div class="col-lg-4 col-md-6 portfolio-item filter-Full stack">
      <div class="portfolio-wrap">
        <img src={Journal} class="img-fluid" alt=""/>
        <div class="portfolio-info">
          <h4>International Journal Website</h4>
          {/* <p>App</p> */}
          <div class="portfolio-links">
          <a href="https://sensational-ganache-ecf34d.netlify.app/" target="_blank"><i class="bi bi-link"></i>&nbsp;Live</a>
          <a onClick={handleShow}><i class="bi bi-plus"></i>&nbsp;More</a>
  

  <Modal
    show={show}
    onHide={handleClose}
    backdrop="static"
    keyboard={false}
  >
    <Modal.Header closeButton>
      <Modal.Title>International Journal Website</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    Created like a Ecommerce Website and having a Features like Solving the Customer Queries and they have a option to choose the Experts by own .Concepts which i is Used Authentication, Payment Gateway(Razorpay), Fetch, Nodemailer.
    <h5 style={{"color":"blue","marginTop":"10px"}}>Source Code</h5>
    <Button variant="primary"><a href="https://github.com/kartheeswari-E/Crm-frontend" target="_blank">Frontend</a></Button>&nbsp;
    <Button variant="primary"><a href="https://github.com/kartheeswari-E/Crm_backend"  target="_blank">Backend</a></Button>
    </Modal.Body>

  </Modal> </div>
        </div>
      </div>
    </div>

     <div class="col-lg-4 col-md-6 portfolio-item filter-Full stack">
      <div class="portfolio-wrap">
        <img src={movie} class="img-fluid" alt=""/>
        <div class="portfolio-info">
          <h4>Movie Application</h4>
          {/* <p>App</p> */}
          <div class="portfolio-links">
          <a href="https://starlit-shortbread-1568c0.netlify.app" target="_blank"><i class="bi bi-link"></i>&nbsp;Live</a>
        <a><i class="bi bi-plus"></i>&nbsp;More</a></div>
        </div>
      </div>
    </div>

    <div class="col-lg-4 col-md-6 portfolio-item filter-Full stack">
      <div class="portfolio-wrap">
        <img src={chat} class="img-fluid" alt=""/>
        <div class="portfolio-info">
          <h4>Chat Application</h4>
          {/* <p>Card</p> */}
          <div class="portfolio-links">
          <a href="https://legendary-tulumba-c13295.netlify.app" target="_blank"><i class="bi bi-link"></i>&nbsp;Live</a>
        <a><i class="bi bi-plus"></i>&nbsp;More</a> </div>
        </div>
      </div>
    </div>


  </div>


  <div style={{"marginTop":"30px"}} class="row" data-aos="fade-up" data-aos-delay="100">
    <div class="col-lg-12 d-flex justify-content-center">
      <ul id="portfolio-flters">
         <li  data-filter=".filter-card">Frontend Projects</li> 
        </ul>
    </div>
  </div>

  <div class="row gy-4 portfolio-container" data-aos="fade-up" data-aos-delay="200">

 <div class="col-lg-4 col-md-6 portfolio-item filter-Frontend">
      <div class="portfolio-wrap">
        <img src={portfolio} class="img-fluid" alt=""/>
        <div class="portfolio-info">
          <h4>portfolio Template-1 for Student</h4>
          {/* <p>App</p> */}
          <div class="portfolio-links">
          <a href='https://tubular-froyo-286bef.netlify.app/' target='_blank'><i class="bi bi-link"></i>&nbsp;Live</a>
        <a><i class="bi bi-plus"></i>&nbsp;More</a>  </div>
        </div>
      </div>
    </div>

    <div class="col-lg-4 col-md-6 portfolio-item filter-Frontend">
      <div class="portfolio-wrap">
        <img src={template} class="img-fluid" alt=""/>
        <div class="portfolio-info">
        <h4>portfolio Template-2 for Student</h4>
          <div class="portfolio-links">
          <a href='https://tubular-froyo-286bef.netlify.app/' target='_blank'><i class="bi bi-link"></i>&nbsp;Live</a>
        <a><i class="bi bi-plus"></i>&nbsp;More</a> </div>
        </div>
      </div>
    </div>

  </div>





</div>

</section>
  </>
}

export default Project