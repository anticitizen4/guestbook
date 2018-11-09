import React from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

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
			<BoundMenuItem to="/" content="reviews" />
			<BoundMenuItem to="/submit" content="submit new review" />
			<BoundMenuItem to="/delete" content="delete reviews" />
		</Menu>
	);
}

export default MainMenu;