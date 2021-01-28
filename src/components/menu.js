import React from "react";
import "../index.css"

import { Link } from "react-router-dom";

const Menu = (props)=>(

    <nav className="nav">
        <Link to="/" className="link">Users</Link>
        <Link to="task" className="link">Task</Link>
    </nav>

)

export default Menu;