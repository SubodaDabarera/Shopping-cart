import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div style={{textAlign: 'center', marginTop: '4rem'}}>
        <Link to = '/profile' style={{padding: '2rem',margin: '0.5rem', backgroundColor: '#cccccc', textDecoration: "none"}}>
            Create Profile
        </Link>
        <Link to = '/login' style={{padding: '2rem',margin: '0.5rem', backgroundColor: '#cccccc', textDecoration: "none"}}>
            LogIn
        </Link>
    </div>
  )
}

export default Home