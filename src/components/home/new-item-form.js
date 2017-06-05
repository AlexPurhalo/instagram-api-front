// Node modules import
import React from 'react';
import { connect } from 'react-redux';
import { Form, Text } from 'react-form'

// Shows form to add the new items
const NewItemForm = (
	{
		data: { items, photos },
		actions: { styleImg, hidePhoto, addValue, submitForm }
	}
) => {
	return (
		<form className="new-item-form" onSubmit={submitForm}>
			<div className="inputs">
				<ul className="inline-list">
					<li className="inline-block">
						<Text
							field="title"
							placeholder="Item's title"
							className="underline-input title-input"
						/>
					</li>
					<li className="inline-block">
						<Text
							field="price"
							placeholder="00.00"
							className="underline-input price-input"
						/>
					</li>
					<li className="inline-block">
						<Text
							field="price_kind"
							placeholder="UAH"
							className="underline-input price-input"
						/>
					</li>
				</ul>
			</div>
			<div className="photos-section">
				{
					photos.chosen.length > 0 &&
					<div className="chosen">
						<div className="title">Chosen photos</div>
						<ul className="inline-list">
							{photos.chosen.map(photo =>
								<li key={photo.id} className="inline-block">
									<div style={styleImg(photo.address)} className="photo">
									</div>
								</li>
							)}
						</ul>
						<button type='submit' className="create-btn btn btn-default">Create</button>
					</div>
				}
				<div className="to-proposition">
					<div className="title">Chose photo for your item</div>
					<ul className="inline-list">
						{photos.unused && photos.unused.map(photo =>
							<li key={photo.id} className="inline-block">
								<div style={styleImg(photo.address)} className="photo" onClick={() => hidePhoto(photo, addValue)}>
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
								<ul className="inline-list">
									{item.photos.map(photo =>
										<li style={styleImg(photo.address)} className="inline-block item-image">
										</li>
									)}
								</ul>
							</li>
						)}
					</ul>
				</div>
			}
		</form>
	)
}


export default NewItemForm;

