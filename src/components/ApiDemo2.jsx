import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ApiDemo2 = () => {

    const navigate = useNavigate();

    const {register,handleSubmit,formState:{errors}} = useForm()
    const submitHandler = async (data) => {

        console.log(data);
        const res = await axios.post("http://localhost:3001/user/user",data);
        console.log(res.data);
        if(res.data.flag === 1 && res.status ===201){
            // alert("User created successfully")
            // toast.success('🦄 Wow so easy!', {
            //     position: "bottom-right",
            //     autoClose: 3000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            //     theme: "colored",
            // });
            toast.success('User created successfully', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
        setTimeout(() => {
            navigate("/apidemo1");
        },3333)
    }
  return (
    <div>
        <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
        />
        <h1>Api Demo 2</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" {...register("name",{
                required:true
            })}></input>
        </div>
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" {...register("email",{
                required:true
            })}></input>
        </div>
        <div className="form-group">
            <label htmlFor="age">Age</label>
            <input type="number" className="form-control" {...register("age",{
                required:true
            })}></input>
        </div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" {...register("password",{
                required:true
            })}></input>
        </div>
        <div className="form-group">
            <input type="submit" className="btn btn-primary"></input>
        </div>
        </form>
    </div>
  )
}
