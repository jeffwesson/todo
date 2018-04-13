import React, { Component } from 'react';
import Todo from './components/Todo';
import './App.css';

class App extends Component {
	render() {
		const items = [ 'one', 'two', 'three' ];
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Todo</h1>
				</header>
				<ul>
					{
						items.map((item, i) => (
							<Todo key={i} text={item} />
						))
					}
				</ul>
			</div>
		);
	}
}

export default App;
