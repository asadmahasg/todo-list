import React from "react";
import Style from "./App.css";
import NewScreen from "./NewScreen"

function onClickHandler(e){
    console.log("Btn Clicked");
    return(
        <NewScreen />
    );
}
function AddNewTask(){
    return(
        <div className="btnArea" style={Style.btnArea}>
            <button className="addBtn" style={Style.addBtn} onClick={onClickHandler}>Add + </button>
        </div>
    );
}
export default AddNewTask;