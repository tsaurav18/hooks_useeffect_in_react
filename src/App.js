import React,{useState,useEffect} from 'react'

 function App(){
     const [count, setCount]= useState(0);
     const [count1, setCount1]= useState(50);

     const handleIncrement=()=>{
         setCount(count+1)
     }
     const handleDecrement =()=>{
         setCount1(count1-1)
     }
     useEffect(()=>{
         console.log("use effect called")
     },[count])
     return (
         <React.Fragment>
             <h1>count Up:{count}</h1>
             <button type="button" onClick={handleIncrement}>increase</button>
             <h1>count down:{count1}</h1>
             <button type="button" onClick={handleDecrement}>decrease</button>
         </React.Fragment>
     )
 }
 export default App;