

// ./src/components/Layout.js

import React from 'react';

import { Outlet, Link} from 'react-router-dom'
import headerImage from '../assets/images/header_background0.jpg';

export default function Layout() {


	return (
		<>
		<header className="header">
			<div className="content">
			<nav className="navbar">
			<div className="container">
        <ul>
			<li><Link to="/" className="active">Inicio</Link></li>
			<li><Link to="/nosotros">Nosotros</Link></li>
			<li><Link to="/admision">Admisión</Link></li>
			<li><Link to="/calendario">Calendario Escolar</Link></li>
			<li><Link to="/galeria">Galeria</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>
        <ul>
			<li><Link to="/login">login</Link></li>
			<li><Link to="/signup">Registro</Link></li>
        </ul>
    </div>
    </nav>
</div>
    
<div className="content">
    <div className="header_background">
    <img src={headerImage}  alt="header_background"/>
	<div className="slogan">
        <h1>Escuela Secundaria Libertadores de América</h1>
        <p>"Educando para la vida, con equidad y calidad"</p>
    </div>
    </div>
    
</div>
    <script src= "/javascripts/fixedScroll.js" type="text/javascript"></script>     
</header>
	<Outlet />
	<footer>
	<div id="footerInfo">
            <br/><br/>
            <p>Escuela Secundaria General Particular "Libertadores de América"</p>
            <br/><br/>
            <p>Clave: 20PES0125Q</p>
            <p>Correo: sec.gral.libertadoresdeamerica@gmail.com</p>
            <br/><br/>
            <p>Contáctanos</p>
            <p>Facebook</p>
            <p>Messenger</p>
            <br/><br/>
        </div>
        <div id="footer">
            <div>
                <p>Teléfono:</p>
                <p>+52 954 559 4411</p>
                <br/><br/>
                <p>Dirección:</p>
                <p>Tamarindos #806, Sector Almendros, Puerto escondido, Oaxaca</p>
        </div>
            <br/>
        </div>
    </footer>
	</>
	)
}