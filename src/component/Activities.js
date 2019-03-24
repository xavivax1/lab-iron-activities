import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card';
import Navbar from './Navbar';
import './Activities.css';

//const MyContext = React.createContext();

class Activities extends Component {
  state = {
    activities: []
  }

  componentDidMount() {
    const offset = 0;
    const linksxpage = 18;
    const outData = [];
    
    axios.get(`https://api.musement.com/api/v3/venues/164/activities?limit=${linksxpage}&offset=${offset}`)
    .then( result  => {
        result.data.forEach(activity =>{
            outData.push({
              image: activity.cover_image_url,
              title: activity.title, 
              description: activity.description, 
              price: activity.retail_price.formatted_value, 
              inCart: false, 
              isFav: false});
        })

        this.setState(
          {
          activities: outData,  //falta afegir un incart: false;
        })
        console.log(this.state.activities);
    })
  
  }

  renderActivity(){
    return this.state.activities.map(( item,index)  =>{
      return(
        <Card key={`id-${index}`} image={item.image} title={item.title} description={item.description} price={item.price} fav={item.isFav} inCart={item.inCart}/>
      )
    })
  }

  render() {
    return (
      <div className="container">
        <Navbar>
          {this.renderActivity()}
        </Navbar>  
      </div>
    );
  }
}

export default Activities;