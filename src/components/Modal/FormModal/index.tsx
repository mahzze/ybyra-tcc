import {motion} from 'framer-motion'

import './styles.css'


const animation = {
    hidden: {
        x: '-100vh',
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
        x: '100vh',
        opacity: 0
   }
}

type FormUser = {
   isOpen: boolean;
   close: () => void;
   user: string;
   setUser: (arg:string) => void;
}

const FormModal = ({isOpen, close , user, setUser}: FormUser) => {

   return isOpen === false ? null
   :(   
      <div className="overlayDiv">
         <motion.div 
            className="Modal wrapper"
            variants={animation}
            initial="hidden"
            animate="visible"
            exit="exit"
         >  
         <p>
            Antes de se cadastrar: você é uma pessoa física ou representa uma ONG?
         </p>
            <button onClick={() => {
               setUser("ONG");
               close();
               }}
            >
                  ONG
            </button>

            <button onClick={() => {
               setUser("Pessoa");
               close();
               }}
            >
               Pessoa
            </button>
         </motion.div>
      </div>
   );
}

export default FormModal;