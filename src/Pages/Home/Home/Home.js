import React from 'react';
import Banner from '../Banner';
import ContactUs from '../ContactUs';
import InfoCards from '../InfoCards';
import MakeAppointment from '../MakeAppointment';
import Services from '../Services';
import Testimonial from '../Testimonial';
import Treatment from '../Treatment';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Treatment></Treatment>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;