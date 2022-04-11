
import React from 'react';
import EstudianteRow from './EstudianteRow'

const EstudiantesTable = ({estudiantes}) => {
	return (
		<React.Fragment>
            {/*<!-- Table Maestros in DB -->*/}
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h1 className="m-0 font-weight-bold text-gray-800">Estudiantes en Base de Datos</h1>
                </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table
                                className="table table-bordered"
                                id="dataTable"
                                width="100%"
                                cellSpacing="0"
                            >
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Nombre</th>
                                        <th>Apellido Paterno</th>
                                        <th>Apellido Materno</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {estudiantes.map((estudiante, index) => {
                                        return <EstudianteRow {...estudiante} key={index} />;
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>	
            </div>	
		</React.Fragment>
	);
  };
  
  export default EstudiantesTable;
  