import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Recomendado from './components/recomendado';
import { Routes, Route } from "react-router-dom";
import Top from './components/top';
import { Contato } from './components/contato';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="recomendado" element={ <Recomendado/> } />
        <Route path="/top" element={ <Top/> } />
        <Route path="/contato" element={ <Contato/> } />
      </Routes>
    </>
  );
}

export default App;
