import React, { useEffect, useState } from 'react'
import { Link, useNavigate   } from 'react-router-dom';
import { userLogIn } from '../api/CustomerApi';

const LogIn = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')
    const [loginSuccess, setLoginSuccess] = useState(false)
    const [userData, setUserData] = useState([])

    const handleLogIn = async() => {
        async function logInTemp() {
            await userLogIn({email, password}, setUserData)
                .then(() => {
                    console.log('Logged in success')
                    
                })
        }
        await logInTemp();

        if(JSON.parse(localStorage.getItem('user'))){
            navigate('/allItems');
        }

        
    }

  return (
    <div>
        <h2 style={{textAlign: "center"}}>LogIn</h2>

        <div style={{textAlign: "center"}}>
            <div style={{margin: "1rem"}}>
                <span>Enter Your Email:</span><br/>
                <input type="email" placeholder='Email...' onChange={(event) => setEmail(event.target.value)}/>
            </div>
            <div style={{margin: "1rem"}}>
                <span>Enter Password:</span><br/>
                <input type="password" placeholder='Password...' onChange={(event) => setPassword(event.target.value)}/>
            </div>
            {/* <div style={{margin: "1rem"}}>
                <span>Select Role:</span><br/>
                <span>Customer </span>
                <input type="radio" value='Customer' name='role' onChange={(event) => setRole(event.target.value)}/><br/>

                <span>Trader </span>
                <input type="radio" value='Trader' name='role' onChange={(event) => setRole(event.target.value)}/>
            </div> */}
            <div>
                <button onClick={handleLogIn}>LogIn</button>
            </div>
            <br/>
            Or
            <Link to = '/profile'>
                <p>Register Now</p>
            </Link>
            
        </div>
    </div>
  )
}

export default LogIn