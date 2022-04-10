import React from 'react';
import imagenFondo from '../assets/images/calendario.jpg';
import AnunciosInDb from './AnunciosInDb';
import ContentRowDBContent from './ContentRowDBContent';

function ContentRowTop({anuncios, maestros, estudiantes}){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Secundaria Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<ContentRowDBContent anuncios={anuncios} maestros={maestros} estudiantes={estudiantes}/>
					{/*<!-- End movies in Data Base -->*/}
					
	
					{/*<!-- Content Row Last Movie in Data Base -->*/}
					<div className="row">
						{/*<!-- Last Movie in DB -->*/}
						<div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Calendario</h5>
								</div>
								<div className="card-body">
									<div className="text-center">
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt=" Star Wars - Mandalorian "/>
									</div>
									<p>Damos a usted la más cordial bienvenida al ciclo escolar 2021-2021 y asumimos con entusiasmo el compromiso contraído con cada uno de ustedes, padres y tutores de nuestros alumnos. Esto nos da pauta y la seguridad de coordinar con ustedes, todas las actividades tanto académicas, culturales y deportivas, así como las disciplinas e iniciativas que juntos habremos de inculcar en nuestros jóvenes, para su crecimiento personal y académico.
									La educación de nuestros alumnos es un Teto serio y requiere no solo de la preparación de los docentes y de la dirección correcta en nuestras actividades, sino que amerita la vinculación constante, firme y decidida con los padres de familia; juntos debemos asumir esta gran tarea, de hallar soluciones a las dificultades que se presenten en el transcurrir de este ciclo escolar y, así, airosos alcanzar en conjunto, el éxito que repercutirá en la adquisición de 
									conocimientos y de la personalidad de nuestros alumnos. La mayor satisfacción que podremos tener como escuela, es la de elevar el espíritu de alumnos tenaces, sanos en sus ideas para llegar a ser adultos responsables y ciudadanos que contribuyan al beneficio de esta sociedad.</p>
									
								</div>
							</div>
						</div>
						{/*<!-- End content row last movie in Data Base -->*/}

						{/*<!-- Genres in DB -->*/}
						<AnunciosInDb anuncios={anuncios} />

						{/*<!--End Genres In Db-->*/}		
					</div>
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;