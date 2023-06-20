
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/segundaEtapa';
import { Avaliacao } from './pages/primeiraEtapa';
import { Adaps } from './pages/adaps';
import { Concluido } from './pages/concluido';
function App() {

  return (
    <>
    <Routes>
      <Route path="/segundaetapa" element={<Home />} />
      <Route path="/" element={<Avaliacao />} />
      <Route path="/adaps" element={<Adaps />} />
      <Route path="/concluido" element={<Concluido />} />
    </Routes>
    </>
    
  )
}

export default App
