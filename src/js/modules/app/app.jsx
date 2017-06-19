import React from 'react';
// BrowserRouter && HashRouter
import {
  HashRouter as Router,
  hashHistory
} from 'react-router-dom'
import {connect} from 'react-redux';
import * as appAction from './action'

import Topnav from "../topnav/topnav.jsx";
import Leftnav from "../leftnav/leftnav.jsx";
import Maincontent from "../maincontent/maincontent.jsx";

class App extends React.Component{
	componentDidMount() {
		this.props.getChannel();
	}
	render(){								
		return (
			<Router history={hashHistory}>
				<div className="main">					
					<div className="topnav-wrapper">
						<Topnav channel={this.props.channel}/>
					</div>
					<div className="bottom-wrapper">
						<div className="leftnav-wrapper">
							<Leftnav/>
						</div>
						<div className="content-wrapper">
							<Maincontent />
						</div>
					</div>
				</div>
			</Router>
		)
	}
}
export default connect(function(state){
	return {
		channel:state.appReducer.channel
	}
},appAction)(App);