import React from "react";

export default function Sair() {   
    sessionStorage.clear();
    // deletar o cookie também

    return(
        <h1>Deslogado!</h1>
    )
}
