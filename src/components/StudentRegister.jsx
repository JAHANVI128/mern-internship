import React from 'react'
import { useForm } from 'react-hook-form'

export const StudentRegister = () => {

    const {register,handleSubmit,formState:{errors}} = useForm({

        // mode:"onBlur"
        mode:"onChange"
    });

    console.log("error....",errors);

    const submitHandler = (data) => {
        console.log(data);
    }

    const validationSchema = {
        fname:{
            required:{
                value:true,
                message:"First Name is required"
            }
        },
        lname:{
            required:{
                value:true,
                message:"Last Name is required"
            },
            minLength:{
                value:3,
                message:"Last Name should be minimum 3 characters"
            }
        },
        gender:{
            required:{
                value:true,
                message:"Gender is required"
            }
        }
    }
  return (
    <div>
        <h1>Student Registration</h1>

        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>First Name : </label>
                {/* <input type="text" {...register("fname",{required:true})}/> */}
                <input type="text" {...register("fname",validationSchema.fname)}/>
                {errors.fname && <p>{errors.fname.message}</p>}
            </div>
            <div>
                <label>Last Name : </label>
                <input type="text" {...register("lname",validationSchema.lname)}/>
                {errors.lname && <p>{errors.lname.message}</p>}
            </div>
            <div>
                <label>Gender</label>
                <br></br>
                MALE:<input type="radio" value="male" name="gender" {...register("gender",validationSchema.gender)}></input>
                <br></br>
                FEMALE:<input type="radio" value="female" name="gender" {...register("gender",validationSchema.gender)}></input>
                {errors.gender && <p>{errors.gender.message}</p>}
            </div>
            <div>
                <label>Skills</label>
                <br></br>
                <input type="checkbox" value="java" {...register("skills")}></input>Java
                <input type="checkbox" value="react" {...register("skills")}></input>React
                <input type="checkbox" value="angular" {...register("skills")}></input>Angular
            </div>
            <div>Stream</div>
            <select>
                <option selected disabled hidden >Select Stream</option>
                <option value="CSE">CSE</option>
                <option value="IT">IT</option>
                <option value="EE">EE</option>
            </select>
            <div>
                <input type="submit" value="submit"/>
            </div>
        </form>
    </div>
  )
}
