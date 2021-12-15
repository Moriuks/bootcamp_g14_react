import React from "react";

function UserName({ name, status, species, image }) {
	return (
		<div>
		 	<img src={image} alt="Gir" width="200" height="300"/> 
			<h1>
				{name}
			</h1>
			<p>
			    {status} {species}
			</p>
		</div>
		
	);
}

export default UserName;
