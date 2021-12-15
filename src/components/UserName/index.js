import React from "react";
import "./userStyles.css";

function UserName({ name, status, species, image }) {
	return (
		<div class="row">
  			<div class="column">
			  <div class="card-img">
		 		<img src={image} alt="Gir" width="200" height="300"/> 
				<div class="card-content">
					<h4><b>{name}</b></h4>
					<p>{status} & {species}</p>
				</div>
			</div>
			</div>
		</div>
		
		
	);
}

export default UserName;
