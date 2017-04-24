import React, {Component} from 'react';
import SelectBox from './modules/common/SelectBox.jsx';
import Formsy from 'formsy-react';

class App extends Component {
  render() {
    return (
    	<div>
	      <h1>Hello React :)</h1>
    		<Formsy.Form >
		    	<SelectBox
		    		name='selectbox'
		    		options={this.props.options}
		    	/>
	    	</Formsy.Form>
    	</div>
    );
  }
}
export default App;
