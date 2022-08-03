import {motion, AnimatePresence} from 'framer-motion';
import ReactDOM from 'react-dom';

import './styles.css';

const animation = {
  hidden: {
    y: '-100vh',
    opacity: 0
  },
  visible: {
    x: '0',
    y: '0',
    opacity: 1,
    transition:{
      duration: 0.4,
      type: 'spring',
      damping: 50,
      stiffness: 800
    }
  },
  exit: {
    y: '100vh',
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
  const portal = document.getElementById("root");
  if (portal === null || isOpen === false) return null


  return(  
    ReactDOM.createPortal(
      <>
        <div className="overlayDiv">
          <motion.div 
            className="FormModal"
            variants={animation}
            initial="hidden"
            animate="visible"
            exit="exit"
          >  
          <p>
            Antes de se cadastrar: você é uma pessoa física ou representa uma ONG?
          </p>
          <div className="wrapper">

            <button onClick={() => {
              setUser("ONG");
              close();
            }}
            >
              ONG
            </button>
            <div></div>
            <button onClick={() => {
              setUser("Pessoa");
              close();
            }}
            >
              Pessoa
            </button>
          </div>
          </motion.div>
        </div>
      </>
    , portal));
}

export default FormModal;