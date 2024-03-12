import React from "react";
import Inicial from "./pages/Inicial.js";
import GerarChave from "./pages/ChavePublica.js";
import Encriptar from "./pages/Encriptar.js";
import Desencriptar from "./pages/Desencriptar.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicial/>}/>
        <Route path="/chavepublica" element={<GerarChave/>}/>
        <Route path="/encriptar" element={<Encriptar/>}/>
        <Route path="/desencriptar" element={<Desencriptar/>}/>
      </Routes>
  </BrowserRouter>
  );
}

export default App;