
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Avaliacao } from './pages/avaliacao';
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/MaisMedicos" element={<Home />} />
      <Route path="/avaliacao" element={<Avaliacao />} />
    </Routes>
    </>
    
  )
}

export default App
