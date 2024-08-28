import ScrollToTop from "./ScrollToTop";
 import Wallet from "./Wallet";
import {  Route, Routes, RouterProvider,createBrowserRouter,createRoutesFromElements } from "react-router-dom";
import Homepage from "./Homepage";
 
 const router = createBrowserRouter(createRoutesFromElements(
 
    
  <Route  element={<ScrollToTop/>} >
    
<Route path="/" element={<Homepage/>}/>

<Route path="/Wallet" element={<Wallet/>}/>


</Route>

 
  
))
function App() {
  return (
 
    <RouterProvider router={router} /> 
  );
}

export default App;
