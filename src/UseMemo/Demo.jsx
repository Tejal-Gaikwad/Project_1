/*import { useState } from "react";

function Demo(props){
    let [count, setCount] = useState(0);
    let sum = ()=>{
        let res=0;
        for(let i=1; i<=50; i++)
        {
            res += i;
        }
        console.log(res)
     }
     return(
        <>
        <div>
            {sum()}
            <h1>Hello</h1>
            <h2>{count}</h2>
            <button onClick={()=>setCount(count+1)}>Click</button>
        </div>
        </>
     )
}
export default Demo
*/

import { useMemo, useState } from "react";


function Demo(){
    let [count, setCount] = useState(0);

    let sum = useMemo(()=>{
        console.log('re-render')
        let res=0;
        for(let i=1; i<=10; i++)
        {
            res += 1;
        }
        return res
    },[])

    return (
        <>
        <div>
            {sum}
            <h1>Hello</h1>
            <h2>{count}</h2>

            <button onClick={()=>setCount(count+1)}>Click</button>
        </div>
        </>
    )
}
export default Demo