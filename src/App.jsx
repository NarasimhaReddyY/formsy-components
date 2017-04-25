import React, {Component} from 'react';
import Formsy from 'formsy-react';
import SelectBox from './modules/common/SelectBox.jsx';
import TextBox from './modules/common/TextBox.jsx';
import CheckBox  from './modules/common/CheckBox.jsx';
import SlideBar from './modules/common/SlideBar.jsx';

class App extends Component {
  render() {
    return (
    	<div>
	      <h1>Hello React :)</h1>
    		<Formsy.Form onSubmit={this.props.handleFormSubmit}>
		    	<SelectBox
		    		name='selectbox'
		    		options={this.props.options}
		    	/>
          <br />
          <TextBox
            name="textbox"
          />
          <br />
          Value One:
          <CheckBox 
            name="checkbox"
            value="value1"
          />
          <br />
          <br />
          <SlideBar
            value={5}
            name="slidebar"
          />
          <br />
          <br />
          <input
            type="submit"
            name="submit"
          />
	    	</Formsy.Form>
        <h4>
          You have selected: {this.props.selected}<br />
          You have entered: {this.props.text}<br />
          You have checked: {this.props.checked}<br />
          Slide bar at: {this.props.slidebar}<br />
        </h4>
    	</div>
    );
  }
}
export default App;
