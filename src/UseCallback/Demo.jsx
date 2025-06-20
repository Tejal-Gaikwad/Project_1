/*
import React, { useState } from 'react';

function Demo(props){
    let [count,setCount] = useState(0);

    function show()
    {
        console.log('re-render')
        return(
        <h1>Hello World</h1>
        )
    }

    return(
        <div>
            <h1>{count}</h1>
            {show()}
            <button onClick={()=> setCount(count+1) }>Click</button>
        </div>
    )
}
export default Demo;
*/



//This the example of usecallback

import React, { useCallback, useEffect, useMemo, useState } from 'react';
function Demo(props){
    let [count,setCount] = useState(0);
    
    let show = useCallback(()=>{
        console.log('re-render')
        console.log('UseCalling function memoized this show')
    },[])

    return(
        <div>
            <h3>UseCallback function </h3>
            <h1>{count}</h1>
             <button onClick={()=> setCount(count+1) }>Click</button>
            
              <button onClick={show}>Click2</button>
           

        </div>
    )
}
export default Demo