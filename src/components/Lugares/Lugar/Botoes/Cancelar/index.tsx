import axios from "axios"
import '../styles.css'
import Params from '../Params'

const Cancelar = ({ logradouro, numero }: Params) => {

  const cancelarLocal = (logradouro: string, numero: number) => {
    axios.post('http://localhost:3001/cancelar', {
      logradouro: logradouro,
      numero: numero
    })
    window.location.reload();
  }

  return (
    <button
      onClick={() => cancelarLocal(logradouro, numero)}
      id="cancelar"
    >
      Cancelar
    </button>
  )
}

export default Cancelar;
