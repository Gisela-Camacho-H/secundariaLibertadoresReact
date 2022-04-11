
import React from 'react';
import SideBar from './SideBar';
import EstudiantesTable from './EstudiantesTable';

const Estudiantes = ({estudiantes}) => {
	return (
		<React.Fragment>
			<div id="wrapper">
                <SideBar />
                {/*<!-- Table Maestros in DB -->*/}
                <EstudiantesTable estudiantes={estudiantes}/>	
			</div>
		</React.Fragment>
	);
  };
  
  export default Estudiantes;
  