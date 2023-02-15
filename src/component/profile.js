import React from 'react'
import {motion} from 'framer-motion'

function profile() {
  return (
    <motion.div
    initial={{width : 0}}
    animate={{width : '100%'}}
    exit={{x : '100%',  transition :{duration : 0.1} }}
    >profile</motion.div>
  )
}

export default profile