// Node modules import
import React, { Component } from 'react';
import Header from './layout/header';
import { connect } from 'react-redux'

// Layout component
 class App extends Component {
	constructor() {
		super();

		this.instagramSessionCode = null
	}

	componentWillMount() {
		this.props.location.query.code && (this.instagramSessionCode = this.props.location.query.code)
	}

	render () {
		return (
			<div className="app">
				<Header instagramSessionCode={this.instagramSessionCode} />
				<div className="container">
					{this.props.children}
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		isAuthenticated: state.sessions.authenticated
	}
}
export default connect(mapStateToProps)(App);
