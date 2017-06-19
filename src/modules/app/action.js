import axios from 'axios';
export function getChannel() {
	return function(dispatch) {
		return axios({
			url: "/channel.json"
		}).then((ajaxData) => {
			dispatch({
				type: "GET_CHANNEL",
				channel: ajaxData.data
			})
		})
	}
}