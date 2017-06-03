// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions import
import { fetchUserPhotos, hidePhoto } from '../../actions/photos'
import { fetchUserItems } from '../../actions/items'

// Shows form to add the new items
class NewItemForm extends Component {
	componentWillMount() {
		this.props.fetchUserPhotos();
		this.props.fetchUserItems();
	}

	render() {
		const { photosToProposition, chosenPhotos, items } = this.props
		console.log(items && items[0])
		const imgStyle = (address) => {
			return { backgroundImage: `url(${address})` }
		}

		return (
			<form className="new-item-form">
				<div className="inputs">
					<input type="text" name="title" className="underline-input title-input" placeholder="Item's title" />
					<input type="text" name="price" className="underline-input price-input" placeholder="00.00" />
					<input type="text" name="price-kind" className="underline-input price-kind-input" placeholder="Item's price" value="UAH"/>
				</div>

				<div className="photos-section">
					{
						chosenPhotos.length > 0 &&
						<div className="chosen">
							<div className="title">Chosen photos</div>
							<ul className="inline-list">
								{chosenPhotos.map(photo =>
									<li key={photo.id} className="inline-block">
										<div style={imgStyle(photo.address)} className="photo">
										</div>
									</li>
								)}
							</ul>
							<button className="create-btn btn btn-default">Create</button>
						</div>
					}
					<div className="to-proposition">
						<div className="title">Chose photo for your item</div>
						<ul className="inline-list">
							{photosToProposition && photosToProposition.map(photo =>
								<li key={photo.id} className="inline-block">
									<div style={imgStyle(photo.address)} className="photo" onClick={e => this.props.hidePhoto(photo)}>
									</div>
								</li>
							)}
						</ul>
					</div>
				</div>

				{
					items &&
					<div className="items-list">
						<ul>
							{items.map(item =>
								<li className="item" key={item.id}>
									<h5>{item.name}</h5>
									<p>{item.description}</p>
									<ul>
										{item.photos.map(photo =>
										<div style={imgStyle(photo.address)} className="item-image">
										</div>
										)}
									</ul>
								</li>
							)}
						</ul>
					</div>
				}

			</form>
		);
	}
}

function mapStateToProps(state) {
	return {
		photosToProposition: state.photos.photos,
		chosenPhotos: state.photos.chosenPhotos,
		items: state.items.items
	}
}

export default connect(mapStateToProps, { fetchUserItems, fetchUserPhotos, hidePhoto })(NewItemForm);
