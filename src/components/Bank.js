import React, { Component } from 'react'
import pic from '../Bank.png';
import pic2 from '../otp2.png'
class Bank extends Component {
  render() {
    return (
      <div className='Bank'>
        <picture>
          <source  media="(max-width: 500px)" srcSet={pic2}/>
        <img src={pic} id = 'otp'/>
        </picture>
          
          <button id = 'demo'>See Demo</button>
      </div>
    )
  }
}

export default Bank