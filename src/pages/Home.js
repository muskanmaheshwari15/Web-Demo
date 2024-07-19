import React from 'react';
import Clients from '../components/Clients';
import Cta from '../components/Cta';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Portfolio from '../components/Portfolio';
import Services from '../components/Home_services';
import Midpage from '../components/Midpage';
import Faq from '../components/Faq';
import Products from './Products';
import ProductTab from './ProductTab';
import Wdj from '../components/Wdj';
import OfferPage from '../components/OfferPage';



const Home = () => {
    return (
        <>
        <div className='section' >
            <Hero />
            <Intro />
            <Services />
            <Wdj/>
            <Midpage/>
            <Portfolio />
            <Clients />
            <ProductTab/>
            <OfferPage/>
            <Cta/>
            
            <Faq/>
            
        </div>
       
        </>

    )
}

export default Home;

