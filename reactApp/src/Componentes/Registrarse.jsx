import React from 'react';
import { useNavigate } from 'react-router-dom';

const Registrarse = () => {
  const navigate = useNavigate()
  return (
    <div>
    <h1>REGISTER</h1>
      <form>
      <label>Name </label>
      <input placeholder="First Name" type="name"/><br/>
      <input placeholder="Last Name" type="last_name"/>
      <br/>
      <label>Birthdate</label>
      <input placeholder="Insert Date" type="date"/> <br/>

      <label>Email </label>
      <input placeholder="Email Address" type="email" required/> <br/>

      <label>Password </label>
      <input placeholder="Password " type="password"/> <br/>

      <label>Password confirmation </label>
      <input placeholder="Password confirmation" type="password"/> <br/>
      <button>Sign Up</button>
      </form>
      <button onClick={()=>navigate('/')}>Back</button> 
    </div>
  )
}

export default Registrarse
