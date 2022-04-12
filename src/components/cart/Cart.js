import React from 'react';
import axios from 'axios';

function Cart() {
  const getTestData=async()=>{
    //get token from localstorage
    let token=localStorage.getItem("token");
    //add token to header of request
      let response=await axios.get('/user-api/test',{
        headers:{ Authorization: "Bearer "+ token}
      });
      let message=response.data.message;
     alert(message)
  }

  //get user
  const getUsers=async()=>{
    //get token from localstorage
    let token=localStorage.getItem("token");
    //add token to header of request
      let response=await axios.get('/user-api/getusers',{
        headers:{ Authorization: "Bearer "+ token}
      });
      let users=response.data.payload;
     console.log(users)
  }

  return (
    <div>
      {/* make request to pri=vate route 'test' */}
      <button className="btn btn-warning d-block mx-auto mt-5" onClick={getTestData}>
        Get Data from private route
      </button>

       {/* make request to pri=vate route 'test' */}
       <button className="btn btn-danger d-block mx-auto mt-5" onClick={getUsers}>
        Get users data
      </button>
    </div>
  )
}

export default Cart