import React from "react";
import { Link } from "react-router-dom";


function Products() {
  return (
    <>
      <div className="w-full flex items-center justify-center text-white cta_product">
        <div className="mx-8 w-full  text-center lg:text-left py-16 px-12 flex lg:justify-between items-center">
          <div className="w-full flex flex-col lg:flex-row lg:justify-around">
            <div className="mb-4">
              <p className="text-2xl md:text-4xl font-bold mb-4">
                To scale your business?
              </p>
              <p className="text-lg md:text-2xl">
                Get in touch and let us build something amazing{" "}
                <span className="font-black">together!</span>
              </p>
            </div>

            <div className="w-full lg:w-72 pt-6 lg:mx-12">
              <Link
                to="/contact"
                className="bg-transparent border hover:bg-blue-900 hover:border-blue-800 text-white justify-center text-center rounded-lg px-10 py-3 flex items-center group"
              >
                Send a message
                <svg
                  className="w-5 h-5 ml-1 group-hover:translate-x-2 duration-500 ease-in"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="my-4 py-4" id="portfolio">
        <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
          Products
        </h2>
        <div className="flex justify-center">
          <div className="w-24 border-b-4 border-blue-900 mb-8"></div>
        </div>

        <div className="px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" data-aos="fade-down" data-aos-delay="600">
         {/* * <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
            <div className="m-2 text-justify text-sm">
              <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">
                Business Management System
              </h4>
              <p className="text-md font-medium leading-5 md:h-48">
                Our Business Management System is a robust and easily scalable
                system that streamlines business operations, increase
                efficiency, and ultimately drive growth and profitability for
                your business. With features such as employee management,
                finance control, and many more modules to effectively manage
                all aspects of a business. All data is stored in the cloud and
                as such it is easily accessible from all devices and from any
                location.
              </p>
              <div className="flex justify-center my-4">
                <Link
                  to="/get-demo"
                  className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl"
                >
                  Schedule Demo
                  <svg
                    className="w-4 h-4 ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div> **/}
          
          {/* Repeat similar code blocks for other products */}
        </div>
      </div>
    </>
  );
}

export default Products;
