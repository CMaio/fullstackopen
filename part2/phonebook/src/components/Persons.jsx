const Contact = ({ person, removePerson }) => {
  return (
    <div>
      <p>
        {person.name} {person.number}{" "}
        <button onClick={() => removePerson(person)}>Delete</button>
      </p>
    </div>
  );
};

const Persons = ({ agenda, removePerson }) => {
  return (
    <div>
      {agenda.map((person) => (
        <Contact key={person.id} person={person} removePerson={removePerson} />
      ))}
    </div>
  );
};

export default Persons;
