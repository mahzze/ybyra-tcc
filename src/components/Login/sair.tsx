import React from "react";

export default function Sair() {

  if (sessionStorage.length > 0) {
    // deletar o cookie também
    sessionStorage.clear();
    window.location.reload();
  }

  return (
    <h1>Deslogado!</h1>
  )
}
