//This is the example of UseMemo

import React, { useCallback, useEffect, useMemo, useState } from 'react';

function Demo2(props){
    let [count,setCount] = useState(0);
    let show = useMemo(()=>{
        console.log('re-render')
        console.log('UseMemo function memoized this show')
        let a=100+200
        return a
    },[])

    return(
        <div>
            <h3>UseMemo function </h3>
            <h1>{count}</h1>
            
             <button onClick={()=> setCount(count+1) }>Click</button>
             <h3>Computed Value: {show}</h3>
           

        </div>
    )
}
export default Demo2