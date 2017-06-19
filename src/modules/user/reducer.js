export default (state = {}, action)=> {
	switch (action.type) {
		case "TEST_USER":
			return Object.assign({}, state, {
				user: {
					name: "TEST_USER"
				}
			})
		case "GET_USER":
			return Object.assign({}, state, {
				user: action.user
			})
		default:
			return state
	}
}