import React from 'react'
import { Link } from 'react-router-dom'

function navbar() {
  return (
    <div>
      <ul>
        <li>
        <Link to='/'>home</Link>
        </li>
        <li>
        <Link to='/profile'>profile</Link>
        </li>
        <li>
        <Link to='/about'>about</Link>
        </li>
        <li>
        <Link to='/service'>service</Link>
        </li>
      </ul>
    </div>
  )
}

export default navbar