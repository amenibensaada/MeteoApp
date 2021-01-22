import React from "react" ; 
import classes from "./title.module.css"; 
import "./title.module.css" ; 

const Title = ({ color , title , isgreen}) => {
    return ( 
    <div>
        <h1 
        className={classes.title}
        //style={{ color :isgreen ? color : "blue" }}
        >{title}</h1>
    </div>
    ); 
}




export default Title ; 