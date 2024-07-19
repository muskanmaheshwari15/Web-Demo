import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';

const NavLinks = ({ handleLinkClick }) => {
    const { pathname } = useLocation();

    // Function to determine if a link should be considered active
    const isActiveLink = (link) => {
        return link === pathname.split('#')[0]; // Compare only the pathname without the hash part
    };

    return (
        <>  
            <HashLink className={`px-4 navBar1 font-extrabold text-black-500 hover:text-blue-900 ${isActiveLink('/') ? 'text-blue-900' : ''}`} smooth to="/" onClick={handleLinkClick}>
               Home
            </HashLink>
            <HashLink className={`px-4 navBar1 font-extrabold text-black-500 hover:text-blue-900 ${isActiveLink('/about') ? 'text-blue-900' : ''}`}  smooth to="/about#about" onClick={handleLinkClick}>
                About
            </HashLink>
            <HashLink className={`px-4 font-extrabold text-black-500 hover:text-blue-900 ${isActiveLink('/Our Services') ? 'text-blue-900' : ''}`} smooth to="/services#service2" onClick={handleLinkClick}>
                     SERVICES
                </HashLink>
            <button className="px-4 navBar1 font-extrabold text-black-500 hover:text-blue-900 dropdown-toggle" type="button" id="servicesDropdown" data-bs-toggle="dropdown" >
                
                Product
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 512 512" className="ml-28 -mt-5" id="dropdown">
                    <path d="M128 192l128 128 128-128z" />
                </svg>
            </button>
            <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                <li>
                    <HashLink className={`px-4  font-extrabold text-black-500 hover:text-blue-900 ${isActiveLink('/blog') ? 'text-blue-900' : ''}`} to="/Blog#blog" onClick={handleLinkClick}>
                        BLOG
                    </HashLink>
                </li>
                <li>
                   
                <HashLink className={`px-4 navBar1 font-extrabold text-black-500 hover:text-blue-900 ${isActiveLink('/product') ? 'text-blue-900' : ''}`} to="/product#product" onClick={handleLinkClick}>
                    Products
                </HashLink>
                </li>

                <li>
                   
                <HashLink className={`px-4 navBar1 font-extrabold text-black-500 hover:text-blue-900 ${isActiveLink('/') ? 'text-blue-900' : ''}`} to="/" onClick={handleLinkClick}>
                    Products1
                </HashLink>
                </li>

                <li>
                   
                <HashLink className={`px-4 navBar1 font-extrabold text-black-500 hover:text-blue-900 ${isActiveLink('/') ? 'text-blue-900' : ''}`} to="/" onClick={handleLinkClick}>
                    Products2
                </HashLink>
                </li>
                {/* Add more service links as needed */}
            </ul>
           
            <HashLink className={`px-4 navBar1 font-extrabold text-black-500 hover:text-blue-900 ${isActiveLink('/contact') ? 'text-blue-900' : ''}`} to="/contact#contact" onClick={handleLinkClick}>
                Contact Us
            </HashLink>

            <HashLink className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl" smooth to="/get-demo#demo" onClick={handleLinkClick}>
                Demo our products
            </HashLink>
        </>
    )
}

export default NavLinks;
