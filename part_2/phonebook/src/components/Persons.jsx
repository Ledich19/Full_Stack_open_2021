import React from "react";

const Persons = ({ personShow }) => {
	return <div>
    {personShow.map(person => <div key={person.name} >{person.name}: {person.number}</div>)}
  </div>
}

export default Persons