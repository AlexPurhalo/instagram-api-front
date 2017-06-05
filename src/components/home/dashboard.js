// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'react-form'

// Actions import
import { fetchUserPhotos, hidePhoto } from '../../actions/photos'
import { fetchUserItems, createItem } from '../../actions/items'

// Components import
import NewItemForm from "./new-item-form";

// DashboardPage
class DashboardPage extends Component {
	componentWillMount() {
		const { fetchUserPhotos, fetchUserItems } = this.props;

		fetchUserPhotos();
		fetchUserItems();
	}

	hidePhoto = (photo, addValue) => {
		addValue('pictures', photo);
		this.props.hidePhoto(photo)
	};

	createItem = (values) => {
		console.log(values)
		this.props.createItem(values);
	}

	styleImg = (address) => ({ backgroundImage: `url(${address})` });

	render() {
		const { unusedPhotos, chosenPhotos, items } = this.props;

		return (
			<div className="dashboard">
				<Form onSubmit={(values) => this.createItem(values)}>
					{({ submitForm, addValue }) =>
						<NewItemForm
							data={{items, photos: {
								unused: unusedPhotos,
								chosen: chosenPhotos
							}}}
							actions={{
								addValue,
								submitForm,
								hidePhoto: this.hidePhoto,
								styleImg: this.styleImg
							}}
						/>
					}
				</Form>
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
