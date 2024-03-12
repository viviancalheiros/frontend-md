import React from "react";
import "./Desencriptar.css";
import Topo from "../componentes/Topo";

function alerta(){
  alert("Mensagem desencriptada!");
}

export default function Desencriptar(){
  return(
    <div className="geral">
      <Topo h1="Desencriptar"/>
      <div className="corpo" >
        <form>
          <div className="componente_corpo" >
            <label for="numero_p">Digite um número primo (P):</label>
            <input type="number" name="numero" id="numero_p"/>
            <label for="numero_q">Digite um número primo (Q):</label>
            <input type="number" name="numero" id="numero_q"/>
            <label for="numero_e">Digite um número (E):</label>
            <input type="number" name="numero" id="numero_e"/>
          </div>
          <div className="componente_corpo" >
            <button onClick={alerta} type="submit">Desencriptar!</button>
          </div>
        </form>
      </div>
    </div>
  );
}
