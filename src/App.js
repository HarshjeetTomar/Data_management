import Employee from "./Employee";
import Demo from "./Demo";
import TopBar from "./TopBar";
import React from "react";
import Updte from "./Updte";
// import {   Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom"


function App() {
  return (
    
      <div >
       <TopBar/>

        <Routes>
       <Route path="/" element={<Employee/>}/> 
       <Route path="/ADD" element={<Demo/>}/> 
       <Route path="/UPDATE/:id" element={<Updte/>}/> 
 

       
       
       </Routes>

      
      </div>

    
  );
}

export default App;
