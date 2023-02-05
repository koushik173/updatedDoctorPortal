import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';

const AllUsers = () => {
    const {data: users=[], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async()=>{
            const res = await fetch(`http://localhost:5000/users`);
            const data = await res.json();
            return data;
        }
    })

    const handleMakeAdmin = id =>{
         fetch(`http://localhost:5000/users/admin/${id}`,{
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
         })
         .then(res=>res.json())
         .then(data=>{
            if(data.modifiedCount > 0){
                toast.success('Make admin successful.')
                refetch();
            }
         })
    }

    return (
        <div>
            <h2 className='text-3xl'>All Users</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>email</th>
                        <th>Admin</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((a,i)=><tr key={a._id}>
                                <th>{i+1}</th>
                                <td>{a.name}</td>
                                <td>{a.email}</td>
                                <td>{ a?.role !== 'admin' && <button onClick={()=>handleMakeAdmin(a._id)} className='btn btn-info '>Make Admin</button>}</td>
                                <td><button className='btn btn-secondary text-white'>DELETE</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;