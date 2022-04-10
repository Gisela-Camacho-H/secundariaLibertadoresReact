import React,{Component} from 'react'
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';

class Dashboard extends Component {
    
    constructor() {
        super();
        this.state = {
          contentAnuncios: [],
          contentMaestros: [],
          contentEstudiantes: [],
        };
      }
    
      componentDidMount() {
        fetch("api/anuncios")
          .then((response) => response.json())
          .then((albums) => this.setState({ contentAnuncios: albums.data }))
          .catch((err) => console.log(err));
    
        fetch("api/maestros")
          .then((response) => response.json())
          .then((users) => this.setState({ contentMaestros: users.data }))
          .catch((err) => console.log(err));
        
        fetch("api/estudiantes")
        .then((response) => response.json())
        .then((users) => this.setState({ contentEstudiantes: users.data }))
        .catch((err) => console.log(err));  
      }
        
    render(){
    let anuncios = this.state.contentAnuncios;
    let maestros = this.state.contentMaestros;
    let estudiantes = this.state.contentEstudiantes;

	return (
        <React.Fragment>
        <div id="wrapper">
            <SideBar />
            <ContentWrapper  anuncios={anuncios} maestros={maestros} estudiantes={estudiantes}/>
        </div>
        </React.Fragment>

	);
    }
}

export default Dashboard;