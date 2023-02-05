import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';

const AddDoctor = () => {
    const { register,formState:{errors}, handleSubmit } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate();
    
    
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
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method : 'POST',
            body: formData
        })
        .then(res=> res.json())
        .then(imgData=>{
            if(imgData.success){
                const doctor ={
                    name: data.name,
                    email: data.email,
                    specialty: data.specialty,
                    image: imgData.data.url
                }
                
                fetch('http://localhost:5000/doctors',{
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(doctor)
                })
                .then(res=> res.json())
                .then(result=>{
                    if(result.acknowledged){
                        toast.success(`${data.name} is added successfully`);
                        navigate('/dashboard/manageDoctors')
                    }
                })
            }
        })
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
                        {...register("image",{
                            required: "Photo is required"
                        })}/>
                        {errors.image && <p role="alert"><span className="label-text-alt text-red-500">{errors.image.message}</span></p>}
                    </div>

                    <input className='btn btn-dark w-full text-white mt-4' type="submit" value="add doctor"/>
                    
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;