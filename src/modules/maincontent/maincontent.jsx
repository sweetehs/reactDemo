import React from "react";
import {
	BrowserRouter as Router,  
	Route,
	Switch,
	Link
} from 'react-router-dom'
import routes from "../config/route.js";

export default class Maincontent extends React.Component{	
	render(){				
		return(							
			<div className="maincontent">
				{routes.map((route,i)=>
					<Route key={i} path={route.path} exact={route.exact} component={route.component} />)
				}											
			</div>			
		)
	}
}