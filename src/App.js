import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Nick', age: 36 },
      { name: 'Gary', age: 37 }
    ]
  })

  console.log(personsState)

  const switchNameHandler = () => {
    setPersonsState({
     persons: [
       { name: 'Nicholas', age: 36 },
       { name: 'Gary', age: 37 }
       ] 
     })
   }

    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>My Hobbies: The Bass guitar</Person>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}></Person>
      </div>
    )
  }



export default app;
 

