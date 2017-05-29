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
				<nav className="navbar navbar-default">
					<div className="container">
						<Authentication instagramSessionCode={instagramSessionCode && instagramSessionCode}/>
					</div>
				</nav>
			</div>
		);
	}
}
