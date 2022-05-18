import React, { Component } from 'react'
import pic2 from '../email.png';
class Email extends Component {
  render() {
    return (
      <div className='Email'>
      <img src={pic2} id = 'etremail'/>
      <button id='learn'>Learn More</button>
      </div>
    )
  }
}

export default Email