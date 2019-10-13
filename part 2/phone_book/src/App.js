import React, { useState, useEffect } from "react";
import Persons from "./components/Persons";
import SearchFilter from "./components/SearchFilter";
import PersonForm from "./components/PersonForm";
import personService from "./services/personService";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    personService.getAll().then(persons => setPersons(persons));
  }, []);
  const [newName, setNewName] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const [filterText, setFilterText] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    if (persons.map(person => person.name).includes(newName)) {
      let person = persons.find(person => person.name === newName);
      if (person.number !== newPhoneNumber) {
        if (
          window.confirm(
            person.name +
              " already exists in the phonebook,replace the old number with a new one?"
          )
        ) {
          personService
            .update(person.id, { ...person, number: newPhoneNumber })
            .then(newPerson => {
              setPersons(
                persons.map(currentPerson =>
                  person.id !== currentPerson.id ? currentPerson : newPerson
                )
              )
              setNotification({
                message: `Person '${person.name}' was updated`,
                type: "success"
              });
              setTimeout(() => {
                setNotification(null);
              }, 5000);


                }


            );
        }
      } else {
        alert(person.name + " already exists");
      }
    } else {
      personService
        .create({ name: newName, number: newPhoneNumber })
        .then(newPerson => {
          setPersons(persons.concat(newPerson));
          setNotification(
            {message:`Person ${newPerson.name} was added`,type:"success"}
          )
          setTimeout(() => {
            setNotification(null)
          }, 5000)
        });
    }
    setNewName("");
    setNewPhoneNumber("");
  };

  const handleNameChange = event => {
    setNewName(event.target.value);
  };
  const handleNumberChange = event => {
    setNewPhoneNumber(event.target.value);
  };

  const handleFilterTextChange = event => {
    setFilterText(event.target.value);
  };

  const handlePersonDelete = id => {
    let person = persons.find(person => person.id === id);
    if (window.confirm("Are you sure you want to delete " + person.name)) {
      personService
        .remove(id)
        .then(response => {
          setPersons(persons.filter(p => p.id !== id));
        })
        .catch(error => {
          setNotification({
            message: `Person '${person.name}' was already removed from server`,
            type: "error"
          });
          setTimeout(() => {
            setNotification(null);
          }, 5000);
          setPersons(persons.filter(p => p.id !== person.id));
        });
    }
  };

  let displayList = [...persons];
  if (filterText.length > 0) {
    displayList = persons.filter(person => person.name.includes(filterText));
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification notification={notification} />
      <SearchFilter
        filterText={filterText}
        handleFilterTextChange={handleFilterTextChange}
      />
      <PersonForm
        newName={newName}
        newPhoneNumber={newPhoneNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        handleSubmit={handleSubmit}
      />
      <h2>Numbers</h2>
      <Persons persons={displayList} handleDelete={handlePersonDelete}>
        {" "}
      </Persons>
    </div>
  );
};

export default App;
