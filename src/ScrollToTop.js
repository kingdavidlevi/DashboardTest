import React,{useState,useEffect} from "react";
 import Header from "./Header";
 import Side from "./Side";
import { Outlet, useLocation, useOutletContext } from "react-router-dom";
 

function    ScrollToTop (){
    const location = useLocation();
    


 useEffect(() =>{
  window.scrollTo(0,0);

 },[location]);

 

 

 //
    
return (
  
    <div className=" bg-gray-100 overflow-hidden max-h-full overflow-y-scroll h-screen  ">
 
     <Header/> 
    <Outlet    />
    <Side/>
 
 
    </div>
)


}



export default ScrollToTop;