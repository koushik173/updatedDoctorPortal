import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import Loading from '../Shared/Loading/Loading';

const AddDoctor = () => {
    const { register,formState:{errors}, handleSubmit } = useForm();

    const {data: specialties, isLoading} = useQuery({
        queryKey:['specialty'],
        queryFn: async()=>{
            const res = await fetch('http://localhost:5000/appointmentSpecialty');
            const data = await res.json();
            return data;
        }
    })
    if(isLoading){
        return <Loading></Loading>
    }

    const handelAddDoctor = data=>{
        console.log(data);
    }
    return (
        <div className=''>
            <div className='w-96 p-7'>
                <h2 className=" text-2xl font-bold text-center">Add A Doctor</h2>
                <form onSubmit={handleSubmit(handelAddDoctor)}>
                    
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input className="input input-bordered w-full max-w-xs" type="text"
                        {...register("name",{
                            required: "Name is required"
                        })}/>
                        {errors.name && <p role="alert"><span className="label-text-alt text-red-500">{errors.name.message}</span></p>}
                    </div>
                    
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input className="input input-bordered w-full max-w-xs" type="email" 
                        {...register("email",{
                            required: "Email is required"
                        })}/>
                        {errors.email && <p role="alert"><span className="label-text-alt text-red-500">{errors.email.message}</span></p>}
                    </div>
                    
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Specialist</span></label>
                        <select {...register("specialty")} className="select input-bordered w-full max-w-xs">
                            <option disabled selected>Please select a Specialty </option>
                            {
                                specialties?.map(sp=><option
                                key={sp._id}
                                value={sp.name}
                                >{sp.name}</option>)
                            }
                        </select>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Select Doctor Photo</span></label>
                        <input className="input w-full max-w-xs" type="file"
                        {...register("img",{
                            required: "Photo is required"
                        })}/>
                        {errors.img && <p role="alert"><span className="label-text-alt text-red-500">{errors.img.message}</span></p>}
                    </div>

                    <input className='btn btn-dark w-full text-white mt-4' type="submit" value="add doctor"/>
                    
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;