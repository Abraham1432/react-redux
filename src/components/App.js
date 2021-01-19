import React from "react"
import { BrowserRouter,Route } from "react-router-dom";
import Menu from "./menu"
import Users from "./users/users"
import Task from "./users/task"


const App = () =>(

    <BrowserRouter>
 
        <Menu></Menu>
        <Route exact path="/" component={Users} />
        <Route exact path="/task" component={Task} />

    </BrowserRouter>

)

export default App;