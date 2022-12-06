import Axios from "axios";
import { useState, useEffect } from "react";
import './styles.css';
import Lugar from './Lugar';
import lugar from './lugarType';

export default function Lugares() {

  const [lugares, setLugares] = useState([] as lugar[]);

  useEffect(() => {
    Axios.get('http://localhost:3001/showLugares').then((res) => {
      let result = res.data.regs
      setLugares(result);
      console.log(result)
    })
  }, []);

  if (lugares.length === 0) {
    return (
      <section className="locais">
        <Lugar
          logradouro="N/a"
          numero={0}
          ongSelecionada={null}
          arvoresPlantadas={null}
          cep="N/a"
        />
      </section>
    )
  }

  return (
    <div className="wrapper">
    <section className="locais">
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

