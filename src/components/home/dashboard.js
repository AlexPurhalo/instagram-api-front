// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions import
import { fetchUserPhotos, hidePhoto } from '../../actions/photos'
import { fetchUserItems, createItem } from '../../actions/items'

// Components import
import NewItemForm from "./new-item-form";

// DashboardPage
class DashboardPage extends Component {
	componentWillMount() {
		const { fetchUserPhotos, fetchUserItems } = this.props

		fetchUserPhotos();
		fetchUserItems();
	}

	render() {
		const { unusedPhotos, chosenPhotos, items, hidePhoto } = this.props;
		const imgStyle = (address) => ({ backgroundImage: `url(${address})` });

		return (
			<div className="dashboard">
				<NewItemForm
					unusedPhotos={unusedPhotos}
					chosenPhotos={chosenPhotos}
					items={items}
					hidePhoto={hidePhoto}
					imgStyle={imgStyle}
				/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		unusedPhotos: state.photos.photos,
		chosenPhotos: state.photos.chosenPhotos,
		items: state.items.items
	}
}
export default connect(mapStateToProps, { fetchUserItems, fetchUserPhotos, hidePhoto, createItem })(DashboardPage);
