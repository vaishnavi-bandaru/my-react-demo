import { useState } from "react";
import './MyButton.css'
export default function MyButton({name, showText, children}){
    const [count, setCount] = useState(0);
    const [showHeading, setShowHeading] = useState(showText);

    function handleClick(){
        setCount(count+1);
        setShowHeading(!showHeading);
    }

    return (
        <>
            <button onClick={handleClick}> {name}:{count} {children}</button>
            {showHeading && <h2>TEXT</h2>}
            {children}
        </>

    );
}