import React, { Component } from 'react';
// import {Router, Link, Route} from 'react-router-dom'
import classes from './../src/components/Section/Section.css';
import Section from '../src/components/Section/Section.js';
import Nav from '../src/components/Nav/Nav';
import Wrapper from '../src/components/hoc/Wrapper';
import Header from '../src/components/Header/Header';

class App extends Component {
  state= {
    pages: [
      {
        name: 'Header'
      },
      {
        name: 'Campaign'
      },
      {
        name: 'About Us'
      },
      {
        name: 'Contact'
      }
    ],
    activePage: ''
  }

  changePage = (event) => {
    this.state.pages.map((page, index) => {
      this.setState({activePage: `${page.name}`})
    })
    console.log(this.state.activePage)
  }

  render() {
    console.log('[App.js] inside render');
    const activePage = [];

    return (
      <div>
        <Section>
          <Nav />
          {activePage}
          <Header />
          <button onClick={this.changePage} className={classes.next}>Next</button>
        </Section>
      </div>
    );
  }
}

export default Wrapper(App, classes);