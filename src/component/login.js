import React from 'react'
import {useState} from 'react'

function Login() {
  const [test, settest] = useState(false)
  return (
    <div className='logall'>
      <button className='exit' onClick={() => settest(!test)}>X</button><br></br>
      <input type={"text"} placeholder="Firstname"></input><br></br>
      <input type={"text"} placeholder="Lastname"></input><br></br>
      <input type={'email'} placeholder='Email'></input><br></br>
      <input type={test ? "text" : "password"} placeholder='password' /><br></br>
      <input type={test ? "text" : "password"} placeholder='retry password'/><br></br>
      <button onClick={() => settest(!test)}>show password</button><br></br>
      <div className='action'>
        <button>cancel</button>
        <input type={'submit'}></input>
      </div>
    </div>
  )
}

export default Login