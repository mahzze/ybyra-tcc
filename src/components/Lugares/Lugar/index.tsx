import './styles.css';
import lugar from '../lugarType';
import Aceitar from './Botoes/Aceitar';
import Cancelar from './Botoes/Cancelar';
import Finalizar from './Botoes/Finalizar';
import Axios from 'axios';
import { useEffect } from 'react';

const Lugar = ({ logradouro, numero, ongSelecionada, arvoresPlantadas }: lugar) => {

  if (ongSelecionada == null) ongSelecionada = "N/a";
  if (arvoresPlantadas == null) arvoresPlantadas = 0;

  Axios.defaults.withCredentials = true;
  
  useEffect(() => {
    Axios.get("http://localhost:3001/lugares").then(
      (res) => {
      console.log(res.data);
    });
  }, []);

  return (
    <section className="lugar">
      <div className="info">{logradouro}</div>
      <div className="info">{numero}</div>
      <div className="info">{ongSelecionada}</div>
      <div className="info">{arvoresPlantadas}</div>
      <div className="botoes">
        {
          ongSelecionada === "N/a"
            ? (
              <>
                <Aceitar
                  logradouro={logradouro}
                  numero={numero}
                />
                <Cancelar
                  logradouro={logradouro}
                  numero={numero}
                />
              </>
            )
            : (
              arvoresPlantadas == 0
                ? (
                  <Finalizar
                    logradouro={logradouro}
                    numero={numero}
                  />
                )
                : (
                  <div className="concluido"></div>
                )
            )
        }
      </div>
    </section>
  )
}

export default Lugar;
