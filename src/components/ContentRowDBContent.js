import React from 'react';
import SmallCard from './SmallCard';

const ContentRowTop = ({anuncios, maestros, estudiantes}) => {
   
    let AnunciosInDataBase = {
        color:   "primary",
        titulo: "Anuncios",
        valor: anuncios.length,
        icono: "fas fa-film",
    }

    let MaestrosInDataBase ={
        color:   "success",
        titulo: "Maestros",
        valor: maestros.length,
        icono: "fas fa-award",
    }

    let EstudiantesInDataBase = {
        color:   "warning",
        titulo: "Estudiantes",
        valor: estudiantes.length,
        icono: "fas fa-user",
    }

    let cardProps = [AnunciosInDataBase,MaestrosInDataBase,EstudiantesInDataBase];
    console.log("datosTopRow");
    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
            {
                cardProps.map((producto,index)=>{
                    return <SmallCard  {...producto}  key= {index}/>
                })
            }      
        </div>
        </React.Fragment>
    );
}
export default ContentRowTop;