import React, { Component } from 'react'
import pic1 from '../email.png';
import pic2 from '../email2.png'
class Email extends Component {
  render() {
    return (
      <div className='Email'>
      <picture>
      <source media="(max-width: 500px)" srcSet={pic2}/>
       <img src={pic1} id = 'etremail'/>
      </picture>
      <button id='learn'>Learn More</button>
      </div>
    )
  }
}

export default Email