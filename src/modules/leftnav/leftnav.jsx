import React from 'react';
import routes from "../config/route.js";
import { Link } from 'react-router-dom'
// Component  && PureComponent
export default class Leftnav extends React.PureComponent{
	constructor(props) {
		super(props);		
	}
	render(){		
		return (
			<div>
				<ul>
					{routes.map((route,i)=>
						<li key={i}><Link to={route.path}>{route.name}</Link></li>
					)}
				</ul>						
			</div>			
		)
	}
}