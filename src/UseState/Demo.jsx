import React, { useState } from 'react';

function Demo(props) {
    let [no1,setno1] = useState(0);
    let [no2,setno2] = useState(0);
    let [res,setres] = useState(0);
    let [city,setCity] = useState("");

    function Add (){
        setres (Number(no1)+Number(no2))
    }

   function Sub (){
        setres (Number(no1)-Number(no2))
    }

    return (
        <>
          <h1>Demo1 Component</h1>
          <hr/>
           SelectCity: <select name="" id="" onChange={(e)=> setCity(e.target.value)}>
            <option value="Nashik">Nashik</option>
             <option value="Nashik">Nashik</option>
              <option value="Nashik">Nashik</option>
               <option value="Nashik">Nashik</option>
           </select>
           <br/> <br/>
           no1: <input type="text"onChange={(e)=>setno1(e.target.value)} />
           <br /> <br />
           no2: <input type="text"onChange={(e)=>setno2(e.target.value)} />
           <br /> <br />
           Result:{res}
           <br /> <br />
           <button onClick={Add}> Add</button>
           <button onClick={Sub}> Sub</button>
        </>
    );
}


export default Demo;