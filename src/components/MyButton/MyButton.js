import { useState } from "react";
import './MyButton.css'
export default function MyButton({name="count", showText, children}){
    const [count, setCount] = useState(0);
    const [showHeading, setShowHeading] = useState(showText);
    const [buttonClass, setButtonClass] = useState("button-example")

    function handleClick(){
        setCount(count+1);
        setShowHeading(!showHeading);
        setButtonClass(buttonClass + " button-example-green")
    }


    return (
        <>
            <button className={buttonClass} onClick={handleClick}> {name}:{count} {children}</button>
            {showHeading && <h2>TEXT</h2>}
            {children}
        </>
    );
}