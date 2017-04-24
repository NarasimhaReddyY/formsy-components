import React, { Component } from 'react';
import { HOC } from 'formsy-react';

class CheckBox extends Component {
	render(){
		return (
			<input
				type="checkbox"
				name={this.props.name}
				value={this.props.value}
			/>
		)
	}
}

export default HOC(CheckBox);