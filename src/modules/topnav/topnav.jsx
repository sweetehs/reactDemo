import React from 'react'
import User from '../user/user.jsx';
export default class Topnav extends React.Component{
	constructor(props) {
		super(props);		
	}
	render(){				
		if(this.props.channel){
			return (
				<div>
					<User />
					<div>
						{
							this.props.channel.map((c,i)=>
								<p key={i}>{c.name}</p>
							)
						}
					</div>
				</div>
			)
		}else{
			return (<div></div>)
		}
		
	}
}