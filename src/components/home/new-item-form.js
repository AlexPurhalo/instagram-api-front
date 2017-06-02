// Node modules import
import React, { Component } from 'react';

// Shows form to add the new items
export default class NewItemForm extends Component {
	render() {
		return (
			<form className="new-item-form">
				<input type="text" name="title" className="underline-input title-input" placeholder="Item's title" />
				<input type="text" name="price" className="underline-input price-input" placeholder="00.00" />
				<input type="text" name="price-kind" className="underline-input price-kind-input" placeholder="Item's price" value="UAH"/>
			</form>
		);
	}
}
