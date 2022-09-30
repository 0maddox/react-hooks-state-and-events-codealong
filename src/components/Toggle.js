import React, { useState }from "react";

function Toggle() {
  const[isOn,setIsOn] = useState(false)

  function handleClick(){
    setIsOn((isOn)=>!isOn)
  }
  
  return <button style={{ background: "red" }} onClick ={handleClick}>{isOn? "on":"off"}</button>;
}

export default Toggle;
