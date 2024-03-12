import React from "react";
import "./Topo.css";
import { IoIosArrowDropleft } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Topo(props){
    return(
        <div className="fundo">
            <Link to="/"><IoIosArrowDropleft className="icone" /></Link>
            <h1 className="titulo">{props.h1}</h1>
        </div>
    );
}