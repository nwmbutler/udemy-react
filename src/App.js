import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Nick', age: 36 },
      { name: 'Gary', age: 37 }
    ],
    showPerson: false
  }

  switchNameHandler = (newName) => {
   // console.log('was clicked')
   // DONT DO THIS this.state.persons[0].name = "Nicholas";
   this.setState({
    persons: [
      { name: newName, age: 36 },
      { name: 'Gary', age: 37 }
      ] 
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow});
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Nick', age: 36 },
        { name: event.target.value, age: 37 }
        ] 
      })
  }

  render() {
    const style = {
      backgroundColour: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <button
          style={style}
          onClick={this.togglePersonHandler}>Switch Name</button>
        { this.state.showPerson === true ? 
          <div>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Nick!!!!')} >My Hobbies: The Bass guitar </Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
            changed={this.nameChangedHandler} />
          </div> : null
          }
      </div>
    );
  }
}

export default App;
 