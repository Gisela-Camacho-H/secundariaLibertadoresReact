import React, {Component} from 'react';
import Genre  from './Genre';

class GenresInDb extends Component {
    constructor(){
        super();
        this.state = {
            genresList:[]
        }
    }
    componentDidMount(){
        console.log("el componente se esta cargando");
        fetch('/api/genres')
            .then(respuesta => {
                return respuesta.json()
            })
            .then(genres => {
                /* Si o Si se llama dentro de una promesa */
                console.log(genres)
                this.setState({
                    genresList: genres.data
                })
            })
            .catch(error => console.log(error))
    }
    changeBackgroundColor = () => {
        console.log("cambiando color de fondo");
        console.log(this);
        console.log("------------");
        console.log(this.state);
        const cajaTitulo = document.querySelector('#card-body');
        cajaTitulo.classList.toggle('bg-secondary');
    }
    render(){
        const {genresList} = this.state;
        return (
            <React.Fragment>
                    {/*<!-- Categories in DB -->*/}
                    <div className="col-lg-6 mb-4">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-gray-800" onMouseOver={this.changeBackgroundColor}>Anuncios en base de datos</h6>
                            </div>
                            <div className="card-body" id="card-body">
                                <div className="row">
                                    {
                                        genresList.map((genre,index)=>{
                                            return  <Genre  {...genre}  key={index} />
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
            </React.Fragment>
        )
    }
}
export default GenresInDb;