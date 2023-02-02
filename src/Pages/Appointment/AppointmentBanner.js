import React from 'react';
import { DayPicker } from 'react-day-picker';
import bannerBack from '../../assets/images/bg.png';
import chair from '../../assets/images/chair.png';


const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
    
    return (
        <div style={{
            background: `url(${bannerBack})`
        }} className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='Dentist Chair' />
                <div className='mr-6'>
                    
                    <DayPicker
                    mode='single'
                     selected ={selectedDate}
                     onSelect={setSelectedDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;