import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {
    const { register,formState:{errors}, handleSubmit } = useForm();
    const {signIn} = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    if(token){
        navigate(from, {replace: true});
        console.log(token);
    }

    const handelLogin = data=>{
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
        .then(res=>{
            const user = res.user;
            setLoginUserEmail(data.email)
        })
        .catch(error => {
            setLoginError(error.message)
            console.log(error.message)
        })
    }
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className='w-96 p-7'>
                <h2 className=" text-2xl font-bold text-center">Login</h2>
                <form onSubmit={handleSubmit(handelLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input className="input input-bordered w-full max-w-xs" type="email" 
                        {...register("email", {
                            required: "Email Address is required"
                        })}/>
                        {errors.email && <p role="alert"><span className="label-text-alt text-red-500">{errors.email.message}</span></p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input className="input input-bordered w-full max-w-xs" type="password" 
                        {...register("password", {
                            required: "Password is required",
                            minLength: {value: 6, message: 'Password must be 6 characters or longer'}
                        })}/>
                        {errors.password && <p role="alert"><span className="label-text-alt text-red-500">{errors.password.message}</span></p>}
                        <label className="label"><span className="label-text">Forget Password?</span></label>

                    </div>
                    <input className='btn btn-dark w-full text-white' type="submit" value="Login" />
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                </form>
                <p>New to Doctors Portal? <Link className='text-info' to="/signUp">Create new account</Link></p>
                <div className='divider'>OR</div>
                <button className='btn btn-outline w-full'> CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;