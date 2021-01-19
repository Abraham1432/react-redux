import React from "react";

import { Link } from "react-router-dom";

const Menu = (props)=>(

    <nav>
        <Link to="/">Usuarios:</Link>
        <Link to="task">Tareas:</Link>
    </nav>

)

export default Menu;