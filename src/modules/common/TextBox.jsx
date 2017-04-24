import React, { Component } from 'react';
import { HOC } from 'formsy-react';

class TextBox extends Component {
	render() {
		return (
			<div>
				<input
					type="text"
					name={this.props.name}
					onChange={event => this.props.setValue(event.currentTarget.value)}
					value={this.props.getValue()}
				/>
			</div>
		);
	}

}

export default HOC(TextBox);