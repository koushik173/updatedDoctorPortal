import React from 'react';

const AppointmentOption = ({option, setTreatment}) => {
    const {name, slots,price} = option;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body text-center">
            <h2 className="card-title text-primary justify-center">{name}</h2>
            <p>
                {
                    slots.length? <span>{slots[0]}</span>:
                    <span className='text-red-500'>Try another day</span>
                }
            </p>
            <p className='uppercase'>{slots.length} {slots.length>1? 'spaces':'space'} available</p>
            <p><small className='font-bold-'>Price: ${price}</small></p>
            <div className="card-actions justify-center">
                <label 
                disabled={slots.length ===0}
                onClick={()=>setTreatment(option)}
                htmlFor="booking-modal" 
                className="btn btn-primary">Book Appointment</label>
            </div>
            </div>
      </div>
    );
};

export default AppointmentOption;