// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions import
import { fetchUserPhotos, hidePhoto } from '../../actions/photos'

// Shows form to add the new items
class NewItemForm extends Component {
	componentWillMount() {
		this.props.fetchUserPhotos()
	}

	render() {
		const { photosToProposition, chosenPhotos } = this.props

		const imgStyle = (address) => {
			return { backgroundImage: `url(${address})` }
		}
		console.log(photosToProposition && photosToProposition.length)
		console.log(chosenPhotos)

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
			</form>
		);
	}
}

function mapStateToProps(state) {
	return {
		photosToProposition: state.photos.photos,
		chosenPhotos: state.photos.chosenPhotos
	}
}

export default connect(mapStateToProps, { fetchUserPhotos, hidePhoto })(NewItemForm);
