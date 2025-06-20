import React, { useEffect, useRef, useState } from 'react';

function Demo(props) {

    let [count,setCount] = useState(0);

    let count2 = useRef(1)

    useEffect(()=>{
        console.log("render")
        console.log(count2.current)
    })


    return (
        <>
        <h1>Count-{count}</h1>
        <h1>Count2-{count2.current}</h1>

        <button onClick={()=> setCount(count+1)}>Click1</button>
        <button onClick={()=>(count2.current+=1)}>Click2</button>
        </>
    );
}

export default Demo;