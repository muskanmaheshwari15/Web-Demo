import React from 'react';
import img from '../images/web1.svg'; 
import img2 from '../images/app1.svg';
import img3 from '../images/hosting1.svg';
import img5 from '../images/cyber.jpg';
import img4 from '../images/consultation.svg';
import img6 from '../images/network.jpg';
import img7 from '../images/backup.svg';
import img8 from '../images/cloud.jpg';
import react from '../images/react.svg';
import mongo from '../images/mongodb.svg';
import node from '../images/nodejs.svg';
import express from '../images/express.svg';


const Services = () => {
    return (
        <>        
            <div className="cta_services">
                
            </div>
            <div id="services" className="bg-gray-100 py-12">
                <section data-aos="zoom-in-down">
                    <div className="m-auto">
                        <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">services</h2>
                        
                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-blue-900'></div>
                        </div>
                        <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">We are deeply committed to the growth and success of our clients.</h2>
                    </div>

                    <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            
                            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">Web Development</h2>
                                    <p className="text-md font-medium">
                                        We specialize in creating and optimizing high-quality, custom websites for businesses and organizations of all sizes. Building mobile-friendly and easy-to-use websites and applications for clients.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img2} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">Mobile App Development</h2>
                                    <p className="text-md font-medium">
                                        We develop high-quality, custom cross-platform mobile applications that are robust and optimized for performance, scalability, and accessibility.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img3} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Domain and Hosting Services</h2>
                                    <p className="text-md font-medium">
                                        We provide domain registration and web hosting services to individuals and organizations to enable them gain visibility in the digital space.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img4} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">General IT Consultations</h2>
                                    <p className="text-md font-medium">
                                        Our IT consultations service provides expert guidance and support for businesses and individuals looking to optimize their technology solutions.
                                    </p>
                                </div>
                            </div>                    
                        </div>
                    </div>
                </section>
            </div>

            <div className='icons bg-gray-100' id='services'>
            <section data-aos="zoom-in-down">
                <div className='m-auto'>
                    <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Tech</h2>

                        <div className='flex justify-center '>
                            <div className='w-24 border-b-4 border-blue-900'></div>
                        </div>
                        <h2 className="mt-4 text-center text-xl lg:text-2xl font-semibold text-blue-900">We provide these technologies.</h2>
                    </div>
                    <div className="px-12  ">
                        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 m-10"> 
                            <div className='transition-all ease-in-out duration-400 hover:shadow-lg m-5 rounded-md' >
                                <div className="position-relative overflow-hidden">
                                    <img src={react} alt='React' className='  hover-zoom' id='react-img' />
                                    <div className="overlay position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-0 transition duration-500"></div>
                                </div>
                                <h2 className="font-semibold my-4 text-2xl text-center">React JS</h2>
                            </div>
                            <div className='transition-all ease-in-out duration-400 hover:shadow-lg m-5 rounded-md' > 
                                <div className="position-relative overflow-hidden ">
                                    <img src={mongo} alt='Mongo DB' className='img-fluid image-small image-zoom' />
                                    <div className="overlay position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-0 transition duration-500"></div>
                                </div>
                                <h2 className="font-semibold my-4 text-2xl text-center">Mongo DB</h2>
                            </div>
                            <div className='transition-all ease-in-out duration-400 hover:shadow-lg m-5 rounded-md' >
                                <div className="position-relative overflow-hidden">
                                    <img src={node} alt='Node JS' className='img-fluid image-small image-zoom' />
                                    <div className="overlay position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-0 transition duration-500"></div>
                                </div>
                                <h2 className="font-semibold my-4 text-2xl text-center">Node JS</h2>
                            </div>
                            <div className='transition-all ease-in-out duration-400 hover:shadow-lg m-5 rounded-md' >
                                <div className="position-relative overflow-hidden">
                                    <img src={express} alt='Express' className='img-fluid image-small m-2 image-zoom' />
                                    <div className="overlay position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-0 transition duration-500"></div>
                                </div>
                                <h2 className="font-semibold my-4 text-2xl text-center">Express</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </>
    )
}

export default Services;
