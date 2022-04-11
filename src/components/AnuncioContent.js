import React from 'react';
import { Link } from "react-router-dom";

function AnuncioContent(props){
    return(
        <React.Fragment>
            <Link
                className="text-decoration-none col-md-8 sm-3"
                to={`/anuncio/${props.id}`}
            >
            <div className="col-lg-6 mb-4">
                <div className="card text-white bg-dark  shadow">
                    <div className="card-body">
                        {props.titulo}
                    </div>
                </div>
            </div>
            </Link>    
        </React.Fragment>
    )
}
export default AnuncioContent;