import React, { Component } from 'react'
import '../App.css';
import leftcoin1 from '../leftcoin.png';
import rightcoin1 from '../rightcoin1.png';
import leftcoin2 from '../leftcoin2.png';
import rightcoin2 from '../rightcoin2.png';
// import AppStore from '../Appstore.png';
// import PlayStore from '../PlayStore.png'
class Intro extends Component {
  render() {
    return (
      <div className='Intro'>
          <img src={leftcoin1} id = 'leftcoin1'/>
          <h1 className = 'txt1'>For those who like</h1>
          <img src={rightcoin1} id = 'rightcoin1'/>
          <h1 className= 'txt1'>to watch their wealth</h1>
          <h1 className= 'txt1' id='grntxt'>multiply</h1>
          <h1 className='grytxt' id = 'join'>Join Xeno today to earn upto 15* pa</h1>
          <button id = 'investnow'>Invest now</button>
          <img src={leftcoin2} id = 'leftcoin2'/>
          <img src= {rightcoin2} id='rightcoin2' />
          {/* <a href=''><img src = {PlayStore} id = 'PlayStore' /></a>
          <a href=''><img src = {AppStore} id = 'AppStore'/></a> */}
      </div>
    )
  }
}

export default Intro