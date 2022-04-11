import React from 'react';
import AnuncioContent  from './AnuncioContent';

function AnunciosInDb({anuncios}){
    
    return (
        <React.Fragment>
                {/*<!-- Categories in DB -->*/}
                <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-gray-800">Anuncios en base de datos</h6>
                        </div>
                        <div className="card-body" id="card-body">
                            <div className="row">
                                {   
                                    anuncios.map((anuncio,index)=>{
                                        return  <AnuncioContent  {...anuncio}  key={index} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    )
}
export default AnunciosInDb;