import React from 'react';
import treatment from '../../assets/images/treatment.png';

const Treatment = () => {
    return (
        <>
            <div className="hero min-h-screen bg-base-100 ">
                <div className="hero-content flex-col lg:flex-row grid lg:grid-cols-2">
                    <div className='lg:flex justify-center'>
                        <img src={treatment} className=" max-w-sm rounded-lg shadow-2xl" alt=''/>
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary text-bold bg-gradient-to-r from-primary to-secondary">Get Started</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Treatment;