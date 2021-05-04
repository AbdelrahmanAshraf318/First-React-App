import logo from './logo.svg';
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';
import { Component } from 'react';
import Menu from './Components/MenuCompinent';
import {DISHES } from './Shared/dishes';

class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES
    };

  }
  

  render()
  {
    return (
      <div>
          <Navbar dark color="primary">
              <div className="container">
                  <NavbarBrand href="/">
                    Ristornate Con Fusion
                  </NavbarBrand>
              </div>
          </Navbar>
          <Menu dishes = {this.state.dishes} />
      </div>
    );
  }
}

export default App;
