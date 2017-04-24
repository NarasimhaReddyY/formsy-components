import { connect } from 'react-redux';
import App from '../../../App.jsx';

const mapStateToProps = state => ({
  // Options dump for select tag
	options: [
		{ label: 'Please Select', value: ''},
  	{ label: "option 1", value: "value1"},
  	{ label: "option 2", value: "value2"},
  	{ label: "option 3", value: "value3"},
  	{ label: "option 4", value: "value4"},
  	{ label: "option 5", value: "value5"},
  	{ label: "option 6", value: "value6"},
  ],
  selected: state.selected,
  checked: state.checked,
  text: state.text,
})

const mapDispatchToProps = dispatch => ({
	handleFormSubmit: (data) => {
    dispatch({type: 'SET_FORMDATA', values: data})
  }
})

const AppContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(App);

export default AppContainer;