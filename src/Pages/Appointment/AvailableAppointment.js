import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Loading from '../Shared/Loading/Loading';
import AppointmentOption from './AppointmentOption';
import BookingModal from './BookingModal';

const AvailableAppointment = ({selectedDate}) => {
    const [treatment,setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');

    // const {data: appointmentOptions =[]} = useQuery({
    //     queryKey: ['appointmentOptions'],
    //     queryFn: ()=> fetch('http://localhost:5000/appointmentOptions')
    //     .then(res=> res.json())
    // });
    const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`);
            const data = await res.json();
            return data
        }
    });

    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <section className='my-16'>
            <h2 className='text-center text-primary font-bold '>Available Appointment on {format(selectedDate,'PP')}</h2>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
                {
                    appointmentOptions.map(option=> <AppointmentOption
                        key={option._id}
                        option={option}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                treatment={treatment}
                selectedDate={selectedDate}
                setTreatment={setTreatment}
                refetch={refetch}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointment;