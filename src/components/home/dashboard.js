// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions import
import { fetchUserItems } from '../../actions/items';

// DashboardPage
class DashboardPage extends Component {
	render() {
		return (
			<div className="dashboard">
				Dashboard page
			</div>
		);
	}
}

export default connect(null)(DashboardPage);
