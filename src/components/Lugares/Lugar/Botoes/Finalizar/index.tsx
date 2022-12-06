import axios from "axios"
import '../styles.css'
import { useState } from "react"
import FormFinalizar from './FormFinalizar'

type Params = {
  logradouro: string,
  numero: number
}

const Finalizar = ({ logradouro, numero }: Params) => {

  const [isFormOpen, setIsFormOpen] = useState(false)

  const finalizarLocal = (logradouro: string, numero: number) => {
    axios.post("/finalizar", {
      logradouro: logradouro,
      numero: numero
    });
  }

  const openFinalizar = () => {

    return (
      <FormFinalizar
        isOpen={isFormOpen}
        close={() => setIsFormOpen(false)}
        clique={() => finalizarLocal(logradouro, numero)}
      />)
  }

  return (
    <button
      onClick={() => openFinalizar()}
      id="finalizar"
    >
      Finalizar
    </button>
  )
}

export default Finalizar;
