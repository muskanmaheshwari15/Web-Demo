import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const OfferPage = () => {
  const services = [
    {
      title: 'Custom Software Development',
      description: 'We provide tailored software solutions that meet your specific business needs.'
    },
    {
      title: 'Web Application Development',
      description: 'Our team specializes in developing responsive, feature-rich web applications using the latest technologies.'
    },
    {
      title: 'Mobile App Development',
      description: 'Whether you need an iOS, Android, or cross-platform app, we have the expertise to bring your ideas to life.'
    },
    {
      title: 'Cloud Solutions',
      description: 'Harness the power of the cloud with our cloud computing solutions.'
    },
    {
      title: 'Cloud Solutions',
      description: 'Harness the power of the cloud with our cloud computing solutions.'
    }
  ];

  const [showMore, setShowMore] = useState(Array(services.length).fill(false));

  const toggleDescription = (index) => {
    const newShowMore = [...showMore];
    newShowMore[index] = !newShowMore[index];
    setShowMore(newShowMore);
  };

  return (
    <div className='bg-white' id='offerpage'>
      <div className="container w-full py-4">
        <h1 className="my-5 text-center text-3xl text-blue-900 uppercase font-bold">What We Offer</h1>
        <div className="grid  m-auto md:grid-cols-2 lg:grid-cols-3 gap-5 py-2">
          <div className="">
            <img className="rounded-xl sm:justify-center w-100 h-100 py-4 " src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo7GqbvberdRu82t7VenQsYXBDRV9LfuBwkw&usqp=CAU' alt="Offer Page Image" />
          </div>
          <div className="md:col-span-1 lg:col-span-2">
            {services.map((service, index) => (
              <div key={index} className="m-2">
                <div className="card hover:shadow-2xl">
                  <div className="card-body hover:bg-blue-400 cursor-pointer" onClick={() => toggleDescription(index)}>
                    <div className="flex items-center">
                      <span className="mr-2">
                        {showMore[index] ? <FaAngleUp /> : <FaAngleDown />}
                      </span>
                      <h5 className="card-title">{service.title}</h5>
                    </div>
                    <p className="card-text" style={{ display: showMore[index] ? 'block' : 'none' }}>
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferPage;
