import React from 'react'
import {motion} from 'framer-motion'

function service() {
  return (
    <motion.div
    initial={{width : 0}}
    animate={{width : '100%'}}
    exit={{x : '100%',  transition :{duration : 0.2} }}
    >service</motion.div>
  )
}

export default service