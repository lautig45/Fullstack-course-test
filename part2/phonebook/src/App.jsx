import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
    }

    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    setPersons(persons.concat(nameObject))
    setNewName('')
  }
  
  const addPerson = (event) => {
    event.preventDefault()
    const numberObject = {
      number: newNumber,
      name: newName
    }

    if (persons.some(person => person.number === newNumber)) {
      alert(`${newNumber} is already added to phonebook`)
      return
    }
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    setPersons(persons.concat(numberObject))
    setNewName('')
    setNewNumber('')
  }


  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  } 
  
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}  >
        <div>
          name: <input type="text" defaultValue="Name here" onChange={handleNameChange} value={newName}/>
          <br />
          number <input type="text" defaultValue="Number here" onChange={handleNumberChange} value={newNumber}/>
        </div>
        
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <p key={person.name}>{person.name}{" "}{person.number}</p>)}
    </div>
  )
}

export default App

