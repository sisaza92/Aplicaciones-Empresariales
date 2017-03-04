import React, {Component} from 'react';

export default class Resultado extends Component{
	
	resultado = {};

	constructor(props){
		super(props);
		console.log(props.resultado);
		this.resultado=props.resultado;
	}

	render(){
		return(
			<div className="item">
				<div className="titulo">{this.resultado.title}</div>
				<div className="imagen"><img role="presentation" src={this.resultado.thumbnail}></img></div>
				<div className="precio">Precio: {this.resultado.price}</div>
				<div className="link"><a href={this.resultado.permalink}>Más Información</a></div>
			</div>
			);
	}
	
} 