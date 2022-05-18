import React, { Component } from 'react'
import pic from '../Bank.png';
class Bank extends Component {
  render() {
    return (
      <div className='Bank'>
          <img src={pic} id = 'otp'/>
          <button id = 'demo'>See Demo</button>
      </div>
    )
  }
}

export default Bank