import React from "react" ; 
import classes from "./input.module.css";
const Input = ({onChange}) => {
    return (
    <div>
        <input 
        className={classes.input}
        placeholder="City name"
        onChange={(e) => onChange(e.target.value)} name="city" type="test" /> 
    </div>
    );
}; 
export default Input ; 