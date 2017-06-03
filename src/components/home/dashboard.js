// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components import
import NewItemForm from "./new-item-form";

// DashboardPage
class DashboardPage extends Component {
	componentWillMount() {
		const { itemsCount } = this.props

		itemsCount && itemsCount && console.log('works')
	}

	render() {
		const { itemsCount } = this.props

		return (
			<div className="dashboard">
				{
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
