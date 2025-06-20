
import { createContext } from "react";
import Sample3 from "./Sample3";

export let myContext = createContext();
function Sample1(props){
    let stud={
        name:"Tejal",
        age:20,
        city:"Yeola"
    }

    return(
        <>
        <myContext.Provider value={stud}>
        <div style={{ border:'2px solid black',padding:'25px', background:'pink' }}>
        <h1>Sample 1</h1>
        {stud.name}
        <Sample3/>
        
        </div>
        </myContext.Provider>
        </>
    )
}
export default Sample1