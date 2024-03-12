import React from "react";
import "./ChavePublica.css";
import Topo from "../componentes/Topo.js";

function aviso(){
  alert("Chave gerada!");
}

export default function GerarChave(){
  return(
    <div className="geral">
      <Topo h1="Gerar Chave Pública"/>
      <form className="formulario">
        <label>Digite um número primo (P):</label>
        <input type="number" name="primos"/>
        <label>Digite um número primo (Q):</label>
        <input type="number" name="primos"/>
        <label>Digite um número primo a P e Q:</label>
        <input type="number" name="primos"/>
        <button onClick={aviso} type="submit">Gerar chave!</button>
      </form>
    </div>
  )
}