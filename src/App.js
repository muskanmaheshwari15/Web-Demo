import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import ScrollToTop from "react-scroll-to-top";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
// All pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import DemoProduct from './pages/DemoProduct';
import {useDocTitle} from './components/CustomHook';
import Services from './components/Services';
import Products from './pages/Products';
import About from './pages/About';
import Blog from './pages/Blog';
import NavBar from './components/Navbar/NavBar';
import Footer from './components/Footer';

//import LetsConnect from './components/LetsConnect';
// Import the FAQ component


function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  useDocTitle("Arisezen");

  return (
    <>
    <div>
      <Router>
        
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-demo" element={<DemoProduct />} />
            <Route path="/product" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            {/* Add the FAQ component to the homepage route */}
          
          </Routes>
       
        <Footer/>
        <div>
      
      <div style={{  borderRadius: "90px"}} />
      <ScrollToTop smooth />
    </div>
        
      </Router>
      </div>

    

    </>
  );
}

export default App;
