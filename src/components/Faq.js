import React from 'react';
import faq from "../images/faq.png";

const Faq = () => {
  return (
    <div className="faq-container">
      <section id='arisezenfaq' className='container w-10/12'>
        <h1 className='my-5 text-center text-3xl text-blue-900 uppercase font-bold'>Frequently Asked Questions about AriseZen:</h1>
        <div className='row  py-2 md:px-8 items-center justify-between'>
         
          <div className=' col-md-6  text-left items-center box-border '>
            <div className='p-1'>
            <details className='border-box card-body hover:bg-blue-400 cursor-pointer border-2  '>
              <summary>What is AriseZen?</summary>
              <p>
                AriseZen is a holistic wellness company dedicated to promoting well-being
                and mindfulness. Our mission is to provide tools and resources that empower
                individuals to achieve balance in their physical, mental, and spiritual lives.
              </p>
            </details> 

            </div>

            <div className='p-1'>
               
            <details  className='border-box card-body hover:bg-blue-400 cursor-pointer border-2 '>
              <summary>What services does AriseZen offer?</summary>
              <p>
                AriseZen offers a range of services, including meditation classes, yoga
                sessions, wellness retreats, and personalized coaching. We strive to create
                a supportive community for individuals seeking a mindful and balanced lifestyle.
              </p>
            </details>

            </div>

            <div className='p-1'>
              
            <details  className='border-box card-body hover:bg-blue-400 cursor-pointer border-2 '>
              <summary>How can I benefit from AriseZen's programs?</summary>
              <p>
                Participating in AriseZen's programs can help you reduce stress, enhance
                self-awareness, and cultivate a sense of inner peace. Our experienced
                instructors and curated content aim to guide you on a transformative journey
                towards overall well-being.
              </p>
            </details>

            </div>

            <div className='p-1'>
              
            <details  className='border-box card-body hover:bg-blue-400 cursor-pointer border-2 '>
              <summary>Is AriseZen suitable for beginners?</summary>
              <p>
                Yes, AriseZen welcomes individuals of all experience levels. Whether you
                are a beginner or an experienced practitioner, our programs are designed to
                accommodate varying levels of expertise. Our inclusive approach encourages
                everyone to embrace the benefits of mindfulness.
              </p>
            </details>

            </div>
           
          </div>
           <div className='col-md-6 -pt-3'>
            <img alt='card img' className='rounded-md  w-100 h-100 md:w-10/12' src={faq} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Faq;
