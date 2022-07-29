import React from 'react';
import "./User.css";
const User = ({user,selectUser}) => {
  // console.log("user1",{user});
  return (
    <div className='user_wrapper' onClick={()=>selectUser(user)}>
        <div className='user_info'>
          <div className='user_detail'>
            <div className='avatar'></div>
            <h4>{user.name}</h4>
          </div>
          <div className={`user_status ${user.isOnline?'online':'offline'}`}></div>
        </div>
    </div>
  )
}

export default User;