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
const [show1, setShow1] = useState(false);
const [show2, setShow2]= useState(false);
const [show3, setShow3] = useState(false);
const [show4, setShow4] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose2 = () => setShow1(false);
  const handleShow2 = () => setShow1(true);
  const handleClose3= () => setShow2(false);
  const handleShow3 = () => setShow2(true);
  const handleClose4 = () => setShow3(false);
  const handleShow4 = () => setShow3(true);
  const handleClose5 = () => setShow4(false);
  const handleShow5 = () => setShow4(true);


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
          <a href="https://splendorous-travesseiro-cb808f.netlify.app/" target="_blank" rel="noopener noreferrer"><i class="bi bi-link"></i>&nbsp;Live</a>
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
        <Button  variant="primary"><a style={{"color":"white","textDecoration":"none"}} href="https://github.com/kartheeswari-E/zen-student-dashboard-frontend." target="_blank" rel="noopener noreferrer">Frontend</a></Button>&nbsp;
        <Button variant="primary"><a style={{"color":"white","textDecoration":"none"}}  href="https://github.com/kartheeswari-E/zen-student-dashboard-backend" target="_blank" rel="noopener noreferrer">Backend</a></Button>
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
          <a href="https://heroic-palmier-84480e.netlify.app/" target="_blank" rel="noopener noreferrer"><i class="bi bi-link"></i>&nbsp;Live</a>
          <a onClick={handleShow2}><i class="bi bi-plus"></i>&nbsp;More</a>
  

  <Modal
    show={show1}
    onHide={handleClose2}
    backdrop="static"
    keyboard={false}
  >
    <Modal.Header closeButton>
      <Modal.Title>CRM Application</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    Created like a Ecommerce Website and having a Features like Solving the Customer Queries and they have a option to choose the Experts by own .Concepts which i is Used Authentication, Payment Gateway(Razorpay), Fetch, Nodemailer.
    <h5 style={{"color":"blue","marginTop":"10px"}}>Source Code</h5>
    <Button variant="primary"><a style={{"color":"white","textDecoration":"none"}} href="https://github.com/kartheeswari-E/Crm-frontend" target="_blank" rel="noopener noreferrer">Frontend</a></Button>&nbsp;
    <Button variant="primary"><a style={{"color":"white","textDecoration":"none"}} href="https://github.com/kartheeswari-E/Crm_backend"  target="_blank" rel="noopener noreferrer">Backend</a></Button>
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
          <a href="https://sensational-ganache-ecf34d.netlify.app/" target="_blank" rel="noopener noreferrer"><i class="bi bi-link"></i>&nbsp;Live</a>
          <a onClick={handleShow3}><i class="bi bi-plus"></i>&nbsp;More</a>
  

  <Modal
    show={show2}
    onHide={handleClose3}
    backdrop="static"
    keyboard={false}
  >
    <Modal.Header closeButton>
      <Modal.Title>International Journal Website</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    Users who want to publish their article ,can use this website. It has the admin panel . Concept which I used is CRUD, Text-editor, Multer package
to store pdf, Helmet provider, Authentication, Fetch, Node Mailer. <h5 style={{"color":"blue","marginTop":"10px"}}>Source Code</h5>
    <Button variant="primary"><a style={{"color":"white","textDecoration":"none"}} target="_blank" rel="noopener noreferrer">Frontend (private)</a></Button>&nbsp;
    <Button variant="primary"><a style={{"color":"white","textDecoration":"none"}} target="_blank" rel="noopener noreferrer">Backend (private)</a></Button>
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
          <a href="https://starlit-shortbread-1568c0.netlify.app" target="_blank" rel="noopener noreferrer"><i class="bi bi-link"></i>&nbsp;Live</a>
          <a onClick={handleShow4}><i class="bi bi-plus"></i>&nbsp;More</a>
  

  <Modal
    show={show3}
    onHide={handleClose4}
    backdrop="static"
    keyboard={false}
  >
    <Modal.Header closeButton>
      <Modal.Title>Movie Application</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    Users can get a list of Movies and can be seen the Trailer.User have a access to add, delete ,edit,like and dislike a Movie.Concept which i used is CRUD,Theme change(Dark/ Light mode).  <h5 style={{"color":"blue","marginTop":"10px"}}>Source Code</h5>
    <Button variant="primary"><a style={{"color":"white","textDecoration":"none"}} href="https://github.com/kartheeswari-E/movieapp-frontend" target="_blank" rel="noopener noreferrer">Frontend</a></Button>&nbsp;
    <Button variant="primary"><a style={{"color":"white","textDecoration":"none"}} href="https://github.com/kartheeswari-E/Movie-app-backend"  target="_blank" rel="noopener noreferrer">Backend</a></Button>
    </Modal.Body>

  </Modal></div>
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
          <a href="https://legendary-tulumba-c13295.netlify.app" target="_blank" rel="noopener noreferrer"><i class="bi bi-link"></i>&nbsp;Live</a>
          <a onClick={handleShow5}><i class="bi bi-plus"></i>&nbsp;More</a>
  

  <Modal
    show={show4}
    onHide={handleClose5}
    backdrop="static"
    keyboard={false}
  >
    <Modal.Header closeButton>
      <Modal.Title>Chat Application</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    Users who are having the same room id they can Send Messages to each other via this App. Concepts Which I used is Authentication, Socket.io, Fetch,
NodeMailer.<h5 style={{"color":"blue","marginTop":"10px"}}>Source Code</h5>
 <Button variant="primary"><a style={{"color":"white","textDecoration":"none"}} href="https://github.com/kartheeswari-E/chat-app-frontend" target="_blank" rel="noopener noreferrer">Frontend</a></Button>&nbsp;
    <Button variant="primary"><a style={{"color":"white","textDecoration":"none"}} href="https://github.com/kartheeswari-E/chatapp-backend" target="_blank" rel="noopener noreferrer">Backend</a></Button>
    </Modal.Body>

  </Modal> </div>
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
          <a href='https://tubular-froyo-286bef.netlify.app/' target='_blank' rel="noopener noreferrer"><i class="bi bi-link"></i>&nbsp;Live</a>
        </div>
        </div>
      </div>
    </div>

    <div class="col-lg-4 col-md-6 portfolio-item filter-Frontend">
      <div class="portfolio-wrap">
        <img src={template} class="img-fluid" alt=""/>
        <div class="portfolio-info">
        <h4>portfolio Template-2 for Student</h4>
          <div class="portfolio-links">
          <a href='https://marvelous-paprenjak-e59cc1.netlify.app/' target='_blank' rel="noopener noreferrer"><i class="bi bi-link"></i>&nbsp;Live</a>
       </div>
        </div>
      </div>
    </div>

  </div>





</div>

</section>
  </>
}

export default Project