
import React, { useContext, useState } from 'react';
import './LoginPage.css'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { useForm } from 'react-hook-form';
const LoginPage = () => {
  const {login}=useContext(AuthContext)
  const navigate=useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data =>{
      const {email,password}=data
     
      login(email,password)   
      .then((userCredential) => {
          const user = userCredential.user;
          console.log(user)
          navigate('/profile')
      }).catch((error)=>{
             console.log(error)
      })
         
         
  
  };


  return (
<div>
<div className="login-container">
   
   <form onSubmit={handleSubmit(onSubmit)} className="login-form">
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
     <button className="login-button">Login</button>
   </form>
   <Link to='/singup'>   <p className='block'> You Have No Account SingUp</p></Link>
 </div>

</div>
  );
};

export default LoginPage;
