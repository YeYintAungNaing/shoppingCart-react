import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/globalState';

export default function Login() {
    const [userName, setUserName] = useState("");
    const [userPassowrd, setUserPassword] = useState("");
    const {setValidUser}  =useContext(GlobalContext);

    function handleSUbmit(){
        if (userName === 'admin' && userPassowrd === 'password123'){
            setValidUser(true);
        }
        else{
            setValidUser(false);
            window.alert('incorrect infomation, pls try again')
        }
    }

  return (
    <div>
        <input
        placeholder='User name'
        value={userName}
        onChange={(event)=> setUserName(event.target.value)}>
        </input><br></br>
        <input
        placeholder='Password'
        value={userPassowrd}
        onChange={(event)=> setUserPassword(event.target.value)}>
        </input><br></br>
        <button onClick={handleSUbmit}>Login</button>
    </div>
  )
}
