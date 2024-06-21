import { useReducer, useState } from "react";

export function MyReducer(){

    const [color, dispatch] = useReducer(colorReducer, "black")

    function handleRed(){
        dispatch({
            color:"red"
        })
    }

    function handleGreen(){
        dispatch({
            color:"green"
        })
    }

    function handleBlue(){
        dispatch({
            color:"blue"
        })
    }

    function colorReducer(color, action){
        console.log(color)
        return action.color
    }

    return(
        <div style={{
            backgroundColor: color
          }}>
        <button onClick={handleRed}>Red</button>
        <button onClick={handleGreen}>Green</button>
        <button onClick={handleBlue}>Blue</button>
        </div>  
    );
}