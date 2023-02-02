import React from 'react';
import cavity from '../../assets/images/cavity.png';
import fluoride from '../../assets/images/fluoride.png';
import whitening from '../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const servicesData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Services We ProvideServices We ProvideServices We ProvideServices We Provide',
            img: fluoride
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'Services We ProvideServices We ProvideServices We ProvideServices We Provide',
            img: cavity
        },
        {
            id: 3,
            name: 'Teeth whitening',
            description: 'Services We ProvideServices We ProvideServices We ProvideServices We Provide',
            img: whitening
        }
    ]
    return (
        <div className='mt-16 '>
            <div className='text-center'>
                <h2 className='text-primary uppercase text-xl font-bold'>Our Services</h2>
                <h2 className='text-3xl'>Services We Provide</h2> 
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    servicesData.map(sr=><Service
                    key={sr.id}
                    service={sr}
                    ></Service>)
                }
                
            </div>
        </div>
    );
};

export default Services;