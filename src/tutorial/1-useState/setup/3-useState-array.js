import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
	const [people, setPeople] = React.useState(data);
	const removeItem = (id) => {
		// let newPeople = people.filter((person) => person.id !== id);
		// setPeople(newPeople);
		setPeople(people.filter((person) => person.id !== id));
	};

	return (
		<>
			<h2>useState array example</h2>;
			{people.map((person) => {
				const { id, name } = person;
				return (
					<div key={id} className="item">
						<h4>{name}</h4>
						<button className="btn" onClick={() => removeItem(id)}>
							remove
						</button>
					</div>
				);
			})}
			<button clasName="btn" onClick={() => setPeople([])}>
				Clear all items
			</button>
		</>
	);
};

export default UseStateArray;
