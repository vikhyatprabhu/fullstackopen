import React, { useState ,useEffect} from 'react'
import Persons from './components/Persons'
import SearchFilter from './components/SearchFilter'
import PersonForm from './components/PersonForm'

import axios from "axios";

const App = () => {
  const [ persons, setPersons] = useState([]);
  
  useEffect(()=>{
    axios.get("http://localhost:3001/persons")
    .then( response=>
      setPersons(response.data)
    )

  },[]);
  const [ newName, setNewName ] = useState('')
  const [ newPhoneNumber, setNewPhoneNumber ] = useState('')
  const [filterText,setFilterText]= useState('')

  const handleSubmit=(event)=>{
    event.preventDefault();
    if(persons.map(person=>person.name).includes(newName)){
      alert(`${newName} is already added to phonebook`)
    } else{
    setPersons(persons.concat({name:newName, number:newPhoneNumber}))
    }
    setNewName('')
    setNewPhoneNumber('')
  }

  const handleNameChange=(event)=>{
    setNewName(event.target.value);
  }
  const handleNumberChange=(event)=>{
    setNewPhoneNumber(event.target.value);
  }

  const handleFilterTextChange=(event)=>{
    setFilterText(event.target.value);
  }
  let displayList=[...persons]
  if(filterText.length>0){
    displayList=persons.filter(person => person.name.includes(filterText))
  } 

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchFilter filterText={filterText} handleFilterTextChange={handleFilterTextChange}/>
      <PersonForm newName={newName} 
                 newPhoneNumber={newPhoneNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} handleSubmit={handleSubmit}/>
      <h2>Numbers</h2>
      <Persons persons={displayList}> </Persons> 
    </div>
  )
}

export default App