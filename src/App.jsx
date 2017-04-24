import React, {Component} from 'react';
import SelectBox from './modules/common/SelectBox.jsx';

class App extends Component {
  render() {
  	// This is just for testing. Will remooved in future commits.
		let options = [
	  	{ label: "option 1", value: "value1"},
	  	{ label: "option 2", value: "value2"},
	  	{ label: "option 3", value: "value3"},
	  	{ label: "option 4", value: "value4"},
	  	{ label: "option 5", value: "value5"},
	  	{ label: "option 6", value: "value6"},
	  ]

    return (
    	<div>
	      <h1>Hello React :)</h1>
	    	<SelectBox options={options} />
    	</div>
    );
  }
}
export default App;
