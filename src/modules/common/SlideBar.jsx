import React, { Component } from 'react';
import { HOC } from 'formsy-react';
import InputRange from 'react-input-range';

class SlideBar extends Component {
	render(){
		return (
			<InputRange 
				maxValue={20}
        minValue={0}
        name="slidebar"
        value={this.props.getValue()}
        onChange={value => this.props.setValue(value)}
			/>
		);
	}
}

export default HOC(SlideBar);