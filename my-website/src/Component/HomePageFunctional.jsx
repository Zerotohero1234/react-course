import { useState } from "react";


const getArray = () =>{
    return [1,2,3,4]
}

const HomePageFunctional = (props) =>{
    const array = getArray()
    const [age,setAge] = useState(15)
    const changeColor = age > 18?"red":"green"
   return(
        <div style={{color:changeColor}}>
            {age > 18 ?<p>Your age is Over 18</p> : <p>Your age is {age}</p>}
            <button onClick={()=>{setAge(age+1)}}>Plus your age</button>
            {array.map((input)=>{
                return <h1>{input}</h1>
            })}
        </div>
   );
    
}


export default HomePageFunctional;