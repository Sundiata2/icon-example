import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FortyFiveDead from './icons/forty-five';
import PersonIcon from './icons/person';
import FrontMountain from './icons/mountainIcon';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <FrontMountain height={200} width={200} color={"#e311c0"} />
          <p>
            Example of icons in <code>Nucleo</code>.
          </p>

          {/* Can change the icon height and color based off props
              generic icon can be another problem to solve
          */}
          <FortyFiveDead height={45} width={45} color={"#f82020"} />
          <PersonIcon height={16} width={16} color={"#75a22f"} />
        </header>
      </div>
    );
  }
}

export default App;
