import React, { useState } from 'react';
import Prototypes from 'prop-types';
import '../Dashboard/Dashboard';
import './Login.css';


async function loginUser(credentials){
  return fetch('http://localhost:8080/Login', {
    method: 'Post',
    headers: {
      'Content-Type': 'application/json'
    },

    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}


export default function Login({setToken}) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  console.log(username);

  const handleSubmit = async e => { 
    // create a form submit handler called handleSubmit that will call 
    // loginUser with the username and password
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return(
    <div className = "login-wrapper">
      <h1>Please Log In</h1>

      <form onSubmit={handleSubmit} action= "/Dashboard">
        <label>
          <p>User Name</p>
          <input type="text" onChange = {e => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange = {e => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit" >Submit</button>
        </div>
      </form>
    </div>
  )
}

Login.prototype = {
  setToken: Prototypes.func.required
}