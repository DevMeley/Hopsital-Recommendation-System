import React from 'react'
import "../App.css"
import { Link } from 'react-router'

function Nav() {
  return (
    <div className='Nav'>
        <h3>Hospital Recommendation</h3>
        <Link to={'/'}className='Link'><p>Home</p></Link>
        
    </div>
  )
}

export default Nav