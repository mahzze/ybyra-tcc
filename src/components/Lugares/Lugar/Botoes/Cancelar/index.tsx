import axios from "axios"
import '../styles.css'

type Params = {
  logradouro: string,
  numero: number
}

const Cancelar = ({ logradouro, numero }: Params) => {

  const cancelarLocal = (logradouro: string, numero: number) => {
    axios.post('http://localhost:3001/cancelar', {
      logradouro: logradouro,
      numero: numero
    })
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
