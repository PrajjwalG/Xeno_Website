import React, { Component } from 'react'
import '../App.css';
class Header extends Component {
  render() {
    return (
     <div className = "head" >
            <h2 id='xeno' >Xeno</h2>
            <button id='account'>Create Account</button>
            <button id = 'login'>Log in</button>
      </div>

      
    )
  }
}

export default Header