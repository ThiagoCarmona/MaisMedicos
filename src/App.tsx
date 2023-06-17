
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Avaliacao } from './pages/avaliacao';
import { Adaps } from './pages/adaps';
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/avaliacao" element={<Avaliacao />} />
      <Route path="/adaps" element={<Adaps />} />
    </Routes>
    </>
    
  )
}

export default App
