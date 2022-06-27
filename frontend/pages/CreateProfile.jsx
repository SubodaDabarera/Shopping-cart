import React, { useState } from 'react'
import { userRegistration } from '../api/CustomerApi';

const CreateProfile = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('')

    const onSubmitClick = () => {
        userRegistration({name, email, password, role}).then(() => console.log("User created"))
    }

  return (
    <div>
        <h2 style={{textAlign: "center"}}>Create Your Profile</h2>

        <div style={{textAlign: "center"}}>
            <div style={{margin: "1rem"}}>
                <span>Enter Your Name:</span><br/>
                <input type="text" placeholder='Name...' onChange={(event) => setName(event.target.value)}/>
            </div>
            <div style={{margin: "1rem"}}>
                <span>Enter Email:</span><br/>
                <input type="email" placeholder='Email...' onChange={(event) => setEmail(event.target.value)}/>
            </div>
            <div style={{margin: "1rem"}}>
                <span>Enter Password:</span><br/>
                <input type="password" placeholder='Password...' onChange={(event) => setPassword(event.target.value)}/>
            </div>
            <div style={{margin: "1rem"}}>
                <span>Select Role:</span><br/>

                <span>Customer </span>
                <input type="radio" value='Customer' name='role' onChange={(event) => setRole(event.target.value)}/><br/>

                <span>Trader </span>
                <input type="radio" value='Trader' name='role' onChange={(event) => setRole(event.target.value)}/>
            </div>
            <div style={{margin: "1rem"}}>
                
                <button onClick={onSubmitClick}>Click to Submit</button>
            </div>
        </div>
    </div>
  )
}

export default CreateProfile