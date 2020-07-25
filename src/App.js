import React, { Component } from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent'
import {DISHES} from './shared/dishes'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      getdishes : DISHES
    }
  }

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes = {this.state.getdishes} />
      </div>
    );
  }
}

export default App;
