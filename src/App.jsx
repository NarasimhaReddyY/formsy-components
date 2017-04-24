import React, {Component} from 'react';
import SelectBox from './modules/common/SelectBox.jsx';
import TextBox from './modules/common/TextBox.jsx';
import CheckBox  from './modules/common/CheckBox.jsx';
import Formsy from 'formsy-react';

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
          Value Two:
          <CheckBox 
            name="checkbox"
            value="value2"
          />

          <input
            type="submit"
          />
	    	</Formsy.Form>
        <h4>
          You have selected: {this.props.selected}<br />
          You have entered: {this.props.text}<br />
          You have checked: {this.props.checked}<br />
        </h4>
    	</div>
    );
  }
}
export default App;
