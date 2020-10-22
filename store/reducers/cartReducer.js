let INITIAL_STATE = {
	products: [],
};

let cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'ADD_PRODUCT':
			let found = state.products.find(prod => prod.id == action.value.id);
			if(found) {
				found.nomberProduct += 1
				const add = state.products.map(obj => {
					if(obj.id == found.id) return found;
					return obj
				});
				return { ...state, products: add };
			} else {
				return { ...state, products: [...state.products, action.value] };
			}
			
		case 'REMOVE_PRODUCT':
			return {
				...state,
				products: state.products.filter(
					(value) => value.name != action.value.name
				),
			};
		default:
			return state;
	} 
};

export default cartReducer;
