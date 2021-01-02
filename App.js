import React,{Component} from 'react';
import CardList from '../components/CardList.js';
import {robos} from '../components/robos.js';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/scroll';
import ErrorBoundry from '../components/ErrorBoundry';

class App extends Component{
	constructor(){
	super()
	this.state = {
		robos: [],
		searchField: '',
	}
}

componentDidMount() {
   setTimeout(() => this.setState({robos : robos}),1000) 
}

onSearchChange = (event) =>{
	this.setState({searchField:event.target.value})
}

render(){
	const {robos,searchField} = this.state;
	const filteredRobos = robos.filter(robo =>{
		return robo.name.toLowerCase().includes(searchField.toLowerCase());
	});
	return !robos.length ? <h2 className='tc'>Loading</h2> :
		<div className='tc'>
			<h1 className='tc'>RoboFriends</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<Scroll>
				<ErrorBoundry>
					<CardList robos={filteredRobos}/>
				</ErrorBoundry>
			</Scroll>
		</div>
	}
}

export default App;