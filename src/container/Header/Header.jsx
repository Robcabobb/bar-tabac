import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
	<div className="app__header app__wrapper section__padding" id="home">
		<div className="app__wrapper_info">
			<SubHeading
				title="On ne vit qu'une fois
"
			/>
			<h1 className="app__header-h1">
				boire une bonne bière avec de bons amis
			</h1>
			<p className="p__opensans" style={{ margin: "2rem 0" }}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
				consequatur itaque dolor autem, hic rerum impedit neque consequuntur
				eius. Excepturi fugit blanditiis nostrum laboriosam ullam dolorum
				tenetur labore ad a!
			</p>
			<button type="button" className="custom__button">
				explorer le menu
			</button>
		</div>

  <div className=""></div>

		<div className="app__wrapper_img"></div>
	</div>
);

export default Header;
