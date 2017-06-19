import axios from 'axios'
export function testUser() {
	return {
		type: "TEST_USER"
	}
}
export function getUser() {
	return function(dispatch) {		
		return axios({
			url: '/user.json'
		}).then((ajaxData) => {
			dispatch({
				type: "GET_USER",
				user: ajaxData.data
			})
		})
	}
}