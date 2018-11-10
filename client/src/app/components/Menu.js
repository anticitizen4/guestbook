import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";

function bindProps(Component, propsToBind) {
	return props => <Component {...propsToBind} {...props} />;
}

const props = {
	as: NavLink,
	exact: true,
	activeClassName: "active",
};

const BoundMenuItem = bindProps(Menu.Item, props);

function MainMenu(props) {
	return (
		<Menu>
			<Menu.Item content="guestbook" header />
			<BoundMenuItem to="/" content="reviews" />
			<BoundMenuItem to="/submit" content="submit new review" />
			<BoundMenuItem to="/delete" content="delete reviews" />
		</Menu>
	);
}

export default MainMenu;
