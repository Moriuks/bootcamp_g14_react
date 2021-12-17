import React from "react";

// CSS
import "./Input.css";

function Input({ id, label, value, setValue, type = "text" }) {

	return (
		<div className="input-container">
			<label className="label" htmlFor={id}>
				{label}:
			</label>
			<input
				id={id}
				className="input"
				onChange={(event) => setValue(event.target.value)}
				value={value}
			/>
            <input
				id={id}
                type = {type}
				className="input"
				onChange={(event) => setValue(event.target.value)}
				value={value}
			/>
            <select  onChange={(event) => setValue(event.target.value)} value={value}>
                    <option value="grapefruit">Male</option>
                    <option value="lime">Gender</option>
            </select>
		</div>
	);
}

export default Input;