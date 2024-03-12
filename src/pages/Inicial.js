import "./Inicial.css";
import { Link } from "react-router-dom";

export default function Forms(){
    return(
        <div className="geral">
        <div className="alinhar">
            <h1 className="title">Escolha uma opção:</h1>
            <div className="botoes">  
            <button className="botao"><Link className="link" to="/chavepublica">Gerar chave pública</Link></button>
            <button className="botao"><Link className="link" to="/encriptar">Encriptar</Link></button>
            <button className="botao"><Link className="link" to="/desencriptar">Desencriptar</Link></button>
            </div>
        </div>
        </div>
    )
}