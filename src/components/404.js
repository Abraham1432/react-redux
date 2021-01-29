import React from "react"
import "../styles/404.css"

const Error404 = (props) =>(

    <div className="error-404">
        <h1> {props.err} </h1>
    </div>

)


export default Error404;