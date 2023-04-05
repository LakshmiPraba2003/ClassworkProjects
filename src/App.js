import React from "react";
import Entry from "./Day1/day6/Entry";
import List from "./Day1/day6/List";
import Author from "./Day1/day7.js/Author";
import Day8 from "./Day1/day8/Day8";
import NavBar from "./Day1/day9/Navbar";
import { Route,Routes } from "react-router-dom";
import Home from "./Day1/day9/Home";
import Singers from "./Day1/day9/Singers";
import Albums from "./Day1/day9/Albums";
//import Submit from "./Day1/Day10/Submit";
import Login from "./Day1/Day10/Login";
function createEntry(items) {
  return (
    <Entry
    key={items.id}
    imgUrl={items.imgUrl}
    name={items.name}
    price={items.price}
    />
  );
}

function App() {
  return (
    <div style={{textAlign:"center"}}>
    <h2>Day6</h2>
      <h1>
      Products</h1>
      <dl>{List.map(createEntry)}</dl>
      <h2>Day7</h2>
      <Author/>
      <h2>Day8</h2>
      <Day8/>
      <h2>Day9</h2>
      <NavBar/>
      <Routes>
         <Route exact path='/' element={<Home/>}></Route>
         <Route exact path='/singers' element={<Singers/>}></Route>
         <Route exact path='/albums' element={<Albums/>}></Route>
      </Routes>

      
      <Login/>

    </div>
  );
}

export default App;
