import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import images from "../../constants/images";

import "./Navbar.css";

const Navbar = () => (
	<nav className="app__navbar">
		<div className="app__navbar-title">
			<h1>Le COURTOISVILLE</h1>
		</div>
		<ul className="app__navbar-links">
			<li className="p__opensans">
				<a href="#home">Accueil</a>
			</li>
			<li className="p__opensans">
				<a href="#about">Présentation</a>
			</li>
			<li className="p__opensans">
				<a href="#menu">Menu</a>
			</li>
			<li className="p__opensans">
				<a href="#contact">Contactez</a>
			</li>
		</ul>
		<div className="app__navbar-login">
			<a href="#login" className="p__opensans">
				Se connecter / Créer un compte
			</a>
			<div />
			<a href="/" className="p__opensans">
				réserver une table
			</a>
		</div>
		<div className="app__nabvar-smallscreen">
			<GiHamburgerMenu color="#fff" fontSize={27} onClick={() => {}} />
			<div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
				<MdOutlineRestaurantMenu
					fontSize={27}
					className="overlay__close"
					onClick={() => {}}
				/>
			<ul className="app__navbar-smallscreen-links">
				<li className="p__opensans">
					<a href="#home">Accueil</a>
				</li>
				<li className="p__opensans">
					<a href="#about">Présentation</a>
				</li>
				<li className="p__opensans">
					<a href="#menu">Menu</a>
				</li>
				<li className="p__opensans">
					<a href="#contact">Contactez</a>
				</li>
			</ul>
			</div>
		</div>
	</nav>
);

export default Navbar;
