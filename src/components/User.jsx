import React from 'react';
import "./User.css";
const User = ({user,selectUser}) => {
  // console.log("user1",{user});
  return (
    <div className='user_wrapper' onClick={()=>selectUser(user)}>
        <div className='user_info'>
          <div className='user_detail'>
            <img src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt=""className='avatar' />
            <h4>{user.name}</h4>
          </div>
          <div className={`user_status ${user.isOnline?'online':'offline'}`}></div>
        </div>
    </div>
  )
}

export default User;