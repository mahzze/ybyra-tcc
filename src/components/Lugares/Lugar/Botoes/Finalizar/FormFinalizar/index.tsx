import './styles.css'
import { motion } from 'framer-motion';
import ReactDOM from 'react-dom';
import { useState } from 'react';

const animation = {
  hidden: {
    y: '-100vh',
    opacity: 0
  },
  visible: {
    x: '0',
    y: '0',
    opacity: 1,
    transition: {
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

type Params = {
  isOpen: boolean,
  close: () => void,
  clique: () => void,
  arvores: string,
  setArvores: (arg: string) => void
}

const portal = document.getElementById("portal");

const FormFinalizar = ({ isOpen, close, clique, arvores, setArvores }: Params) => {
  
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <section className="overlay">
      <motion.section className="modal">
        <label>Digite a quantia de árvores plantadas
          <input id="inpArvores" type="number" onChange={(e) => setArvores(e.target.value)} />
        </label>
        <section className="botoes">
          <button className="finalizar" onClick={clique}>Finalizar</button>
          <button className="cancelar" onClick={close}>Cancelar</button>
        </section>
      </motion.section>
    </section>
    , portal!)
}

export default FormFinalizar;
