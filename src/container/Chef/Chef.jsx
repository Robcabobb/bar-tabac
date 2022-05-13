import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
	<div className="app__bg app__wrapper section__padding">
		<div className="app__wrapper_img app__wrapper_img-reverse">
			<img src={images.owner} alt="chef" srcset="" />
		</div>
		<div className="app__wrapper_info">
			<SubHeading title="Owner's word" />
			<h1 className="headtext__cormorant">What we believe in</h1>
			<div className="app__chef-content">
				<div className="app__chef-content_quote">
					<img src={images.quote} alt="quote" />
					<p className="p__opensans">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia,
						quam. Aperiam officiis dicta neque voluptates dolorum dignissimos
						possimus repellat.
					</p>
				</div>
				<p className="p__opensans">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tenetur
					expedita ex facilis atque nostrum id.
				</p>
			</div>
      <div className="app__chef-sign">
        <p>Laurent Houzé</p>
        <p className="p__opensans">Owner</p>
        <img src={images.sign} alt="sign_image" />
      </div>
		</div>
	</div>
);

export default Chef;
