import Axios from "axios";
import { useState, useEffect } from "react";
import './styles.css';
import Lugar from './Lugar';

export default function Lugares() {

  const [lugares, setLugares] = useState([]);
  useEffect(() => {
    Axios.get('http://localhost:3001/lugares').then((res) => {
      setLugares(res.data.regs);
    })
  })

  return (
    <section className="locais">
      {
        lugares.length === 0
          ? (
            <>Nada registrado</>
          )
          : ({
            // map, forEach e outros métodos não estão funcionando para iterar o array lugares
            // a ideia é carregar um elemento <Lugar/> para cada lugar registrado no banco de dados 
            lugares.map((lugar) => <Lugar lugar={lugar} />)
          })
      }
    </section>
  );
}

