import React, { Component } from 'react';
import App from './App';
export default class Page extends Component {
	render(){
		return(
			<div>
			  <h1>Your Detail:</h1>
			  <h2>{this.props.fname}</h2>
			</div>
		)
	}
}