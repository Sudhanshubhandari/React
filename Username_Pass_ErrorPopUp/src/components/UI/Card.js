import React from "react";
import classes from './Card.module.css'//Module css helps whith same class names
const Card=(props)=>{
    return(
        <div className={`${classes.card} ${props.className}`}>{props.children}</div>
    )


}

export default Card