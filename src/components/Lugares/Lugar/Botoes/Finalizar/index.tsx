import Axios from "axios"
import '../styles.css'
import { useState } from "react"
import Params from '../Params'
import FormFinalizar from './FormFinalizar'
import { AnimatePresence } from 'framer-motion';

const Finalizar = ({ logradouro, numero }: Params) => {

  const [isFormOpen, setIsFormOpen] = useState(false)
  const [arvores, setArvores] = useState('')

  const finalizarLocal = (logradouro: string, numero: number, arvoresPlantadas: string) => {
    Axios.post("http://localhost:3001/finalizar", {
      logradouro: logradouro,
      numero: numero,
      arvoresPlantadas: arvoresPlantadas
    })
    window.location.reload();
  }

  return (
    <>
    <button
      onClick={() => setIsFormOpen(true)}
      id="finalizar"
    >
      Finalizar
    </button>
    {
    isFormOpen && 
      <AnimatePresence
        initial={true}
        exitBeforeEnter={false}
        onExitComplete={() => null}
      >
        <FormFinalizar
        isOpen={isFormOpen}
        close={() => setIsFormOpen(false)}
        arvores={arvores}
        setArvores={setArvores}
        clique={() => finalizarLocal(logradouro, numero, arvores)}
        />
      </AnimatePresence>
    }
    </>
  )
}

export default Finalizar;
