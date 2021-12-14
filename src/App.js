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
			const response = await fetch("users.json");
			console.table(response);
			const data = await response.json();
			console.log(data);
			setUsers(data);
		};

		getUsers();
	}, []);

	const usersUI = users.map(({ id, firstName, lastName }) => (
		<UserName key={id} firstName={firstName} lastName={lastName} />
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
