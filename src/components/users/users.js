//this is a component functional!
import React, {Component} from "react";

import { connect } from "react-redux";

import * as userActions from "../../actions/usersActions";

import Error404 from "../404"

//CSS
import "../../styles/users.css";
import "../../index.css";

class Users extends Component {
    
    componentDidMount(){
      
    this.props.get_users()

  }

  showSuperHero = () => {

    if (this.props.error) {
      return <Error404 err={this.props.error}></Error404>;
    }

    return(

      this.props.users.map((user) =>(
  
        <div className="card" key={user.id}>
          <h3 className="card-title">Name: {user.name} </h3>
          <p>User name: {user.username}</p>
          <p>website: {user.website}</p>
          <p className="card-link">email: {user.email}</p>
          
        </div>
  
      ))

    )

  }

  render() {

    console.log(this.props.error)

    return(

      <>

      <div className={!this.props.error ? "container": ""}>
        <div className="flex">
            {this.showSuperHero()}
        </div>
      </div>

      </>
      
    );

  }

}

const mapStateToProps = (reducers) =>{

  return reducers.reduceUser;

}

export default connect(mapStateToProps, userActions)(Users);