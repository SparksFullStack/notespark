import React, { Component } from 'react';
import './App.css';
import NavHeader from './components/NavHeader';
import AllNotes from './components/AllNotes';
import { Route } from 'react-router-dom';

class App extends Component {
  state = {
    notes: []
  }

  render() {
    return (
      <div className="App">
        <NavHeader />
        <Route exact path="/notes" component={() => <AllNotes notes={this.state.notes} />} />
      </div>
    );
  }
}

export default App;
