//this is a component functional!


import React, {Component} from "react";

class App extends Component {

  constructor(){

    super();
      this.state = {
        users: [
          {
            name:"Tony Stark",
            team:"IronMan",
            super:"Iron Man"
          },
          {
            name:"Steve Rogers",
            team:"Capitan America",
            super:"Capitan America"
          }
        ]
      }
  }


  showSuperHero = () => (

    this.state.users.map((user) =>(

      <div className="item">
        <p>Name: {user.name}</p>
        <p>Team: {user.team}</p>
        <p>Super's name: {user.super}</p>
      </div>

    ))

  )

  render() {

    return(

      <>

      <div className="container">
        <div className="flex-box">

          <p>
            {this.showSuperHero()}
          </p>

        </div>
      </div>

      </>
      
    );

  }

}


export default App;