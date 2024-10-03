import React from 'react'

const Contacto = () => {


  
  return (
    <div>
    <form>
    <h1>Contacto</h1>
    <imput placeholder='First Name' type='name'/><br/>
    <input placeholder='Last Name' type='last_name'/><br/>
    <label>Email </label><br/>
    <input placeholder="Email Address" type="email"/> <br/>
    <label>Message</label>
    <imput placeholder='Message' type='text'/><br/>
    <button>SEND</button>
    </form>
    </div>
  )
}

export default Contacto
