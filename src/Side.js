import { useState,useEffect } from "react";
import {FaArrowLeft, FaAmazon, FaWallet,FaCheckSquare,FaCheck,FaSquareFull,FaWaveSquare,FaUser } from "react-icons/fa";

 

function Side(){

  // Load initial state from localStorage or default to false
  const [firstDiv, setFirstDiv] = useState(() => JSON.parse(localStorage.getItem('firstDiv')) || false);
  const [secondDiv, setSecondDiv] = useState(() => JSON.parse(localStorage.getItem('secondDiv')) || false);
  const [thirdDiv, setThirdDiv] = useState(() => JSON.parse(localStorage.getItem('thirdDiv')) || false);
  const [lastDiv, setLastDiv] = useState(() => JSON.parse(localStorage.getItem('lastDiv')) || false);

  // Save the current state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('firstDiv', JSON.stringify(firstDiv));
  }, [firstDiv]);

  useEffect(() => {
    localStorage.setItem('secondDiv', JSON.stringify(secondDiv));
  }, [secondDiv]);

  useEffect(() => {
    localStorage.setItem('thirdDiv', JSON.stringify(thirdDiv));
  }, [thirdDiv]);

  useEffect(() => {
    localStorage.setItem('lastDiv', JSON.stringify(lastDiv));
  }, [lastDiv]);

   

 
  
     const firstBtn = () => {
       setFirstDiv(true)
       setSecondDiv(false)
       setThirdDiv(false)
       setLastDiv(false)
     }
     const secondBtn = () => {
        setSecondDiv(true)
       setFirstDiv(false)
       setThirdDiv(false)
       setLastDiv(false)
     }
     const thirdBtn = () => {
        setSecondDiv(false)
        setFirstDiv(false)
        setThirdDiv(true)
        setLastDiv(false)
     }
     const lastBtn = () => {
        setSecondDiv(false)
        setFirstDiv(false)
        setThirdDiv(false)
        setLastDiv(true)
     }
    return (
       
        <section className="bg-white pl-7 z-20  h-full top-0   rounded-tl-md fixed left-0 w-56">
        <div className="h-28 pl-8 grid items-center   ">
        <FaAmazon className="text-4xl greentext"/>
        </div>
        <section className="mt-20 ">
         {firstDiv ? (  <div className="flex  gap-3 pl-8 h-14 items-center text-green-600 rounded-tl-md rounded-bl-md border-r-3  alldivs bg-green-100"  >
            <FaWaveSquare className="text-lg"/>
        <p className="text-sm font-normal ">Dashboard</p>
            </div>):
            <div className= "flex  gap-3 pl-8 h-14 items-center  text-black cursor-pointer" onClick={firstBtn} >
        <FaWaveSquare className="text-lg"/>
        <p className="text-sm font-normal ">Dashboard</p>
            </div>} 
         {secondDiv ? (  <div className="flex gap-3 rounded-tl-md rounded-bl-md pl-8 h-14 items-center border-r-3  alldivs text-green-600 bg-green-100"  >
        <FaWallet/>
        <p className="text-sm font-normal ">Wallet</p>
            </div>):
            <div className= "flex gap-3  pl-8 h-14 items-center text-black cursor-pointer" onClick={secondBtn} >
        <FaWallet/>
        <p className="text-sm font-normal "> Wallet</p>
            </div>} 
         {thirdDiv ? (  <div className="flex gap-3 relative rounded-tl-md rounded-bl-md  pl-8 h-14 items-center border-r-3  alldivs text-green-600 bg-green-100"  >
        <FaSquareFull className="rounded-sm"/>
        <p className="text-sm font-normal ">Trasactions</p>
        <div className="absolute w-1.5 bg-green-800 h-1.5 left-10 ml-1 top-4 mt-0.5   rounded-full "></div>
            </div>):
            <div className= "flex gap-3  relative pl-8 h-14 items-center text-black cursor-pointer" onClick={thirdBtn} >
      <FaSquareFull className="rounded-sm text-white border-r border-black"/>

        <p className="text-sm font-normal ">Trasactions</p>
        <div className="absolute w-1.5 bg-white border-r border-black  h-1.5 left-10 ml-1 top-4 mt-0.5   rounded-full "></div>
            </div>} 
         {lastDiv ? (  <div className="flex gap-3 rounded-tl-md rounded-bl-md pl-8 h-14 items-center border-r-3  alldivs text-green-600 bg-green-100"  >
        <FaUser/>
        <p className="text-sm font-normal ">Profile</p>
            </div>):
            <div className= "flex gap-3 pl-8 h-14 items-center text-black cursor-pointer" onClick={lastBtn} >
        <FaUser className="text-black  border-black"/>
        <p className="text-sm font-normal ">Profile</p>
            </div>} 
           
        </section>
        

        <div className="absolute gap-3 flex pl-8 bottom-20">
            <FaArrowLeft className="text-red-500 mt-0.5"/>
         <p className="text-red-500 font-medium text-sm">Sign Out</p>
        </div>
        </section>
      
    )
}
export default Side;