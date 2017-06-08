import React from 'react';
import { connect } from 'react-redux';
import * as userAction from './action';
class User extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {	
    	this.props.getUser();
    	// this.props.dispatch(userAction.getUser())
  	}
  	alert(){
  		this.props.getUser();
  	}
	render(){		
		return (
			<div onClick={()=>{
				this.alert();
			}}>Hi: {this.props.user.name}</div>
		)
	}
}
export default connect(function(state){	
	return {
		user: state.userReducer.user || {}
	}
},userAction)(User)