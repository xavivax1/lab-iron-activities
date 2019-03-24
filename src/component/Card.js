import React, { Component } from 'react';
import './Card.css';

import { withStatus, NavContext  } from "./Navbar";



//const NavbarWithStatus = withStatus(Card);


class Card extends Component {
 
  // state = {
  //   activities: []
  // }
 
  render() {
    let label1="";
    let label2="";
  
    if (this.props.inCart === false ) {
      label1='Add to Cart';
    }  
    else label1='Remove from Cart';
     
    if (this.props.isFav) 
      label2='Remove from Favorites';
    else label2='Add to Favorites'  
    return (
      <div className="card">
        <img src={this.props.image} width="350px" height="250px" alt="cover"/>
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
        <p>{this.props.price}</p>
        <button onClick={this.props.favsInc} type="submit">{label1} </button>
        <button onClick={NavContext.handleFavsInc} type="submit">{label2} </button> 
      </div>
    );
  }
}

export default Card;