export default (state = {}, action)=> {
	switch (action.type) {
		case "GET_CHANNEL":
			return Object.assign({}, state, {
				channel: action.channel
			})
		default:
			return state
	}
}