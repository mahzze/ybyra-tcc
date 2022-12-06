import axios from "axios"
import '../styles.css'

type Params = {
  logradouro: string,
  numero: number
}

const Aceitar = ({ logradouro, numero }: Params) => {

  const aceitarLocal = (logradouro: string, numero: number) => {
    axios.post("localhost:3001/aceitar", {
      logradouro: logradouro,
      numero: numero,
      ong: sessionStorage.getItem("email")
    })
  }

  return (
    <button
      onClick={() => aceitarLocal(logradouro, numero)}
      id="aceitar"
    >
      Aceitar
    </button>
  )
}

export default Aceitar;
