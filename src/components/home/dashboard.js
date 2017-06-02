// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components import
import NewItemForm from "./new-item-form";

// Actions import


// DashboardPage
class DashboardPage extends Component {
	render() {
		const { itemsCount } = this.props

		return (
			<div className="dashboard">
				{
					itemsCount && itemsCount < 2 &&
					<NewItemForm />
				}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		itemsCount: state.sessions.profile.itemsCount
	}
}

export default connect(mapStateToProps)(DashboardPage);
