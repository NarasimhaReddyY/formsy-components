const initialState = {
	selected: '',
	checked: false,
	text: '',
  slidebar: 0
}

export default function manageComponents(state = initialState, action) {
  switch(action.type) {
  	case 'SET_FORMDATA':
  		return Object.assign({},
  			state,
  			{selected: action.values.selectbox},
				{text: action.values.textbox},
				{checked: action.values.checkbox},
        {slidebar: action.values.slidebar}
			);
    default:
      return state;
  }	
}
