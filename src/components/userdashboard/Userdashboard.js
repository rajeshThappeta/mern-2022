import React from 'react'
import {useSelector} from 'react-redux'

function Userdashboard() {

  let {userObj}=useSelector(state=>state.user)
  return (
    <>
    <img src={userObj.profileImg}  className='float-end m-5 profile-pic' alt="" />
    <div>Userdashboard</div>
    </>
  )
}

export default Userdashboard