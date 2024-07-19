import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import ariszen from "../images/clients/ariszen.png";

const Footer = () => {
    return (
        <footer className="footer max-w-full mx-auto mb-0 px-4 sm:px-6 bg-gray-100 border-t border-b py-6 md:py-12">
            <div className="overflow-x-auto">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center items-center">
                        {/* 1st block */}
                        <div className="text-center">
                            <div className="box-border border-b-4 border-blue-900 p-8 bg-gray-200 text-gray-600 text-center rounded-lg xl:w-80 mx-auto">
                                <h4 className="font-bold text-3xl mb-4"><img src={ariszen} alt="Ariszen" /></h4>
                                <div className='text-md font-medium text-gray-600'>
                                    <h5>IT Services</h5>
                                    <p>Consultancy</p>
                                    <p>Products</p>
                                </div>
                            </div>
                        </div>

                        {/* 2nd block */}
                        <div className="text-center">
                            <h6 className="text-[#013289] text-xl font-bold mb-4">LINKS</h6>
                            <ul className="text-md">
                                <li><HashLink to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">About</HashLink></li>
                                <li><HashLink to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Services</HashLink></li>
                                <li><HashLink to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Contact</HashLink></li>
                                <li><HashLink to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Blog</HashLink></li>
                            </ul>
                        </div>

                        {/* 3rd block */}
                        <div className="text-center">
                            <h6 className="text-[#013289] text-xl font-bold mb-4">OUR SERVICES</h6>
                            <ul className="text-md">
                                <li><Link to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Web Development</Link></li>
                                <li><Link to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Mobile App Development</Link></li>
                                <li><Link to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Domain and Hosting</Link></li>
                                <li><Link to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">General IT Consultations</Link></li>
                            </ul>
                        </div>

                        {/* 4th block */}
                        <div className="text-center">
                            <div className="text-xl mb-4">Social Media Links</div>
                            <div className="text-md font-medium mb-4">Follow us on social media</div>
                            <ul className="flex justify-center">
                                <li className="mr-4">
                                    <Link to="#" className="text-blue-900 hover:text-gray-500">
                                        <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                            {/* Twitter icon */}
                                        </svg>
                                    </Link>
                                </li>
                                <li className="mr-4">
                                    <Link to="#" className="text-blue-900 hover:text-gray-500">
                                        <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                            {/* Facebook icon */}
                                        </svg>
                                    </Link>
                                </li>
                                <li className="mr-4">
                                    <Link to="#" className="text-blue-900 hover:text-gray-500">
                                        <svg className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px">
                                            {/* LinkedIn icon */}
                                        </svg>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="text-blue-900 hover:text-gray-500">
                                        <svg className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px">
                                            {/* Pinterest icon */}
                                        </svg>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="flex justify-center mt-8">
                        <div className="text-center">
                            <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} Ariszen. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
