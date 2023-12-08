import './App.css';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
import Hero from './Component/Hero/Hero';
import Navbar from './Component/Navbar/Navbar';
import Project from './Component/Project/Project';
import Skill from './Component/Skill/Skill';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return <>
  
  <Navbar/>
  <Hero/>
  <About/>
  <Skill/>
  <Project/>
  <Contact/>
  <Footer/>
  </>
}

export default App;
