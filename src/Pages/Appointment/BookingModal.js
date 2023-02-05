import { format } from 'date-fns';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider';

const BookingModal = ({treatment, selectedDate,setTreatment,refetch}) => {
    const {_id,name, slots, price} = treatment;
    const {user} = useContext(AuthContext);
    const handleBooking=event=>{
        event.preventDefault();
        const slot = event.target.slot.value;
        const date = event.target.date.value;

        const booking={
            treatmentId: _id,
            treatment: name,
            date,
            slot,
            patient: event.target.email.value,
            patientName: event.target.name.value,
            phone: event.target.phone.value,
            price
        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setTreatment(null);
                    toast.success('Booking confirmed');
                    refetch();
                }
                else{
                    toast.error(data.message);
                }
            })
    }
    
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 className="text-lg font-bold">{name}</h3>
                <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-3'>
                        <input name="date" type="text" readOnly value={format(selectedDate, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name="slot" className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot,index)=><option key={index} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name="name" defaultValue={user?.displayName} readOnly className="input input-bordered w-full max-w-xs" />

                        <input type="text" name="email" defaultValue={user?.email} readOnly className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="phone" placeholder="Phone" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" placeholder="Type here" className="btn btn-secondary w-full max-w-xs" />
                    </form>
            </div>
            </div>
            
        </>
    );
};

export default BookingModal;