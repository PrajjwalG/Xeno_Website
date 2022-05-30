import React, { Component } from 'react'
import founder2 from '../founder2.png'
class Support extends Component {
  render() {
    return (
      <div className='Support'>
        <picture>
        <img src={founder2} id = 'founder'/>
        </picture>
      </div>
    )
  }
}

export default Support