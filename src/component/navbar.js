import React from 'react'
import {Link} from 'react-router-dom'

function navbar() {
  return (
    <div>
        <nav>
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/profile">profile</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default navbar