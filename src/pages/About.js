import React from 'react'
import NavBar from '../components/Navbar/NavBar'
import Footer from '../components/Footer'
import "./All.css"
import { Link } from 'react-router-dom';
import img from '../images/firstlook.jpg';
import team from "../images/team.png"
import mission from "../images/mission.png"
import vission from "../images/vission.png";
import about from "../images/about.png";
function About() {
  return ( 
    <div>
       
        <div className="w-full flex items-center justify-center text-white cta_about">
            <div className="mx-8 w-full h-96 text-center lg:text-left py-16 px-12 flex lg:justify-between items-center">                    
             
            </div>
        </div>
        <div className="m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-5/6" data-aos="zoom-in">
        
<div id='hero' className="flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left">
    <div className="lg:w-1/2 flex flex-col justify-center" data-aos="zoom-in" data-aos-delay="200">
        <h1 className="mb-5 md:text-5xl text-3xl font-bold text-blue-900">

        " Decoding the Latest Trends in Arisezen"


        </h1>
        <div className="text-xl font-semibold tracking-tight mb-5 text-gray-500">"Elevating Businesses: Ariszen - Your Partner for Growth and Innovation"

        Identify and analyze the latest trends in the Arisezen ecosystem.
        Discuss technological advancements, market shifts, or any notable changes. 




</div>
        <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
            <Link to="/contact" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0">
                Learn more
                <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </Link>
           
        </div>
    </div>
    <div className="flex lg:justify-end w-full lg:w-1/2" data-aos="fade-up" data-aos-delay="700">
        <img alt="card img" className="rounded-t float-right duration-1000 w-full" src={about} />
    </div>
</div> 
</div>
<div className='context'>
            <h1 className="text-3xl  text-blue-900 font-bold text-center">
                
           " Empowering Futures: The Arisezen Story"
                
                </h1>
        </div>
                <div className="m-auto max-w-7xl p-2 md:p-12 h-5/6" id='about' >

                    <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="fade-up">
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <img alt="card img" className="rounded-t float-right" src={img} />
                        </div>
                        <div className="flex-col my-4 text-left lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8">
                            
                            <h3 className="text-3xl  text-blue-900 font-bold">We develop high quality bespoke web and mobile applications for organizations, institutions and SMEs</h3>
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'>Our team is well vast in software development and is ready to help develop the applications of your choice.</p>
                            </div>
                            
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'>We take responsibility for building custom software solutions that caters for automation of your business processes and improve efficiency.</p>
                            </div>
                            <Link to="/contact" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group">
                                Contact us
                                <svg className="w-4 h-4 ml-1 group-hover: translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-5/6" data-aos="zoom-in">
        {/* section 1 */}
        <div id='hero' className="flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left">
            <div className="lg:w-1/2 flex flex-col justify-center" data-aos="zoom-in" data-aos-delay="200">
                <h1 className="mb-5 md:text-5xl text-3xl font-bold text-blue-900">
        
                " Decoding the Latest Trends in Arisezen"
        
        
                </h1>
                <div className="text-xl font-semibold tracking-tight mb-5 text-gray-500">"Elevating Businesses: Ariszen - Your Partner for Growth and Innovation"
        
                Identify and analyze the latest trends in the Arisezen ecosystem.
                Discuss technological advancements, market shifts, or any notable changes. 
        
        
        
        
        </div>
                <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                    <Link to="/contact" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0">
                        Learn more
                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </Link>
                   
                </div>
            </div>
            <div className="flex lg:justify-end w-full lg:w-1/2" data-aos="fade-up" data-aos-delay="700">
                <img alt="card img" className="rounded-t float-right duration-1000 w-full" src={mission} />
            </div>
        </div> 
          {/* end */}

          {/* section 2 */}
        <div id='hero' className="flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left mt-3">
        <div className="flex lg:justify-end w-full lg:w-1/2" data-aos="fade-up" data-aos-delay="700">
                <img alt="card img" className="rounded-t float-right duration-1000 w-full" src={team} />
            </div>
            <div className="lg:w-1/2 flex flex-col justify-center" data-aos="zoom-in" data-aos-delay="200">
                <h1 className="mb-5 md:text-5xl text-3xl font-bold text-blue-900">
        
                " OUR  TEAM"
        
        
                </h1>
                <div className="text-xl font-semibold tracking-tight  mb-5 text-gray-500">"Elevating Businesses: Ariszen - Your Partner for Growth and Innovation"
        
                Arisezen thrives on the collective strength and passion of a dedicated team committed to our shared vision of empowerment. Our team is a vibrant tapestry of individuals, each contributing unique skills, experiences, and perspectives to the organization's dynamic landscape. We believe in the power of collaboration, recognizing that diverse backgrounds foster creativity and innovation.


        
        
        
        
        </div>
                <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                    <Link to="/contact" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0">
                        Learn more
                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </Link>
                   
                </div>
            </div>
        </div> 
        {/* end */}

        <div id='hero' className="flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left mt-5">
            <div className="lg:w-1/2 flex flex-col justify-center" data-aos="zoom-in" data-aos-delay="200">
                <h1 className="mb-5 md:text-5xl text-3xl font-bold text-blue-900">
        
                " OUR VISSION"
        
        
                </h1>
                <div className="text-xl font-semibold tracking-tight mb-5 text-gray-500">
        
                At Arisezen, our vision is deeply rooted in the belief that empowerment is the cornerstone of sustainable positive change. We envision a world where every individual has the opportunity to unlock their full potential, regardless of background or circumstance. Our guiding principle is to create a global community where empowerment is not just a goal but a shared reality, fostering a sense of self-determination and resilience in the face of challenges.
        
        
        </div>
                <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                    <Link to="/contact" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0">
                        Learn more
                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </Link>
                   
                </div>
            </div>
            <div className="flex lg:justify-end w-full lg:w-1/2" data-aos="fade-up" data-aos-delay="700">
                <img alt="card img" className="rounded-t float-right duration-1000 w-full" src={vission} />
            </div>
        </div> 
        </div>
        
    </div>
  )
}

export default About