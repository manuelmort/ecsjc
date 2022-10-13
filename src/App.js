import React from 'react';
import Home from './components/Home';
import Warpzone from './components/Warpzone';
import NavigationBar from './components/NavigationBar';
import {Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';
import "./App.css"
import GeoTech from "./components/club-pages/GeoTech";


function App() {
  return (
    <div className="App " >
      <Routes class="m-0">
        <Route path ='/' element={<Home/>}/>
        <Route path ='home' element={<Home/>}/>
        <Route path="geotech" element={<GeoTech/>}/>

        <Route path="warpzone" element={<Warpzone/>}/>
      </Routes>
      <Footer/>
       

    </div>
  );
}

export default App;
