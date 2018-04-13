import React, { Component } from 'react';
import styles from './main.css';

export default class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = { done: false };
	}

	render() {
		const { text } = this.props;
		return (
			<li className={styles.todo}>{text}</li>
		)
	}
}
