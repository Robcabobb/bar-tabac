import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

import "./Footer.css";

const Footer = () => (
	<div className="app__footer section__padding" id="login">
		<FooterOverlay />
		<Newsletter />

		<div className="app__footer-links">
			<div className="app__footer-links_contact">
				<h1 className="app__footer-headtext">Contact Us</h1>
				<p className="p__opensans">
					3 Av. Du Révérend Père Umbricht, 35400 Saint-Malo, France
				</p>
				<p className="p__opensans">+33 7 67 16 64 89</p>
				<p className="p__opensans"></p>
			</div>

			<div className="app__footer-links_logo">
				<h2 style={{ color: "white" }}>Le Courtoisville</h2>
				<p className="p__opensans">
					&quot;Boire un verre et en boire un autre.&quot;
				</p>
				{/* <img
					src={images.spoon}
					className="spoon__img"
					style={{ marginTop: 15 }}
				/> */}
				<div className="app__footer-links_icons">
					<FiFacebook href="https://www.instagram.com/le_courtoisville/?igshid=YmMyMTA2M2Y="/>
					
					<a href="https://www.instagram.com/le_courtoisville/?igshid=YmMyMTA2M2Y=">
          <FiInstagram />
            </a>
				</div>
			</div>

			<div className="app__footer-links_work">
				<h1 className="app__footer-headtext">Working Hours</h1>
				<p className="p__opensans">Monday-Friday:</p>
				<p className="p__opensans">08:00 am - 12:00 am</p>
				<p className="p__opensans">Saturday-Sunday:</p>
				<p className="p__opensans">07:00 am - 11:00 pm</p>
			</div>
		</div>

		<div className="footer__copyright">
			<p className="p__opensans">2022 Le Courtoisville. All Rights reserved.</p>
		</div>
	</div>
);

export default Footer;
