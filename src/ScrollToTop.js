import React,{useState,useEffect} from "react";
 import Header from "./Header";
 import Side from "./Side";
import { Outlet, useLocation, useOutletContext } from "react-router-dom";
 

function    ScrollToTop (){
    const location = useLocation();
    


 useEffect(() =>{
  window.scrollTo(0,0);

 },[location]);

 

 


    
return (
    <div className="grid h-screen bg-black place-items-center">
         <div className="bg-gray-100 relative rounded-t-md   w-330 h-150" >
     <Header/> 
    <Outlet    />
    <Side/>
 
    </div>
    </div>
)


}



export default ScrollToTop;