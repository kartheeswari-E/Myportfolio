import React from 'react'
import "./About.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function About() {
  return <>
     <section id="about" class="about">
<header class="section-header">
    <h2 style={{"fontSize":"15px","fontWeight":"normal","marginBottom":"10px","color":"blue"}} >About Me</h2>
  </header>
<div class="container" data-aos="fade-up">

  <div id='manual' class="row gx-0">
 <div class="col-lg-5 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
      <div class="content">
        <h3>I'm Kartheeswari E ,</h3>
        <h2>Full Stack and Frontend Developer.</h2>
        <p>
        A passionate Full stack developer with the goal of working on a project that solves problems with thoughtful UI design, creating intuitive, dynamic user experiences powered by strong backend. I primarily work with MERN stack among the full stack technologies. The satisfaction that I get while working and completing every project made me do more and more. And I believe, I have did something creatively.  </p>
        <div class="text-center text-lg-start">
          <a href="https://github.com/kartheeswari-E"target={'_blank'} class="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
          <FontAwesomeIcon className='icon-manual' icon="fa-brands fa-github" />
          </a>
           &nbsp;  <a href="https://www.linkedin.com/in/kartheeswari-e-107746226/" target={'_blank'} class="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
       <FontAwesomeIcon className='icon-manual' icon="fa-brands fa-linkedin" />
          </a>
          &nbsp;  <a href="mailto:kartheesw2001@gmail.com"  class="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
          <FontAwesomeIcon className='icon-manual' icon="fa-solid fa-envelope" />
          </a>
        </div>
      </div>
    </div>

    <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
  
    {/* <div class="col-xl-8 d-flex content"> */}
              <div class="row align-self-center gy-4">

                <div class="col-md-6 icon-box" data-aos="fade-up">
                <i class="bi bi-speedometer2"></i>
                  <div>
                    <h4>Fast</h4>
                    <p>Fast load times and lag free interaction, my highest priority.</p>
                  </div>
                </div>

                <div class="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                <i class="bi bi-phone"></i>
                  <div>
                    <h4>Responsive</h4>
                    <p>My layouts will work on any device, big or small.</p>
                  </div>
                </div>

                <div class="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                <i class="bi bi-lightbulb-fill"></i>
                  <div>
                    <h4>Intuitive</h4>
                    <p>Strong preference for easy to use, intuitive UX/UI.</p>
                  </div>
                </div>

                <div class="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                <i class="bi bi-card-list"></i>
                  <div>
                    <h4>Dynamic</h4>
                    <p>Websites don't have to be static, I like making pages come to life.</p>
                  </div>
                </div>

                <div class="col-md-12 icon-box" data-aos="fade-up" data-aos-delay="400">
                <i class="bi bi-grip-horizontal"></i>
                  <div>
                    <h4>Experience</h4>
                    <h5>Infodazz - Full Stack Developer(MERN)</h5>
                    <p>April 2023 - Aug 2023</p>
                  </div>
                </div>

            </div>
      
    </div>

  </div>
</div>

</section>
  </>
}

export default About