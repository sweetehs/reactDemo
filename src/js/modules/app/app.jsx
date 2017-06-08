import React from 'react';

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
			<div className="main">
				<div className="topnav-wrapper">
					<Topnav />
				</div>
				<div className="bottom-wrapper">
					<div className="leftnav-wrapper">
						<Leftnav />
					</div>
					<div className="content-wrapper">
						<Maincontent channellist={this.props.channel} />
					</div>
				</div>
			</div>
		)
	}
}
export default connect(function(state){
	return {
		channel:state.appReducer.channel
	}
},appAction)(App);