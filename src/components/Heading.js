import React from "react";
import Style from '../App.css'

function Heading(){
    return(
        <div className="heading" style={Style.heading}>
            <h1 className = "title" style={Style.title}>
                Todo-list Items
            </h1>
        </div>
    );
}

export default Heading;