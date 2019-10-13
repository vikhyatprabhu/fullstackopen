import React from "react";


const Persons=(props)=>{
  return props.persons.map(person => 
    <div key={person.name}>
    <p > {person.name} {person.number} </p> 
    <button onClick={()=>props.handleDelete(person.id)}>Delete</button>
    </div>
  );
}

export default Persons;
