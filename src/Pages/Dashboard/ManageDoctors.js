import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import ConfirmationModal from '../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../Shared/Loading/Loading';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);
    

    const {data: doctors,isLoading, refetch}= useQuery({
        queryKey: ['doctors'],
        queryFn: async ()=>{
            try{
                const res = fetch('http://localhost:5000/doctors',{
                    headers:{
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await (await res).json();
                return data;

            }
            catch(error){

            }
        }
    });
    
    const closeModal=()=>{
        setDeletingDoctor(null);
    }

    const handleDeleteDoctor = doctor=>{
        fetch(`http://localhost:5000/doctors/${doctor._id}`,{
            method: 'DELETE',
            headers:{
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                refetch();
                toast.success(`Doctor ${doctor.name} deleted successfully`);
            }
        })
    }

    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h3 className='text-3xl mb-5'>Doctor Management</h3>
            <h3 className='text-3xl mb-5'>Total Doctor: {doctors.length}</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Specialty</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            doctors?.map((doc,i)=><tr key={doc._id}>
                                <th>{i+1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-16 rounded-full">
                                            <img src={doc.image} alt=""/>
                                        </div>
                                    </div>
                                </td>
                                <td>{doc.name}</td>
                                <td>{doc.email}</td>
                                <td>{doc.specialty}</td>
                                <td>
                                    <label onClick={()=> setDeletingDoctor(doc)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingDoctor && <ConfirmationModal
                title={`Are you sure you want to delete?`}
                deletingDoctor={deletingDoctor}
                closeModal={closeModal}
                successAction={handleDeleteDoctor}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default ManageDoctors;