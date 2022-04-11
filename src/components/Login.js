import {useEffect} from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import loginImg from "../images/login.svg";
import {useSelector,useDispatch} from 'react-redux';
import {userLogin} from '../slices/userSlice';

import {useNavigate} from 'react-router-dom'

function Login() {

 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

   //get user state from redux
  let {userObj,isError,isLoading,isSuccess,errMsg}=useSelector(state=>state.user);

  //get dispathc function to call action creator functions
  let dispatch=useDispatch();

  //get navigate functon to navigate programatically
  let navigate=useNavigate()

  //when login form is submitted
  const onFormSubmit = (userCredentialsObject) => {
    dispatch(userLogin(userCredentialsObject))
  };

  //this to be executed when either isSuccess or isError changed
  useEffect(() => {
    if (isSuccess) {
   
      navigate('/userdashboard');
    }
  
  }, [isSuccess,isError]);


  return (
    <div className="container">
      <p className="display-2 text-center text-primary">Login</p>

      <img
        src={loginImg}
        width="300px"
        className="d-sm-block d-none mx-auto"
        alt=""
      />
      <div className="row  ">
        <div className="col-12 col-sm-8 col-md-6  mx-auto">
          <Form  onSubmit={handleSubmit(onFormSubmit)}>
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
        </div>
      </div>
    </div>
  );
}

export default Login;
