import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Cards from "./pages/Cards";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "react-toastify/dist/ReactToastify.css"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Cards/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
