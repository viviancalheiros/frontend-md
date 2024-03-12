import React from "react";
import "./Encriptar.css";
import Topo from "../componentes/Topo";

function botao(){
    alert("Mensagem encriptada!");
}

export default function Encriptar(){
    return(
        <div className="geral">
            <Topo h1="Encriptar"/>
            <form>
            <div className="input-single">
                <label for="caixa1">Digite o texto a ser encriptado: </label>
                <input type="text" id="caixa1" name="encriptar" />
                <label for="caixa2"> Digite a chave pública recebida previamente: </label>
                <input type="number" id="caixa2" name="encriptar" />
                <button onClick={botao} type="submit" className="btn">Encriptar!</button>
            </div>
            </form>
        </div>
    );
}