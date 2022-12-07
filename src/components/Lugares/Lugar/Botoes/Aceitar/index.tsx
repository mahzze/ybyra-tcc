import axios from "axios"
import '../styles.css'
import Params from '../Params'

const Aceitar = ({ logradouro, numero }: Params) => {

  const aceitarLocal = (logradouro: string, numero: number) => {
    axios.post("http://localhost:3001/aceitar", {
      logradouro: logradouro,
      numero: numero,
      ong: sessionStorage.getItem("email")
    })
    window.location.reload();
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
