import Axios from "axios";
import './styles.css';

export default function Registros() {
  const registros = () => {
    //antes tinha um .then=>(){} aqui, mas tirei pra fazer a diretiva do railway funcionar, to vendo como desativa-la
    Axios.get("http://localhost:3001/registros");
    }
  console.log(registros)

  return (
    <form className="Registro">
      <div className="inputs">

      </div>
    </form>
  );
}

