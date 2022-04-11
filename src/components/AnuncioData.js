import React from 'react';
import SideBar from './SideBar';
import {useParams} from 'react-router-dom';

function AnuncioData(props){
    let {anuncios} = props; 
    let {id} = useParams();
    let anuncio = anuncios[id]
    return (
        <React.Fragment>
            <div id="wrapper">
                <SideBar />
                {/*<!-- Categories in DB -->*/}
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">{anuncio.titulo}</h5>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 25 +'rem'}} src={require(`../assets/images/anuncios/${anuncio.archivo}`)} alt=" AnuncioImagen "/>
                        </div>
                        <p>{anuncio.descripcion}</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default AnuncioData;