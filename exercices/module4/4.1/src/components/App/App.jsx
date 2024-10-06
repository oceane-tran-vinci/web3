import { useState } from 'react';

const App = () => {
  // State for storing persons in the phonebook
  const [persons, setPersons] = useState([{ name: 'Arto Hellas', number: '040-1234567' }]);
  
  // State for storing the new name input
  const [newName, setNewName] = useState('');
  
  // State for storing the new number input
  const [newNumber, setNewNumber] = useState('');

  // Handle changes in the name input field
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  // Handle changes in the number input field
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  // Handle form submission to add a new person
  const addPerson = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Check if the name already exists in the phonebook
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    const newPerson = { name: newName, number: newNumber }; // Create a new person object with name and number
    setPersons(persons.concat(newPerson)); // Add the new person to the persons array
    setNewName(''); // Clear the name input field
    setNewNumber(''); // Clear the number input field
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, index) => (
          <li key={index}>{person.name} {person.number}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;