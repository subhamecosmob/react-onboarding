import  ReactDOM  from "react-dom";

import React, { useState } from 'react'
import List from "./List";

export const Reactcomponent = () => {

    const [input , setInput] = useState("");

  
  return (
    <input value={input} onChange={(e)=>setInput(e.target.value)} />
  )}

ReactDOM.render(<List/> , document.querySelector("#root"))


