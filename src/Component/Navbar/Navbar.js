import React, { useState } from 'react'
import "./Navbar.css"
import logo from "../Images/logo.png"
function Navbar() {

const [state,setstate]=useState(false);

const change=()=>{
  if(window.scrollY >=80){
    setstate(true)
  }
  else{
    setstate(false)
  }
}

window.addEventListener('scroll',change)
  return<>
   <header id="header" className={!state? "header fixed-top" :"header header-scrolled fixed-top"}>
    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

      <div className="logo d-flex align-items-center">
        <img src={logo} alt="..."/>
        <span>Kartheeswari</span>
      </div>

      <nav id="navbar" className="navbar">
        <ul>
          <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a className="nav-link scrollto" href="#about">About</a></li>
          <li><a className="nav-link scrollto" href="#skill">Skill</a></li>
          <li><a className="nav-link scrollto" href="#project">Project</a></li>
          <li><a className="getstarted scrollto" href="#contact">Contact Me</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>

  </>
}

export default Navbar