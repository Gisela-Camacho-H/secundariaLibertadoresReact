import React from 'react';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';

function Dashboard({anuncios, maestros, estudiantes}) {

	return (
    <React.Fragment>
    <div id="wrapper">
        <SideBar />
        <ContentWrapper  anuncios={anuncios} maestros={maestros} estudiantes={estudiantes}/>
    </div>
    </React.Fragment>
	);
}

export default Dashboard;