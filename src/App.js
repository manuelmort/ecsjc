import React from 'react';
import Home from './components/Home';
import Swe from './components/Swe';
import {Routes, Route} from 'react-router-dom'

import "./App.css"
import DSA from './components/DSA';
import CalGeo from './components/CalGeo';
import Asce from './components/Asce';
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading:true
    }
  }
  componentDidMount() {
    // this simulates an async action, after which the component will render the content
    demoAsyncCall().then(() => this.setState({ loading: false }));
  }
  render(){
    const { loading } = this.state;
    
    if(loading) { // if your component doesn't have to wait for an async action, remove this block 
      return null; // render null when app is not ready
    }

  return (

      <div className="App " >
        
        <Routes class="m-0">
          <Route path ='/' element={<Home/>}/>
          <Route path ='home' element={<Home/>}/>
          <Route path="/swe" element={<Swe/>}/>
          <Route path="/dsa" element={<DSA/>}/>
          <Route path="/calgeo" element={<CalGeo/>}/>
          <Route path="/asce" element={<Asce/>}/>



        </Routes>
        
        

      </div>
   );
  }
}
function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 2500));
}



export default App;
