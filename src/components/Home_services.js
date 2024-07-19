import React from 'react'
import img from '../images/webdev.jpg'; 
import img2 from '../images/appdev.jpg';
import img3 from '../images/hosting.jpg';
import img4 from '../images/consultant.jpg';
import img5 from '../images/img5.avif';
import img6 from '../images/img6.avif';
import img7 from '../images/img7.avif';
import img8 from '../images/img8.avif';

function Home_services() {
    return (
        
            <div id="services" className="bg-gray-100 py-12 " >
                <section data-aos="zoom-in-down">
                        <div className="my-4 py-4">
                            <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">services</h2>
                            
                            <div className='flex justify-center'>
                                <div className='w-24 border-b-4 border-blue-900'></div>
                            </div>
                            <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">We are deeply committed to the growth and success of our clients.</h2>
                        </div>
    
                        <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                                
                                <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-black rounded-lg shadow-2xl p-3 group">
                                    <div className="m-2 text-justify text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img} />
                                        <h2 className="font-semibold my-4 text-2xl text-center">Web Development</h2>
                                       
                                    </div>
                                </div>
    
                                <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-black rounded-lg shadow-2xl p-3 group">
                                    <div className="m-2 text-justify text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img2} />
                                        <h2 className="font-semibold my-4 text-2xl text-center">Mobile App Development</h2>
                                       
                                    </div>
                                </div>
    
                                <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-black rounded-lg shadow-2xl p-3 group">
                                    <div className="m-2 text-justify text-sm">
                                        <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img3} />
                                        <h2 className="font-semibold my-4 text-2xl text-center ">Domain and Hosting Services</h2>
                                        
                                    </div>
                                </div>
    
                                <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-black rounded-lg shadow-2xl p-3 group">
                                    <div className="m-2 text-justify text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img4} />
                                        <h2 className="font-semibold my-4 text-2xl text-center ">General IT Consultations</h2>
                                        
                                    </div>
                                </div>    
                                <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-black rounded-lg shadow-2xl p-3 group">
                                    <div className="m-2 text-justify text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img5} />
                                        <h2 className="font-semibold my-4 text-2xl text-center">General<br/>Business<br/> Consultations</h2>
                                       
                                    </div>
                                </div>
    
                                <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-black rounded-lg shadow-2xl p-3 group">
                                    <div className="m-2 text-justify text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img6} />
                                        <h2 className="font-semibold my-4 text-2xl text-center">New Business<br/>Inovation</h2>
                                       
                                    </div>
                                </div>
    
                                <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-black rounded-lg shadow-2xl p-3 group">
                                    <div className="m-2 text-justify text-sm">
                                        <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img7} />
                                        <h2 className="font-semibold my-4 text-2xl text-center ">Artificial<br/>Inteligence</h2>
                                        
                                    </div>
                                </div>
    
                                <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-black rounded-lg shadow-2xl p-3 group">
                                    <div className="m-2 text-justify text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img8} />
                                        <h2 className="font-semibold my-4 text-2xl text-center ">Ethical<br/>Hacking Course</h2>
                                        
                                    </div>
                                </div>                  
                            </div>
                        </div>
                </section>
        </div>
    );
}

export default Home_services;