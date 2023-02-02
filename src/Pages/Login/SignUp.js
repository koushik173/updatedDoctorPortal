import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import useToken from '../../hooks/useToken';
const SignUp = () => {
    const {register,handleSubmit,formState:{errors}} = useForm();
    const {createUser, updateUser} = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const navigate = useNavigate();
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail)
    
    if(token){
        navigate('/')
    }
    const handelSignUp = (data)=>{
        
        setSignUpError('');
        createUser(data.email, data.password)
        .then(result=>{
            const user = result.user;
            const userInfo = {
                displayName: data.name
            }
            
            updateUser(userInfo)
            .then(()=>{
                saveUser(data.name, data.email);
            })
            .catch(err=>console.log(err))
            toast('User Created successfully.')
        })
        .catch(error => {
            setSignUpError(error.message)
            console.log(error)})
    }

    const saveUser =(name, email) =>{
        const user = {name, email};
        
        fetch('http://localhost:5000/users',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            setCreatedUserEmail(email);
        })
    }


    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className='w-96 p-7'>
                <h2 className=" text-2xl font-bold text-center">Sign Up</h2>
                <form onSubmit={handleSubmit(handelSignUp)}>
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
                        <label className="label"><span className="label-text">Password</span></label>
                        <input className="input input-bordered w-full max-w-xs" type="password"
                        {...register("password",{
                            required: "Password is required",
                            minLength: {value: 6, message: 'Password must be 6 characters or longer'}
                        })}/>
                        {errors.password && <p role="alert"><span className="label-text-alt text-red-500">{errors.password.message}</span></p>}

                    </div>
                    
                    <input className='btn btn-dark w-full text-white mt-4' type="submit" value="Sign Up"/>
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>
                <p>Already have an account! <Link className='text-info' to="/login">Please Login</Link></p>
                <div className='divider'>OR</div>
                <button className='btn btn-outline w-full'> CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;