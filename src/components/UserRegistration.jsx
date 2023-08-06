import React from 'react'
import { useForm } from 'react-hook-form'

export const UserRegistration = (props) => {

    const {register,handleSubmit,formState:{errors}} = useForm()

    const submitHandler = (data) => {
        props.add(data)
    }
  return (
    <div>
        <div>
            <h1>User Registration</h1>
        </div>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>Id</label>
                <input type="text" {...register("id")}></input>
            </div>
            <div>
                <label>Name</label>
                <input type="text" {...register("name")}></input>
            </div>
            <div>
                <label>Age</label>
                <input type="text" {...register("age")}></input>
            </div>
            <div>
                <input type="submit" value="submit"></input>
            </div>
        </form>
    </div>
  )
}
