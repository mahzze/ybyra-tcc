import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'
import {useSpring, animated} from 'react-spring'

//tentei fazer o modal ser : null|JSX.Element mas falhei, dps arrumo isso
const Modal: any = ({open, onClose}: { open: boolean , onClose: (() => void)}) => {
   
   
   const animation = useSpring({
     // transition: '700ms ',
      transform: open? 'translate(50%,50%)' : 'translate(-100%,100)'
   })
   
   if(!open) return null
   const container  = document.getElementById("portal")

   return !container? null 
   : ReactDOM.createPortal(
      <>
         <div className="overlayDiv">
            <animated.div style={animation}>
            <div className="Modal" onMouseLeave={onClose}>
               <div>
                  <button > Fechar </button>
               </div>
               <div>
                  <img src='../assets/logo.svg' alt='foto de perfil' className='userModal'/>
               </div>
               <div></div>
            </div>
            </animated.div>
         </div>
      </>,
      container
   )
}

export default Modal