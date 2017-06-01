// Node modules import
import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

// Components import
import Authentication from './header/authentication';

// Shows navigation bar for user
export default class Header extends Component {
	render() {
		let instagramSessionCode = this.props.instagramSessionCode

		return (
			<div className="header">
				<div className="container">
					<Authentication instagramSessionCode={instagramSessionCode && instagramSessionCode}/>
				</div>
			</div>
		);
	}
}
