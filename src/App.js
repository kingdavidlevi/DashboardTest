import ScrollToTop from "./ScrollToTop";
 
import {  Route, Routes, RouterProvider,createBrowserRouter,createRoutesFromElements } from "react-router-dom";
import Homepage from "./Homepage";
import MoneyTrasactions from "./MoneyTrasactions";
import Side from "./Side";
 const router = createBrowserRouter(createRoutesFromElements(
 
    
  <Route  element={<ScrollToTop/>} >
    
<Route  element={<Homepage/>}>
<Route path="/" element={<MoneyTrasactions/>}/>

</Route>

</Route>

 
  
))
function App() {
  return (
 
    <RouterProvider router={router} /> 
  );
}

export default App;
