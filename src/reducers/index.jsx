const initialState = {
	selected: '',
	checked: '',
	text: ''
}

export default function manageComponents(state = initialState, action) {
  switch(action.type) {
  	case 'SET_FORMDATA':
  		return Object.assign({},
  			state,
  			{selected: action.values.selectbox},
				{text: action.values.textbox},
				{checked: action.values.checkbox}
			);
    default:
      return state;
  }	
}
