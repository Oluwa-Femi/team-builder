import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';
import TeamList from './Components/Teamlist';
import data from './data'

function App() {
  const [members, setMembers] = useState(data);

  const addNewPerson = person => {
    setMembers([...members, person])
  }

  return (
    <div>
      <h1>Web U3 Anna</h1>
      <TeamList teamList={members} />
      <Form addNewPerson={addNewPerson} />
    </div>
  );
}

export default App;
