import React from 'react';
const Review = ({review}) => {
    const {name, img, location, reviews} = review;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{reviews}</p>
                <div className='flex my-5'>
                    <div className="w-16 rounded-full ring ring-primary mr-5">
                        <img src={img} alt=''/>
                    </div>
                    <div>
                        <p className='text-xl'>{name}</p>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;