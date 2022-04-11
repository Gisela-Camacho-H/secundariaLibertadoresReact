import React, { Component} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import Dashboard from './components/Dashboard';
import Maestros from './components/Maestros';
import Estudiantes from './components/Estudiantes';
import Anuncios from './components/Anuncios';
import AnuncioData from './components/AnuncioData';
import Footer from './components/Footer';
class App extends Component {
  constructor() {
    super();
    this.state = {
      contentAnuncios: [],
      contentMaestros: [],
      contentEstudiantes: [],
    };
  }

  componentDidMount() {
    fetch("api/anuncios")
      .then((response) => response.json())
      .then((albums) => this.setState({ contentAnuncios: albums.data }))
      .catch((err) => console.log(err));

    fetch("api/maestros")
      .then((response) => response.json())
      .then((users) => this.setState({ contentMaestros: users.data }))
      .catch((err) => console.log(err));
    
    fetch("api/estudiantes")
    .then((response) => response.json())
    .then((users) => this.setState({ contentEstudiantes: users.data }))
    .catch((err) => console.log(err));  
  }
    
  render(){
    let anuncios = this.state.contentAnuncios;
    let maestros = this.state.contentMaestros;
    let estudiantes = this.state.contentEstudiantes;
    
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

              <Route path="/dashboard" element={<Dashboard anuncios={anuncios} maestros={maestros} estudiantes={estudiantes}/>} />

              <Route path="/signup" element={<Signup />} />

              <Route path="/login" element={<Signin />} />

              <Route path="/anuncio/:id" element={<AnuncioData anuncios={anuncios}/>}/>

              <Route path="/anuncios" element={<Anuncios  anuncios={anuncios} />}/>

              <Route path="/maestros" element={<Maestros  maestros={maestros} />}/>
              
              <Route path="/estudiantes" element={<Estudiantes estudiantes={estudiantes}/>}/>

              </Route>
          </Routes>
        </BrowserRouter>
        <Footer />
      </>
    );
  }
}

export default App;
