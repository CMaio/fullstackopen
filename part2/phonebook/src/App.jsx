import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import personsService from "./services/persons";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);

  const [filteredPersons, setFilteredPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [filterName, setFilterName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [notificationMessage, setNotificationMessage] = useState(null);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    personsService.getAll().then((initialAgenda) => {
      console.log("promise fulfilled", initialAgenda);
      setPersons(initialAgenda);
      setFilteredPersons(initialAgenda);
    });
  }, []);

  const handleNewFilter = (event) => {
    setFilterName(event.target.value);

    let filtered = persons.reduce(function (filterArray, person) {
      if (
        person.name.toLowerCase().includes(event.target.value.toLowerCase())
      ) {
        filterArray.push(person);
      }

      return filterArray;
    }, []);

    setFilteredPersons(filtered);
  };

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();

    const newPerson = {
      name: newName,
      number: newNumber,
    };
    const modifingPerson = persons.find((person) => person.name === newName);
    if (modifingPerson !== undefined) {
      if (
        confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        const changedPerson = { ...modifingPerson, number: newNumber };
        personsService
          .update(changedPerson.id, changedPerson)
          .then((returnedPerson) => {
            let updatedList = persons.map((person) =>
              person.id !== changedPerson.id ? person : returnedPerson
            );
            setPersons(updatedList);
            setFilteredPersons(updatedList);
            enableNotification(
              `${returnedPerson.name} has been updated`,
              false
            );
          })
          .catch((error) => {
            enableNotification(
              `The user ${changedPerson.name} you try to update is already removed from the server `,
              true
            );
            let updatedList = persons.filter((n) => n.id !== changedPerson.id);
            setPersons(updatedList);
            setFilteredPersons(updatedList);
            console.log(error);
          });
      }
      setNewName("");
      setNewNumber("");
    } else {
      personsService.create(newPerson).then((returnedPerson) => {
        let updatedList = persons.concat(returnedPerson);
        setPersons(updatedList);
        setNewName("");
        setNewNumber("");
        setFilteredPersons(updatedList);
        enableNotification(
          `${returnedPerson.name} has been added to the list`,
          false
        );
      });
    }
  };

  const removePerson = (person) => {
    if (confirm(`Do you want to delete ${person.name}?`)) {
      personsService.remove(person.id).then(() => {
        console.log("Person deleted");
        const updatedList = persons.filter((p) => p.id !== person.id);
        setPersons(updatedList);
        setFilteredPersons(updatedList);
      });
    }
  };

  const enableNotification = (message, isError) => {
    setNotificationMessage(message);
    setIsError(isError);
    console.log(message);

    setTimeout(() => {
      setNotificationMessage(null);
      setIsError(false);
    }, 5000);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMessage} isError={isError} />
      <Filter filterName={filterName} handleNewFilter={handleNewFilter} />

      <h2>Add a new </h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNewName={handleNewName}
        newNumber={newNumber}
        handleNewNumber={handleNewNumber}
      />

      <h2>Numbers</h2>
      <Persons agenda={filteredPersons} removePerson={removePerson} />
    </div>
  );
};

export default App;
