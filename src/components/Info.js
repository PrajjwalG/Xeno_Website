import React, { Component } from 'react'
import group from '../group.png';
import group2 from '../group2.png';
class Info extends Component {
  render() {
    return (
      <div className='Info'>
        <picture>
        <source media="(max-width: 500px)" srcSet={group2}/>
        <img src={group} id = 'group'/>
        </picture>
      </div>
    )
  }
}

export default Info