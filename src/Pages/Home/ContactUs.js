import React from 'react';
import appointment from '../../assets/images/appointment.png';
const ContactUs = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} 
        className='text-center pt-14 pb-14'>
            <h3 className='text-xl text-primary font-bold' >Contact Us</h3>
            <h2 className='text-3xl text-white'>Stay connected with us</h2><br/>

            <input type="text" placeholder="Email Address" className="input input-bordered input-md w-full max-w-sm lg:max-w-md mb-5" /> <br/>
            <input type="text" placeholder="Subject" className="input input-bordered input-md w-full max-w-sm lg:max-w-md mb-5" /> <br/>

            <textarea type="text" placeholder="Your Message" className="input input-bordered input-lg w-full max-w-sm lg:max-w-md mb-5" /> <br/>
            
            <button className="btn btn-primary text-bold bg-gradient-to-r from-secondary to-primary w-[150px]">Submit</button>

        </section>
    );
};

export default ContactUs;