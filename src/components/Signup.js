import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { MdLogin } from "react-icons/md";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onFormSubmit = (userObj) => {
    //http post req
    axios
      .post("http://localhost:4000/user-api/create-user", userObj)
      .then((response) => {
        alert(response.data.message);
        //if user created
        if (response.data.message === "New User created") {
          //navigate to login
          navigate("/login");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Something went wrong in creating user");
      });
  };

  return (
    <>
      <div className="display-2 text-center text-info">Signup</div>
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

        {/* email */}
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            {...register("email", { required: true })}
          />
          {/* validation error message for password */}
          {errors.email && <p className="text-danger">* Email is required</p>}
        </Form.Group>

        {/* city */}
        <Form.Group className="mb-3">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter city"
            {...register("city", { required: true })}
          />
          {/* validation error message for password */}
          {errors.city && <p className="text-danger">* City is required</p>}
        </Form.Group>

        <Button variant="primary" type="submit">
          Signup <MdLogin />
        </Button>
      </Form>
    </>
  );
}

export default Signup;
