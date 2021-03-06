import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Layout from "./src/hoc/Layout"
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    }; 
  }

  render() {
    return (     
        <Layout ><Hello name={this.state.name} /></Layout>
       
    );
  }
}

render(<App />, document.getElementById('root'));
