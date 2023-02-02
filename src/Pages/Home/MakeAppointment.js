import React from 'react';
import appointment from '../../assets/images/appointment.png';
import doctor from '../../assets/images/doctor.png';
import PrimaryButton from '../../Components/PrimaryButton';
const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} 
        className='flex justify-center items-center mt-20'>
            <div className='flex-1 hidden lg:block'>
                <img className='md:mt-[-120px]' src={doctor} alt=""/>
            </div>
            <div className='flex-1 px-5'>
                <h3 className='text-xl text-primary font-bold' >Appointment</h3>
                <h2 className='text-4xl text-white'>Make an Appointment Today</h2>
                <p className='text-white py-5'>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <PrimaryButton>Appointment</PrimaryButton>
            </div>
            
        </section>
    );
};

export default MakeAppointment;