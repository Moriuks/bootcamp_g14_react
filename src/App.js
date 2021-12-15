import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

// Components
import NavBar from "./components/NavBar";
import UserName from "./components/UserName";

function App() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const getUsers = async () => {
			const response = await fetch("https://rickandmortyapi.com/api/character");
			console.table(response.results);
			const data = await response.json();
			console.log(data.results);
			setUsers(data.results);
		};

		getUsers();
	}, []);

	const usersUI = users.map(({ id, name, status, species, image }) => (
		<UserName key={id} name={name} status={status} species={species} image={image}   />
	));

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<NavBar />
				{usersUI}
			</header>
		</div>
	);
}

export default App;
