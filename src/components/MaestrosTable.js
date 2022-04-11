
import React from 'react';
import MaestroRow from './MaestroRow'

const MaestrosTable = ({maestros}) => {
	return (
		<React.Fragment>
            {/*<!-- Table Maestros in DB -->*/}
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h1 className="m-0 font-weight-bold text-gray-800">Maestros en Base de Datos</h1>
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
                                    {maestros.map((maestro, index) => {
                                        return <MaestroRow {...maestro} key={index} />;
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>	
            </div>	
		</React.Fragment>
	);
  };
  
  export default MaestrosTable;
  