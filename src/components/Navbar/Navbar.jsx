import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

	return (
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

			<div className="app__navbar-smallscreen">
				<GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
			
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Accueil</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>Présentation</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contactez</a></li>
            </ul>
          </div>
        )}


			</div>
		</nav>
	);
};

export default Navbar;
