import React from "react";

export default function Sair() {
    // deletar o cookie também
    sessionStorage.clear();
    
    // reload infinito
    window.location.reload();

    return(
        <h1>Deslogado!</h1>
    )
}
