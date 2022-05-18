import React, { Component } from 'react'
import pic from '../end.png';
class End extends Component {
  render() {
    return (
      <div className='End'>
      <img src={pic} id = 'endxeno'/>
      <button id = 'Download'>Download</button>
      <h2 id='xeno'>Xeno</h2>
      <div className='bottom'>
        <a href=''><h2>About us</h2></a>
        <a href=''><h2>Terms</h2></a>
        <a href=''><h2>FAQs</h2></a>
        <a href=''><h2>Anti Money Laundering</h2></a>
      </div>
      <hr id='line'></hr>
      <h2 className='grytxt close' id='copyright'>© Copyrights Xeno Inc.</h2>
      <h2 className='grytxt close' id = 'contact'>hello@xeno.com</h2>
      </div>
    )
  }
}

export default End