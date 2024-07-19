import React from 'react';
import img from '../images/firstlook.jpg';
import { Link } from 'react-router-dom';

const Intro = () => {
    return (
        <>
            <div className='context'>
                <h1 className="text-3xl text-blue-900 font-bold text-center">"Leading The Digital Frontier"</h1>
            </div>
            <div className="m-auto max-w-7xl p-2 md:p-10 h-auto gap-5" id='about'>
                <div className="flex flex-col-reverse  lg:flex-row py-8 justify-between lg:text-left" data-aos="fade-up">
                    <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                        <img alt="card img" className="rounded float-right w-full md:w-auto" src={img} />
                    </div>
                    <div className="flex-col my-4 text-left lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8" >
                        <h3 className="text-3xl text-blue-900 font-bold">We develop high quality bespoke web and mobile applications for organizations, institutions and SMEs</h3>
                        <div>
                            <p className='my-3 text-xl text-gray-600 font-semibold'>Our team is well versed in software development and is ready to help develop the applications of your choice.</p>
                        </div>
                        <div>
                            <p className='my-3 text-xl text-gray-600 font-semibold'>We take responsibility for building custom software solutions that cater to automation of your business processes and improve efficiency.</p>
                        </div>
                        <Link to="/contact" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group">
                            Contact us
                            <svg className="w-4 h-4 ml-1 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Intro;
