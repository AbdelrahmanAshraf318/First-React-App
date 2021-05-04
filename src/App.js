import logo from './logo.svg';
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';
import { Component } from 'react';
import Menu from './Components/MenuCompinent';

class App extends Component{

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
          <Menu />
      </div>
    );
  }
}

export default App;
