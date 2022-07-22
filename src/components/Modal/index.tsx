import React from 'react'
import ReactDOM from 'react-dom'
import {motion} from 'framer-motion'

import './styles.css'

const animation = {
   hidden: {
      y: '-100vh',
      opacity: 0
   },
   visible: {
      y: '0',
      opacity: 1
   },
   exit: {
      y: '100vh',
      opacity: 0
   }
}

//tentei fazer o modal ser : null|JSX.Element mas falhei, dps arrumo isso
const Modal: any = ({open, onClose}: { open: boolean , onClose: (() => void)}) => {

   if(!open) return null
   const container  = document.getElementById("portal")

   return !container? null 
   : ReactDOM.createPortal(
      <>
         <div className="overlayDiv">
            <motion.div 
               className="Modal" 
               onMouseLeave={onClose}
               variants={animation}
            >
               <div>
                  <motion.button
                     whileHover={{scale: 1.1}}
                     whileTap={{scale: 0.9}}
                     onClick={onClose}
                  > Fechar </motion.button>
               </div>
               <div>
                  <img src='../assets/logo.svg' alt='foto de perfil' className='userModal'/>
               </div>
               <div></div>
            </motion.div>
         </div>
      </>,
      container
   )
}

export default Modal