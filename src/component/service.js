import React from 'react'
import {motion} from 'framer-motion'
import {MdOutlineRoomService} from 'react-icons/md'
import {IoRestaurantOutline} from 'react-icons/io5'
import {FaSwimmingPool} from 'react-icons/fa'
import {GiCardKingClubs} from 'react-icons/gi'

function service() {
  return (
    <motion.div className='service'
    initial={{width : 0}}
    animate={{width : '100%'}}
    exit={{x : '100%',  transition :{duration : 0.1} }}
    >
      <div className='allf'>
        <h1>service</h1>
        <h2>about us</h2>
        <div className='aboutus'>
          <div className='fame'>
            <IoRestaurantOutline className='icones'/>
            <p>
            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page
            avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années
            1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser
            un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais
            s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié.
            Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant
            des passages du Lorem Ipsum, et, plus récemment,par son inclusion dans des applications
            de mise en page de texte, comme Aldus PageMaker.
            </p>
          </div>
          <div className='fame'>
            <MdOutlineRoomService className='icones'/>
            <p>
            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page
            avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années
            1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser
            un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais
            s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié.
            Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant
            des passages du Lorem Ipsum, et, plus récemment,par son inclusion dans des applications
            de mise en page de texte, comme Aldus PageMaker.
            </p>
          </div>
          <div className='fame'>
            <FaSwimmingPool className='icones'/>
            <p>
            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page
            avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années
            1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser
            un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais
            s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié.
            Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant
            des passages du Lorem Ipsum, et, plus récemment,par son inclusion dans des applications
            de mise en page de texte, comme Aldus PageMaker.
            </p>
          </div>
          <div className='fame'>
            <GiCardKingClubs  className='icones'/>
            <p>
            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page
            avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années
            1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser
            un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais
            s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié.
            Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant
            des passages du Lorem Ipsum, et, plus récemment,par son inclusion dans des applications
            de mise en page de texte, comme Aldus PageMaker.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default service