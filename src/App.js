import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

// Components
import NavBar from "./components/NavBar";
import UserName from "./components/UserName";

function App() {
	const [users, setUsers] = useState([]);
	const [data] = useState({});

	useEffect(() => {
		// const getUsers = async () => {
		// 	const response = await fetch("https://rickandmortyapi.com/api/character");
		// 	console.table(response.results);
		// 	const data = await response.json();
		// 	console.log(data.results);
		// 	setUsers(data.results);
		// };

		getUsers();
	}, []);

	const usersUI = users.map(({ id, name, status, species, image }) => (
		<UserName key={id} name={name} status={status} species={species} image={image}   />
	));

	const getUsers = async (page) => {
		console.log('Entro por otra dosis');
		const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
		console.table(response.results);
		const data = await response.json();
		console.log(data.results);
		setUsers(data.results);
	};

	const handleClick = async (action) => {
		console.log('botonazo');
		if (action === "next" && data.next != null) {
			const page = data.next.split("?")[1];
			const res = await getUsers(page);
			console.log(res);
			// setCharacters(results);
			// setData(info);
		}
	};

	return (
		<div className="App">
			<div className="fixed-container">
				<button onClick={() => handleClick("Prev")} className="btn">
					Prev
				</button>
				<button onClick={() => handleClick("next")} className="btn">
					Next
				</button>
			</div>
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<NavBar />
				{usersUI}
			</header>
		</div>
	);
}

export default App;
