import React, { Component } from 'react';
import { HOC } from 'formsy-react';
import _ from 'lodash';

class SelectBox extends Component {

	constructor(props) {
		super(props);
	}

	createOptionNode = (option, index) => {
		return (
			<option
				key={index}
			  value={option.value}
			>
			  {option.label}
		  </option>
		)
	}

	render() {
		let optionNodes = [];

		_.forEach(this.props.options, (option, index) => {
			optionNodes.push(this.createOptionNode(option, index));
		});

	  return (
			<div>
				<select
					name={this.props.name}
					onChange={ event => this.props.setValue(event.currentTarget.value)}
					value={this.props.getValue()}
				>
					{ optionNodes }
				</select>
	    </div>
  	);
	}
}

export default HOC(SelectBox);