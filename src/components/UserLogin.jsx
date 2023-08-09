import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'

export const UserLogin = () => {

    const {register,handleSubmit,formState:{errors}} = useForm();
    const loginHandler = async (data) => {
        const res = await axios.post("http://localhost:3001/user/login",data);
        console.log(res.data);
    }

  return (
    <div>
        <form onSubmit={handleSubmit(loginHandler)}>
            <div className='form-group'>
                <label>Username</label>
                <input type="text" className="form-control" {...register("email",{required:true})}></input>
                {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div className='form-group'>
                <label>Password</label>
                <input type="password" className="form-control" {...register("password",{required:true})}></input>
                
            </div>
            <div>
                <input type="submit" className="btn btn-primary"></input>
            </div>
        </form>
    </div>
  )
}
