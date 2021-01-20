//this is a component functional!
import React, {Component} from "react";

import { connect } from "react-redux";

import * as userActions from "../../actions/usersActions";

class Users extends Component {
    
    componentDidMount(){
      
    this.props.get_users()

  }

  showSuperHero = () => (

    this.props.users.map((user) =>(

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

    console.log(this.props)

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

const mapStateToProps = (reducers) =>{

  return reducers.reduceUser;

}

export default connect(mapStateToProps, userActions)(Users);