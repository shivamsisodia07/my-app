import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { DISHES } from "./shared/dishes";
import Menu from "./components/MenuComponen";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    };
  }
  render() {
    return (
      <div className='App'>
        <Navbar dark color='primary'>
          <div className='container'>
            <NavbarBrand href='/'>reactstrap</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App;
