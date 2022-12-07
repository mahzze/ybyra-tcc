import Axios from "axios";
import { useState, useEffect } from "react";
import './styles.css';
import Lugar from './Lugar';
import lugar from './lugarType';

export default function Lugares() {

  const [lugares, setLugares] = useState([] as lugar[]);
  const requestLugares = () => {
    Axios.get('http://localhost:3001/showLugares').then((res) => {
      let result = res.data.regs
      setLugares(result);
      console.log(result)
    })
  }

  useEffect(() => requestLugares(), []);

  if (lugares.length === 0) {
    return (
      <>
        <section className="locais">
          <section className="lugar dicionario">
            <span>Logradouro</span>
            <span>numero</span>
            <span>Email da ONG</span>
            <span>Árvores plantadas</span>
          </section>
          <Lugar
            logradouro="N/a"
            numero={0}
            ongSelecionada={null}
            arvoresPlantadas={null}
            cep="N/a"
          />
        </section>
      </>
    )
  }

  return (
    <div className="wrapper">
      <section className="locais">
        <section className="dicionario">
          <span>Logradouro</span>
          <span>Número</span>
          <span>Email da ONG</span>
          <span>Árvores</span>
        </section>
        {
          lugares.map((lugar: lugar) => {
            return (
              <Lugar
                logradouro={lugar.logradouro}
                numero={lugar.numero}
                ongSelecionada={lugar.ongSelecionada}
                arvoresPlantadas={lugar.arvoresPlantadas}
                cep={lugar.cep}
              />
            )
          })
        }
      </section>
    </div>
  );
}

