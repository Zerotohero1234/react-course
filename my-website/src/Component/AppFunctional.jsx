import '../App.css'
import React, { useState,useEffect } from 'react'
import HomePageFunctional from './HomePageFunctional'

const Home = (props) =>{
    const {backgroundColor,color} = props
    return(
        <div>
            <h1 style={{backgroundColor:backgroundColor,color:color}} >This is Data fom props title 1000</h1>
        </div>
    )
}



const AppFunctional = () =>{
    const style={
        backgroundColor:"#333",
        color:"blue"
    }

    const [color,setColor] = useState(style)

    const [count,setCount] = useState(0)

    useEffect(()=>{
        console.log("Color",color.color);
    },[color.color])

    return(
        <div className="box">
            {/* <Home {...color}/>
            <button onClick={()=>{
                setColor({color:"white",backgroundColor:"#333"})
            }}>Chang color</button>
            <h1>{count}</h1>
            <button onClick={()=>{
                setCount(count+1)
            }}>Plus</button> */}
            <HomePageFunctional/>
        </div>
    )
}

export default AppFunctional;
