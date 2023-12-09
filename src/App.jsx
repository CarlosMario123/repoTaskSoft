import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import PageMateria from './page/PageMateria';
import Configuracion from './page/Configuracion';
function App() {
  

  return (
    <Router>
  
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/materia/:id' element = {<PageMateria/>} />
      <Route path='/configuracion' element = {<Configuracion/>} />
    </Routes>

</Router>
  )
}

export default App
