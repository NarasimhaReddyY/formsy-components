// Application entrypoint.

// Load up the application styles
require("../styles/application.scss");

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import manageComponents from './reducers/index.jsx';
import AppContainer from './modules/formsy/containers/AppContainer.jsx';

const store = createStore(manageComponents);

ReactDOM.render(
	<Provider store={store}>
		<AppContainer />
	</Provider>, 
	document.getElementById('react-root')
);
