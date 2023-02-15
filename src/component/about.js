import React from 'react'
import {motion} from 'framer-motion'

function about() {
  return (
    <motion.div
    initial={{width : 0}}
    animate={{width : '100%'}}
    exit={{x : '100%',  transition :{duration : 0.2} }}
    >about</motion.div>
  )
}

export default about