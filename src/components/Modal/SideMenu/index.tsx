import React from 'react'
import ReactDOM from 'react-dom'
import {motion} from 'framer-motion'

import './styles.css'

const animation = {
   hidden: {
      x: '100vh',
      opacity: 0
   },
   visible: {
      x: '0',
      y: '0',
      opacity: 1,
      transition:{
         duration: 0.2,
         type: 'spring',
         damping: 50,
         stiffness: 800
      }
   },
   exit: {
      x: '-100vh', 
      opacity: 0
   }
}

const Modal: any = ({open, onClose}: { open: boolean , onClose: (() => void)}) => {

   if(!open) return null
   const container  = document.getElementById("portal")

   return !container? null 
   : ReactDOM.createPortal(
      <>
         <div className="overlayDiv">
            <motion.div 
               className="Modal wrapper" 
               onMouseLeave={onClose}
               variants={animation}
               initial="hidden"
               animate="visible"
               exit="exit"
            >
               <header>
                  <img src='../assets/logo.svg' alt='foto de perfil' className='userModal'/>
               </header>
               <section>
                  COLOCAR AS ROUTES AQUI
               </section>
               <footer className="about-us">about-us</footer>
            </motion.div>
         </div>
      </>,
      container
   )
}

export default Modal