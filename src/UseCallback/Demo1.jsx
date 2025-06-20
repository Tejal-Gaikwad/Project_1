//This is the example of react.memo
import React, { useCallback, useEffect, useMemo, useState } from 'react';
 
let Show = React.memo(()=>{
        console.log('re-render')
        console.log('React.memo function memoized this show')
        return(
            <h1>Hello World</h1>
        )
    })

function Demo1(props){
    let [count,setCount] = useState(0);
   
    return(
        <div>
            <h3>React.memo function </h3>
            <h1>{count}</h1>
             <button onClick={()=> setCount(count+1) }>Click</button>
            <Show/>

        </div>
    )
}
export default Demo1