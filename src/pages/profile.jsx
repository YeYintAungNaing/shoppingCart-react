import React, {useContext} from 'react'
import Login from '../component/Login'
import { GlobalContext } from '../context/globalState';


function Profile() {

  const {validUser, setValidUser}  =useContext(GlobalContext);

  function handleLogOut(){
    setValidUser(false)
  }

  return (
    <div>
      {
        validUser ? (
          <div>
            <h1>Login successful</h1>
            <button onClick={handleLogOut}>Log out</button>
          </div>
          )
          : (<Login></Login>)
      }
    </div>
  )
}

export default Profile