import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Calendar from './components/Calendar'
import Tasks from './components/Tasks'
class App extends Component {
  
 
  render() {
    return (
      <div className="App">
        <header>
          <h1>React Calendar</h1>
        </header>
         
        
        <main>
          <Calendar />
        </main> 
      </div>
    );
  }
}

export default App;
