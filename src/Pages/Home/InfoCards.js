import React from 'react';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import InfoCard from './InfoCard';

const InfoCards = () => {
    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Open 9.00am to 5.00pm everyday',
            icon: clock,
            bgClass: 'bg-primary'
        },
        {
            id: 2,
            name: 'Our Locations',
            description: 'Open 9.00am to 5.00pm everyday',
            icon: marker,
            bgClass: 'bg-[#3A4256]'
        },
        {
            id: 3,
            name: 'Contact Us',
            description: 'Open 9.00am to 5.00pm everyday',
            icon: clock,
            bgClass: 'bg-primary'
        }
    ]
    return (
        <div className='grid mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                cardData.map(card=><InfoCard
                key={card.id}
                card={card}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;