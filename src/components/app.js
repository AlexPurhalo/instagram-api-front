// Node modules import
import React, { Component } from 'react';
import Header from './layout/header';

// Layout component
export default class App extends Component {
	constructor() {
		super();

		this.instagramSessionCode = null
	}

	componentWillMount() {
		this.props.location.query.code && (this.instagramSessionCode = this.props.location.query.code)
		// browserHistory.push('/')
	}

	render () {
		return (
			<div className="container">
				<Header instagramSessionCode={this.instagramSessionCode} />
				{this.props.children}
			</div>
		)
	}
}
