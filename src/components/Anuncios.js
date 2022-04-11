import React from 'react';
import SideBar from './SideBar';
import {Link} from 'react-router-dom';
function AnunciosInDb({anuncios}){
    
    return (
        <React.Fragment>
            <div id="wrapper">
                <SideBar />
                {/*<!-- Table Maestros in DB -->*/}
                <div className="col-lg-6 mb-4" >
                    <div className="card shadow  col-md-10 sm-10 shadow">
                        <div className="card-header py-3">
                            <h4 className="m-0 font-weight-bold text-gray-800">Anuncios en base de datos</h4>
                        </div>
                        <div className="card-body" id="card-body">
                            <div className="row">
                                {   
                                    anuncios.map((anuncio,index)=>{
                                        return  (
                                            <Link key={index} 
                                            className="text-decoration-none text-center col-sm-8"
                                            to={`/anuncio/${anuncio.id}`}
                                            >
                                            <div className="col-lg-6 mb-4 ">
                                                <div className="card-body">
                                                    <h8 className="m-0 font-weight-bold text-gray-800">{anuncio.titulo}</h8>
                                                </div>
                                                <div className="text-center">
                                                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 80 +'%'}} src={require(`../assets/images/anuncios/${anuncio.archivo}`)} alt=" AnuncioImagen "/>
                                                </div>
                                            </div>
                                            </Link> 
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
			</div>
        </React.Fragment>
    )
}
export default AnunciosInDb;