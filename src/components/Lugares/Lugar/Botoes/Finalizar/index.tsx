import axios from "axios"
import '../styles.css'
import { useState } from "react"
import Params from '../Params'
import FormFinalizar from './FormFinalizar'

const Finalizar = ({ logradouro, numero }: Params) => {

  const [isFormOpen, setIsFormOpen] = useState(false)

  const finalizarLocal = (logradouro: string, numero: number) => {
    axios.post("http://localhost:3001/finalizar", {
      logradouro: logradouro,
      numero: numero
    })
    window.location.reload();
  }

  const openFinalizar = () => {
    setIsFormOpen(true)
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
