import React, { Component } from 'react';

export const NavContext = React.createContext();

// export const withStatus = (Comp) => {
//   console.log(value);
//   return class WithStatus extends Component {
 
//     render() {
//       console.log('withStatus: ', this.props)
//       return (
//         <NavContext.Consumer>
//           {(value) => (
//             <Comp 
//               counter={value.favsCounter}
//               favsInc={value.increase}
//               favsDec={value.decrease}
//               //cart add / pop activity
              
//             />
//           )}
//         </NavContext.Consumer>
//       )
//     }
//   }
// }




class Navbar extends Component {

  state = {
    inCartActivities: [],
    favsCounter: 0
  } 
  handleAdd = (e) => {
    this.setState({
      inCartActivities: [...this.props.e]
    })

  }

  handleDelete = (e) => {
    // eliminar this.props.e del cart: 1- buscar-lo 2 eliminar-lo 3 setState
    const inCardDup = [ this.state.inCartActivities]
    this.setState({
      inCartActivities : inCardDup
    })
  }

  handleFavsInc= () => {
    console.log("handleFavsInc()");
    this.setState({
      favsCounter: this.favsCounter + 1
    })
  }

  handleFavsDec= () => {
    this.setState({
      favsCounter: this.favsCounter - 1
    })
  }
  render() {
    return (
      <NavContext.Provider value={{favsInc:this.handleFavsInc, favsDec:this.handleFavsDec}}>
        <nav>
          <a href=""><img src="./shoppingCart.png" height="40px" width="40px" alt="cart"/>Cart</a>
          <a href=""><img src="./favorites.ico" height="40px" width="40px" alt="favorites"/>{this.state.favsCounter}</a>
        </nav>

      </NavContext.Provider>
   );
  }
}

export default Navbar;