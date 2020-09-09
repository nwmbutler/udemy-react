import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Nick', age: 36 },
      { name: 'Gary', age: 37 }
    ]
  }

  switchNameHandler = () => {
    console.log('was clicked')
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My Hobbies: The Bass guitar</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
      </div>
    );
  }
}

export default App;
 