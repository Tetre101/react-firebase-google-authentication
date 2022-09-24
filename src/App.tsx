import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import {Main} from "./Pages/Main/Main";
import {Login} from "./Pages/Login";
import {Navbar} from "./Components/Navbar"
import {CreatePost} from "./Pages/Create-Post/CreatePost"

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Routes>
        <Route path ="/"  element ={<Main/>} />
        <Route path ="/Login"  element ={<Login/>} />
        <Route path ="/Createpost"  element ={<CreatePost/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
