import React, { Component } from 'react';
import classes from './App.css';
import Nav from '../src/components/Nav/Nav';
import Section from '../src/components/Section/Section.js';
import Wrapper from '../src/components/hoc/Wrapper';

class App extends Component {
  render() {
    console.log('[App.js] inside render');
    return (
      <div>
        <Nav />
        <Section />
      </div>
    );
  }
}

export default Wrapper(App, classes);