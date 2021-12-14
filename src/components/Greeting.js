import React, { useState, useEffect } from "react";

function Greeting({ firstName, lastName = "" }) {
	console.log("Paso 1 montaje");
	const [fakeName, setFakeName] = useState("Manuel Ramos");
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		console.log("commit de actualización");
	});

	useEffect(() => {
		console.log("Paso 3 commit");
		setIsLoading(false);
		setFakeName("Other name");
	}, []);

	useEffect(() => {
		console.log("commit de actualización del estado fakeName");
	}, [fakeName]);

	console.log("Paso 2 renderizado");
	return (
		<div>
			<h1>Hola {fakeName}</h1>
			<span>
				{isLoading ? "El componente esta cargando" : "El componente ya cargo"}
			</span>
		</div>
	);
}

export default Greeting;
