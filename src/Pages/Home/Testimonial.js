import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from '../Review';

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
             name: 'Winson Herry',
             reviews: 'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. In deleniti eaque aut repudiandae et a id nisi.',
             location: 'california',
             img: people1
        },
        {
            _id: 2,
             name: 'Winson Herry',
             reviews: 'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. In deleniti eaque aut repudiandae et a id nisi.',
             location: 'california',
             img: people2
        },
        {
            _id: 3,
             name: 'Winson Herry',
             reviews: 'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. In deleniti eaque aut repudiandae et a id nisi.',
             location: 'california',
             img: people3
        }
    ]
    return (
        <section className='my-16'>
            <div className='flex justify-between'>
                <div>
                    <p className='text-primary font-bold text-2xl'>Testimonials</p>
                    <h3 className='text-3xl'>What Our Patients Says</h3>
                </div>
                <div>
                    <img src={quote} className='w-24 lg:w-48' alt=""/>
                </div>
            </div>
            <div className='py-5 grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10'>
                {
                    reviews.map(rv=><Review
                    key={rv._id}
                    review={rv}
                    ></Review>)
                }
            </div>
            
        </section>
    );
};

export default Testimonial;