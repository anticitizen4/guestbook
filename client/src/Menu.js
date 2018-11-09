import React from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const MainMenu = props => {
	return (
		<Menu>
			<Menu.Item
				as={NavLink}
				to="/"
				exact
				activeClassName="active"
				content="reviews"
			/>
			<Menu.Item
				as={NavLink}
				to="/submit"
				exact
				activeClassName="active"
				content="submit new review"
			/>
			<Menu.Item
				as={NavLink}
				to="/delete"
				exact
				activeClassName="active"
				content="delete reviews"
			/>
		</Menu>
	);
};

export default MainMenu;
