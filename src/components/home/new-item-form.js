// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Text } from 'react-form'

// Shows form to add the new items
const NewItemForm = ({ items, chosenPhotos, unusedPhotos, imgStyle, hidePhoto }) =>
	<Form>
		<div className="new-item-form">
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
							field="title"
							placeholder="00.00"
							className="underline-input price-input"
						/>
					</li>
					<li className="inline-block">
						<Text
							field="priceKind"
							placeholder="UAH"
							className="underline-input price-input"
						/>
					</li>
				</ul>
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
						{unusedPhotos && unusedPhotos.map(photo =>
							<li key={photo.id} className="inline-block">
								<div style={imgStyle(photo.address)} className="photo" onClick={() => hidePhoto(photo)}>
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
		</div>
	</Form>;

export default NewItemForm;
