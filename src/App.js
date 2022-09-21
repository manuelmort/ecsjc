import React from 'react';
import Home from './components/Home';
import Warpzone from './components/Warpzone';
import NavigationBar from './components/NavigationBar';
import {Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';
import "./App.css"

function App() {
  return (
    <div className="App mx-auto" style={{maxWidth:"700px"}}>
      <NavigationBar/>

     
      <Routes class="m-0">
        <Route path ='/' element={<Home/>}/>
        <Route path ='home' element={<Home/>}/>
        <Route path="warpzone" element={<Warpzone/>}/>
      </Routes>
      <Footer/>
       

    </div>
  );
}

export default App;
