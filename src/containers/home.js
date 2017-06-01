// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux'

// Components import
import PresentationPage  from '../components/home/presentation'
import DashboardPage  from '../components/home/dashboard'

// Home Page
class HomePage extends Component {
	render() {
		return (
			<div className="home-page">
				{this.props.isAuthenticated ? <DashboardPage /> : <PresentationPage />}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		isAuthenticated: state.sessions.authenticated
	}
}
export default connect(mapStateToProps)(HomePage);
