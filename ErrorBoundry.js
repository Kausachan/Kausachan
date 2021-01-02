import React, {Component} from 'react';

class ErrorBoundry extends Component{
	constructor(props){
		super(props);
		this.state = {
			error : false
		}
	}
	componentDidCatch(error, info){
		this.setState({error : true});
	}
	render(){
		if(this.state.error)
		{
			return <h1>Failed to connect try again after sometime</h1>;
		}
		return this.props.children;
	}
}

export default ErrorBoundry;