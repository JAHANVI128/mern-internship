import React from 'react'
import { useForm } from 'react-hook-form'

export const StudentRegister = () => {

    const {register,handleSubmit} = useForm();

    const submitHandler = (data) => {
        console.log(data);
    }
  return (
    <div>
        <h1>Student Registration</h1>

        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>First Name : </label>
                <input type="text" />
            </div>
            <div>
                <label>Last Name : </label>
                <input type="text" />
            </div>
            <div>
                <input type="submit" value="submit"/>
            </div>
        </form>
    </div>
  )
}
