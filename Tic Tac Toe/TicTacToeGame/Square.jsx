import React from "react";

const Square = (props) =>{

   return (
   <div
   onClick={props.onClick}
      style={{border: "1px solid",height:"150px", width:"100%",display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center"}}
      className="square">
    <h6>{props.value}</h6>
   </div>
   )
}

export default Square