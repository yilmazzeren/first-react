import React, { Component } from 'react';
import './App.css';
import User from "./components/User";
import Navbar from "./components/Navbar";
 class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <hr/>
        <User
          
            name= "Yılmaz Zeren"
            department="Bilişim"
            salary="4000"
        /> 
        <User
          
        name= "Özlem Zeren"
        department="Bilişim"
        salary="4000"
        />
      </div>
    )
  }
}
export default App;