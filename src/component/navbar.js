import React from 'react'
import { Link } from 'react-router-dom'

function navbar() {
  return (
    <div className='navbar'>
      <ul>
        <li>
        <Link className='ho' to='/'>home</Link>
        </li>
        <li>
        <Link className='prof' to='/profile'>profile</Link>
        </li>
        <li>
        <Link className='abo' to='/about'>about</Link>
        </li>
        <li>
        <Link className='serv' to='/service'>service</Link>
        </li>
      </ul>
    </div>
  )
}

export default navbar