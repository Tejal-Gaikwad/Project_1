import { useContext } from "react";
import { myContext } from "./Sample1";

function Sample3(props){
let stud = useContext(myContext);

return(
    <>
    <myContext.Provider value={stud}>
    <div style={{ border:' 2px solid black', padding: '25px', background:"yellow"}} >
        <h1>Sample 3</h1>
        {stud.name}
    </div>
    
    </myContext.Provider>
    </>
)

}
export default Sample3
