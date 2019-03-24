import React, { Component } from 'react';
import Card from './Card';

class shoppingCart extends Component {

  state = {
    cardList: []
  }

  renderTotal(){
    return this.state.cardList.reduce((a,b) =>{
      return a + b;
    })
  }
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default shoppingCart;