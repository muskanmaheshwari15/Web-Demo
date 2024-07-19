import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom'; // Import NavLink and useLocation
import ariszen from "../../images/clients/ariszen.png";
import NavLinks from '../Navbar/NavLinks';

const NavBar = () => {
    const [top, setTop] = useState(true);
    const [isOpen, setIsOpen] = useState(false); // Changed to setIsOpen for better naming
    const { pathname } = useLocation(); // Get current pathname

    useEffect(() => {
        const scrollHandler = () => {
            window.pageYOffset > 10 ? setTop(false) : setTop(true);
        };
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, [top]);

    // Function to handle link click and close the menu
    const handleLinkClick = () => {
        setIsOpen(false); // Close the menu
    };

    return (
        <nav className={`fixed top-0 w-full z-30 transition duration-100 ease-in-out ${!top ? 'bg-white shadow-2xl' : ''}`}>
            <div className="flex flex-row justify-between items-center py-2">
                <div className="flex flex-row justify-center md:px-12 md:mx-12 items-center text-center font-semibold">
                    <NavLink to="/#hero" onClick={handleLinkClick}>
                        <h1 className="font-extrabold text-4xl text-blue-900">
                            <img src={ariszen} style={{ maxWidth: "12rem" }} alt="" />
                        </h1>
                    </NavLink>
                </div>
                <div className="group flex flex-col items-center">
                    <button className="p-2 rounded-lg lg:hidden text-blue-900" onClick={() => setIsOpen(!isOpen)}>
                        <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                            ) : (
                                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                            )}
                        </svg>
                    </button>
                    <div className='hidden space-x-6 lg:inline-block p-2'>
                        <NavLinks handleLinkClick={handleLinkClick} />
                    </div>
                    <div className={`fixed transition-transform duration-300 ease-in-out transit flex justify-center left-0 w-full h-auto rounded-md p-6 md:p-24 bg-white lg:hidden shadow-xl ${!top ? 'top-0' : 'top-14'} ${isOpen ? "block" : "hidden"}`}>
                        <div className='flex flex-col space-y-6'>
                            <NavLinks handleLinkClick={handleLinkClick} />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
