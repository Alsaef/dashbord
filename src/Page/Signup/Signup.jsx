
import React, { useContext, useState } from 'react';
import './Signup.css'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Provider/AuthProvider';
const Singup = () => {
    const {createAccount,updateUserProfile}=useContext(AuthContext)
    const navigate=useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data =>{
        const {email,password,name,photo}=data
       
        createAccount(email,password)   .then((userCredential) => {

            const user = userCredential.user;
            console.log(user)
            updateUserProfile(name,photo).then(()=>{
              navigate('/profile')
            })
        }).catch((error)=>{
               console.log(error)
        })
           
           
    
    };


  return (
 <div className="login-container"> 
       <form   onSubmit={handleSubmit(onSubmit)} >
   
   <div className="login-form">
     <div className="form-group">
       <label>Name:</label>
       <input
         type="text"
         {...register("name", {required: true,})}
       />
     </div>
     <div className="form-group">
       <label>Email:</label>
       <input
         type="email"
         {...register("email", {required: true,})}
       />
     </div>
     <div className="form-group">
       <label>Password:</label>
       <input
         type="password"
         {...register("password", {required: true,})}
       />
     </div>
     <div className="form-group">
       <label>PhotoUrl:</label>
       <input
         type="text"
         {...register("photo", {required: true,})}
       />
     </div>
     <button className="login-button" >Login</button>
   </div>
 </form>
 <Link to='/'>   <p className='block'> You Have  Account Login</p></Link>
 </div>
  );
};

export default Singup;
