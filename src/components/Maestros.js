
import React from 'react';
import SideBar from './SideBar';
import MaestrosTable from './MaestrosTable';
const Maestros = ({maestros}) => {
	return (
		<React.Fragment>
			<div id="wrapper">
                <SideBar />
                {/*<!-- Table Maestros in DB -->*/}
                <MaestrosTable maestros={maestros}/>	
			</div>
		</React.Fragment>
	);
  };
  
  export default Maestros;
  