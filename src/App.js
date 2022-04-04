
import './App.css';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Home from './components/Home';
import Nosotros from './components/Nosotros';
import Admision from './components/Admision';
import Calendario from './components/Calendario';
import Contacto from './components/Contacto';
import Galeria from './components/Galeria';
import Layout from './components/Layout';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>

            <Route path="/" element={<Home />} />

            <Route path="/nosotros" element={<Nosotros />} />

            <Route path="/calendario" element={<Calendario />} />

            <Route path="/galeria" element={<Galeria />} />

            <Route path="/contacto" element={<Contacto />} />

            <Route path="/admision" element={<Admision />} />

            <Route path="/signup" element={<Signup />} />

            <Route path="/login" element={<Signin />} />

            </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
