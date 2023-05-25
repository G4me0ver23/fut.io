import "./styles/index.css";
import TreinoTela from "./pages/TreinoTela";
import PriTela from "./pages/PriTela";
import CadastroTela from "./pages/CadastroTela";
import LoginTela from "./pages/LoginTela";
import MainTela from "./pages/MainTela";
import PsicoTela from "./pages/PsicoTela";
import NutriTela from "./pages/NutriTela";
import TaticTela from "./pages/TaticTela";
import HelpTela from "./pages/HelpTela";
import ConfigTela from "./pages/ConfigTela";
import Treino from "./pages/Treino";
import Psico from "./pages/Psico";
import Posicao from "./pages/Posicao";
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dieta from "./pages/Dieta";
import MetasMedidas from "./pages/MetasMedidas";


export default function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={ <PriTela /> }/>
          <Route path='/pritela' element={ <PriTela /> } />
          <Route path='/cadastrotela' element={<CadastroTela />} />
          <Route path='/logintela' element={ <LoginTela /> } />
          <Route path='/maintela' element={ <MainTela /> } />
          <Route path='/treinotela' element={<TreinoTela />} />
          <Route path='psicotela' element={ <PsicoTela /> } />
          <Route path='/tatictela' element={<TaticTela />} />
          <Route path='/nutritela' element={ <NutriTela /> } />
          <Route path='/helptela' element={<HelpTela />} />
          <Route path='/configtela' element={<ConfigTela />} />
          <Route path='/treino/:id' element={<Treino />} />
          <Route path='/psico/:id' element={<Psico />} />
          <Route path='/metmed/:id' element={<MetasMedidas />} />
          <Route path='/diet' element={<Dieta />} />
          <Route path='/posicao/:id' element={<Posicao />} />
      </Routes>
    </Router>
  )
}
