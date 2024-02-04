import React from "react";

export default function Die(props) {
    return (
        <div 
            className="die" 
            style={props.isHeld ? {backgroundColor: "#59E391"} : {backgroundColor: "#F5F5F5"}}
            onClick={() => props.holdFunc(props.id)}
        >
            <p>{props.value}</p>
        </div>
    )
}