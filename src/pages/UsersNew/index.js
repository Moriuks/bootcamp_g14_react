import React from "react";
import Input from "../../components/Input";
 

export default function UsersNew() {
    const [firstName, setFirstName] = useState("david");

	return (
    <div className="container flex-col">
        <h1> Crear un usuario</h1>
        <form>
            <Input
                
            />
        </form>
    </div>);
}