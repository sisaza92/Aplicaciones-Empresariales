import React, {Component} from 'react';
import './App.css';
import Resultado from './Resultado'

class App extends Component {

	constructor(props){
		super(props);
		this.buscar("audifonos");
		this.state={
			resultados:[]
		}
	}

    cambioInput(elemento){
    	console.log(elemento.target.value);
    }

    buscar(busqueda){
    	fetch('https://api.mercadolibre.com/sites/MCO/search?q=' + busqueda)
    	.then((resultado) => resultado.json())
    	.then((json) => this.setState({resultados: json.results}))
    }	

    render() {
        return (
        	<div>
        		<h1>Cristian Camilo Isaza</h1>
	            <input type="text" placeholder="Busqueda" onChange={this.cambioInput.bind(this)}></input>
	            {this.state.resultados.map(((resultado) => <Resultado resultado={resultado}></Resultado>))}
            </div>
        );
    }
}

export default App;
