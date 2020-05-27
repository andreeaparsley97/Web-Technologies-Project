import React from 'react';
import Discography from './discography';
import App from './App';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

class Navbar extends React.Component{
  render() {
      return (
      <div class="navbar">
        <a href="">Home</a>
        <a href="./discography">Discography</a>
        <a href="">Gardening</a>
        <a href="">Contact</a>
      </div>
      );
  }
}

export default Navbar;