import React from "react";
import { useState } from "react/cjs/react.development";
import Input from "../../components/Input";
 
// CSS
import "./UsersNew.css";

export default function UsersNew() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
    const [occupation, setoccupation] = useState("");
	const [gender, setGender] = useState("Male");
    const [birthdate, setBirthdate] = useState("");

    
    
    return (
		<div className="container flex-col">
			<h1>Crea un usuario</h1>
			<form>
				<Input
					id="firstName"
					label="First Name"
					value={firstName}
					setValue={setFirstName}
				/>
				<Input
					id="lastName"
					label="Last Name"
					value={lastName}
					setValue={setLastName}
				/>
                <Input
					id="occupation"
					label="Occupation"
					value={occupation}
					setValue={setoccupation}
				/>
                <Input
					id="birthdate"
                    type="date"
					label="Birthdate"
					value={birthdate}
					setValue={setBirthdate}
				/>
                <Input
					id="gender"
					label="Gender"
					value={gender}
					setValue={setGender}
				/>
                
                
                {/* gender
                occupation
                birthdate */}
			</form>
		</div>
	);
}