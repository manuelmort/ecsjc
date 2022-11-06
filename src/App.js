import React from 'react';
import Home from './components/Home';
import Warpzone from './components/Warpzone';
import NavigationBar from './components/NavigationBar';
import Swe from './components/club-pages/Swe';
import {Routes, Route} from 'react-router-dom'
import Footer from './components/club-pages/SWEFooter';
import "./App.css"
import { extend } from 'dayjs';
import DSA from './components/DSA/DSA';

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

        </Routes>
        
        

      </div>
   );
  }
}
function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 2500));
}



export default App;
