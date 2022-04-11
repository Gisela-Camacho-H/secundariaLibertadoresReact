import React from 'react';
import ContentRowTop from './ContentRowTop';
import MaestrosTable from './MaestrosTable';

function ContentWrapper({anuncios, maestros, estudiantes}){
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <ContentRowTop anuncios={anuncios} maestros={maestros} estudiantes={estudiantes}/>
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;