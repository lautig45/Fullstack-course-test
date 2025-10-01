
const PersonForm = ({ addPerson, newName, handleNameChange, newNumber, handleNumberChange }) => (
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
) 


export default PersonForm