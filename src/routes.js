import React from 'react'
import { BrowserRouter,Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Index';
import Agencias from './pages/Agencia/index'
import Noticias from './pages/Noticias/index'


function Rotas() {
  return (
    <BrowserRouter>
    <Routes>
        <Route  exact  path="/" element={<Home/>}></Route>
        <Route path="/Agencias" element={<Agencias/>}></Route>
        <Route path="/Noticias" element={<Noticias/>}></Route>
      </Routes> 
    </BrowserRouter>
      
  );
}

export default Rotas;