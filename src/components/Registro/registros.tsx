import React, { useState } from "react";
import Axios from "axios";
import './styles.css';

export default function Registros() {
   // eslint-disable-next-line
  const registros = () => {
    Axios.get("http://localhost:3001/registros").then(() => {

    });
  }
 // eslint-disable-next-line
  const [regs, setRegs] = useState();

  return (
    <form className="Registro">
      <div className="inputs">

      </div>

    </form>
  );
}

