//this is a component functional!
import React, {Component} from "react";
import axios  from "axios";

class App extends Component {

  constructor(){

    
    super();
      this.state = {
        users: []
      }
    }
    
   async componentDidMount(){
      
    // const url = "https:\\superheroapi.com/api/10158053293211733";
    const url = "https://jsonplaceholder.typicode.com/users";

    const api = await axios.get(url)

    this.setState({
      users: api.data
    })

  }

  showSuperHero = () => (

    this.state.users.map((user) =>(

      <div className="item" key={user.id}>
        <p>Name: {user.name}</p>
        <p>User name: {user.username}</p>
        <p>website: {user.website}</p>
        <p>email: {user.email}</p>
        
        <hr />
        
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