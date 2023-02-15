import React from 'react'
import { Link } from 'react-router-dom'
import Loging from './login'
import { useState } from 'react'
import Modal from 'react-modal'

function Navbar() {

  const bg = {
    overlay: {
      background: "#FFFF00"
    }
  };
  const [show, setshow] = useState(false)

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
        <button className='btn' onClick={() => setshow(true)}>login</button>
      </ul>
      <Modal      style={{
              content: {
                backgroundColor: '#4b4b4b',
                borderRadius : '1rem'
                }}}
                 closeTimeoutMS={2000} isOpen={show} onRequestClose={() => setshow(false)} center styles={bg}>
        <Loging className='log' />
      </Modal>
    </div>
  )
}

export default Navbar