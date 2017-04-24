import React, { Component } from 'react';
import Formsy from 'formsy-react';
import _ from 'lodash';

class SelectBox extends Component {

	createOptionNode = (option, index) => {
		return (
			<option key={index} value={option.value}>{option.label}</option>
		)
	}

	render() {
		let optionNodes = [];

		_.forEach(this.props.options, (option, index) => {
			optionNodes.push(this.createOptionNode(option, index));
		});

	  return (
			<div>
				<select>
					{ optionNodes }
				</select>
	    </div>
  	);
	}
}

export default SelectBox;