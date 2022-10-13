import React, { useState } from "react";
import Axios from "axios";
import './styles.css';

export default function Registros() {
  const registros = () => {
    Axios.get("http://localhost:3001/registros").then(() => {

    });
  }

  const [regs, setRegs] = useState();

  return (
    <form className="Registro">
      <div className="inputs">

      </div>

    </form>
  );
}

