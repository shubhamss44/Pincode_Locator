
import './App.css';
import React,{ useState } from 'react';
import Show from './Show';


function App() {
  const [pincode,setPincode]=useState('');
  const [error,setError]=useState('');
  const [postoffices,setpostoffices]=useState([]);

const locatePincodeHandler=()=>{
if (pincode!=="") {
  let url=`https://api.postalpincode.in/pincode/${pincode}`
  fetch(url).then((res)=>res.json()).then((result)=>{
    if(result[0].Status==="Error"){
    setError("Invalid Pin/Please enter 6 digit Pincode");
    setpostoffices([]);
    }
    else{
      setpostoffices(result[0].PostOffice);
      setError("")     
    }
  }); 
}
else{
  alert("Invalid Input")
}
}
const picodeHandler=(event)=>{
  setPincode(event.target.value);
}
  return (
    <div className="App">
      <h1>Get Area Details</h1>
      <label>Pincode : </label>
      <input onChange={picodeHandler} value={pincode} className="input"/>
      <br/>
      <br/>
      <br/>
      <button onClick={locatePincodeHandler}>Search</button>
      <br/>
      <span style={{color:"red",fontSize:"large",fontWeight:"20px",font:"caption"}}>{error}</span>
      <br/>
      <br/>
      <Show postoffices={postoffices}/>
    </div>
  );
}

export default App;
