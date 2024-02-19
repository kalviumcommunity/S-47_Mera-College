import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div>
      <h1 className='heading'>MERA - COLLEGE</h1>
      <h5 className='heading2'>"Empowering Minds, Transforming Futures"</h5>
      <Link to="/signup"><button className='btn'>Sign Up</button></Link>
    </div>
  )
}

export default Home
