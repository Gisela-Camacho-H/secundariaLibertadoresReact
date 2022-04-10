import React from 'react';
import ContentRowTop from './ContentRowTop';
import Movie from './Movie';
import Footer from './Footer';

function ContentWrapper({anuncios, maestros, estudiantes}){
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <ContentRowTop anuncios={anuncios} maestros={maestros} estudiantes={estudiantes}/>
                    <Movie />
                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;