//import { useState } from "react";
//import { Series } from "./components/Series";
import { State } from "./components/hooks/State"
import "./index.css"

export default function App() {
  return(
    // <div className="flex gap-4 flex-col m-8 min-h-screen">
    //   <h1 className="text-center font-semibold text-5xl underline p-1 italic tracking-wide">
    //     Harry Potter Series
    //   </h1>
    //   <Series />
    // </div>
    <State/>
  ); 
  
}

