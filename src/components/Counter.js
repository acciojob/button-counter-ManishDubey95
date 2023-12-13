import React, { useState } from "react";



const Counter = () =>{

    const [clicked, setClicked] = useState(0)
    function count(){
        setClicked(clicked+1)
    }


    return(
        <div>
            <p>Button clicked {clicked} times</p>
            <button onClick={count}>Click me</button>
        </div>
    );
}

export default Counter;