import React, { Component } from 'react';
import classes from './App.css';
import Section from '../src/components/Section/Section.js';
import Wrapper from '../src/components/hoc/Wrapper';
import Header from '../src/components/Header/Header';

class App extends Component {
  render() {
    console.log('[App.js] inside render');
    return (
      <div>
        <Header />
        <Section />
      </div>
    );
  }
}

export default Wrapper(App, classes);