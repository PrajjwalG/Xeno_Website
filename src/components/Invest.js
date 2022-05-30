import React, { Component } from 'react'
import '../App.css';
import Earn from '../Earn.png';
import USDT from '../Invest.png';
import USDT2 from '../USDT2.png'
class Invest extends Component {
  constructor (props) {
    super(props);

    this.getValue = this.getValue.bind(this)
}
getValue = function()
{
  var t = document.getElementById('range1').value;
  var a;
  var e;
  if(t == 1)
  {
    a = '2,000';
    e = '+₹300';
  }
  else if(t == 2)
  {
    a = '5,000';
    e = '+₹750';
  }
  else if(t == 3)
  {
    a = '10,000';
    e = '+₹1,500';
  }
  else if(t == 4)
  {
    a = '50,000';
    e = '+₹7,500';
  }
  else{
    a = '1,00,000';
    e = '+₹15,000';
  }
  document.getElementById('add').innerHTML = a;
  document.getElementById('earn').innerHTML = e;
}

  render() {
    return (
      <div className='Invest'>
          <div className=''>
              <picture>
              <source media="(max-width: 500px)" srcSet={USDT2}/>
              <img src={USDT} id = 'USDT' alt={USDT2}/></picture>
              <input type="range"  className="points" id='range1' min="1" max="5" defaultValue={1} ></input>
              <input type="range"  className="points" id='range2' min="1" max="3" defaultValue={3}></input>
              <button id = 'addmoney' onClick={()=>this.getValue()}>Add Money</button>
              <a href=''><h2 id='vb'>View BreakDown ⟶ </h2></a>
              <button id='see'>See how?</button>
              <img src={Earn} id = 'Earn'/>
              <h2 className='grytxt' id = 'period'>Select the time period</h2>
              <h2 className='grytxt' id = 'amount'>Slide to select the amount</h2>
              <div className='months'>
                <h2 id = 'daily'>Daily</h2>
                <h2 id = 'month1'>6 months</h2>
                <h2 id = 'month2'>12 months</h2>
              </div>
              <h1 id = 'add'>2,000</h1>
              <h2 id = 'earn'> +₹300</h2>
              
          </div>
      </div>
    )
  }
}

export default Invest