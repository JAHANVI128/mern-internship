import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const UserLogin = () => {

    var navigate = useNavigate();

    const {register,handleSubmit,formState:{errors}} = useForm();
    const loginHandler = async (data) => {
        try{
            const res = await axios.post("http://localhost:3001/user/login",data);
            console.log(res.data);
            if(res.data.flag === 1){
                // alert("Login successfully done");

                toast.success('Login successfully done', {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

                localStorage.setItem("id:",res.data.data._id);
                console.log(res.data.data.userrole);

                if(res.data?.data?.userrole.name === "Tester"){
                    navigate("/tester");
                } else if (res.data?.data?.userrole.name === "Developer"){
                    navigate("/developer");
                }
            }
        }catch(err){
            // alert("Invalid credentials");

            toast.error('Invalid credentials', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }

  return (
    <div>

        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
        />

        <ToastContainer
            position="top-right"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />

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
