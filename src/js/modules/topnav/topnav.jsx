import React from 'react'
import User from '../user/user.jsx';
export default class Topnav extends React.Component{
	constructor(props) {
		super(props);		
	}
	render(){		
		return (
			<div>
				<User />
			</div>
		)
	}
}