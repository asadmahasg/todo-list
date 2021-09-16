import React from 'react'
import Style from '../App.css'

function SingleItem(props){
    
    return(
        <div className = "item" style={Style.item}>
            <div className="leftSide">
                <input type="checkbox" className="chkBox" style={Style.chkBox} />
            </div>
            <div className="rightSide">
                <div className="topSide">
                    <h2 className="itemName">{props.name}</h2>
                </div>
                <div className="topSide">
                    <p className="date">{props.date}</p>
                    <p className="time">{props.time}</p>
                </div>  
            </div>
            
        </div>
    );
}

export default SingleItem;