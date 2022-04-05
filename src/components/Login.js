import React from 'react';
import {useForm} from 'react-hook-form';
import {Form,Button} from 'react-bootstrap';


function Login() {

  const {register,handleSubmit,formState:{errors}}=useForm()


  const onFormSubmit=(userCredentialsObject)=>{

    console.log(userCredentialsObject)
  }

  return (
    <>
    <p className='display-2 text-center text-primary'>Login</p>

    
      <Form className="w-50 mx-auto" onSubmit={handleSubmit(onFormSubmit)}>
        {/* username */}
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            {...register("username", { required: true })}
          />
          {/* validation error message for username */}
          {errors.username && (
            <p className="text-danger">* Username is required</p>
          )}
        </Form.Group>

        {/* password */}
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            {...register("password", { required: true })}
          />
          {/* validation error message for password */}
          {errors.password && (
            <p className="text-danger">* Password is required</p>
          )}
        </Form.Group>

        <Button variant="secondary" type="submit">
          Login 
        </Button>
      </Form>
    </>
  )
}

export default Login