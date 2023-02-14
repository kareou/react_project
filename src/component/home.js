import React from 'react'
import {motion} from 'framer-motion'
import {FaInstagramSquare} from 'react-icons/fa'
import {AiFillTwitterSquare} from 'react-icons/ai'
import {TbBrandGmail} from 'react-icons/tb'
import {MdOutlineHotelClass} from 'react-icons/md'
import Slider from './slider'

function home() {
  return (
    <motion.div className='home'
    initial={{width : 0}}
    animate={{width : '100%'}}
    exit={{x : '100%',  transition :{duration : 0.2} }}
    >
      <h1 className='name'> <MdOutlineHotelClass className='biMeteor'/>hotel naem</h1>
      <div className='slag'>
        <h1>We</h1>
        <h1 className='dev'>Existe</h1>
        <h1>For Your comforts</h1>
      </div>
      <div className='icone'>
      <FaInstagramSquare className='discord'/>
      <AiFillTwitterSquare className='twitter'/>
      <TbBrandGmail className='roblox'/>
      </div>
      <Slider/>
    </motion.div>
  )
}

export default home