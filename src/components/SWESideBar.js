import React from 'react';

import { FaBars } from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import clubData from "./data/clubs.json"
import {Link} from 'react-scroll'
import "./ClubSideBar.css";



export default class SWESideBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sidebar: false,
            clubs:clubData,
        }
        this.showSidebar = this.showSidebar.bind(this)
    }
    showSidebar() {
        this.setState({sidebar:!this.state.sidebar})
    }


  render(){
  return (
            <div class="">
           
                <div className='navbar text-green-500 mt-10'>

                <img  src={this.state.clubs.clubs[1].logo} 
                        href="/swe" class="w-28 inline ml-2 lg:ml-10"/>
                <button to='#' className='menu-bars float-right'>

                    <FaBars onClick={this.showSidebar} class="bg-transparent  text-indigo-100 hover:text-indigo-500  lg:mr-10 md:mr-10  lg:mt-2  float-right" size={40}/>
                </button>
                </div>
                <nav className={this.state.sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items bg-slate-800 w-full  ' onClick={this.showSidebar}>
                    <li className='navbar-toggle'>
                    <button to='#' className='menu-bars '>
                        <AiIcons.AiOutlineClose class="text-indigo-300 mt-12  hover:text-indigo-500"size={45} />
                    </button>
                    </li>
                  
                  
                        <div class="text-md bg-transparent lg:flex-grow md:flex-grow ">
                            <Link to="Clubs"  onClick={this.showSidebar}  smooth={true} class="bg-transparent text-xl block mt-4 p-3 rounded-md   hover:text-indigo-300 hover:bg-opacity-20 hover:bg-indigo-300 lg:mt-0 text-indigo-100">
                                Events

                                
                            </Link>
                            <a href="/"  onClick={this.showSidebar}  smooth={true} class="bg-transparent text-xl block mt-4 p-2 rounded-md  hover:text-indigo-300 hover:bg-opacity-20 hover:bg-indigo-300 lg:mt-0 text-indigo-100">
                                ECSJC
                            </a>
                            <a href="/dsa"  onClick={this.showSidebar}  smooth={true} class="bg-transparent text-xl block mt-4 p-2 rounded-md  hover:text-sky-300 hover:bg-opacity-20 hover:bg-sky-300 lg:mt-0 text-sky-100">
                                DSA
                            </a>
                            <a href="/swe"  onClick={this.showSidebar}  smooth={true} class="bg-transparent text-xl block mt-4 p-2 rounded-md  hover:text-sky-300 hover:bg-opacity-20 hover:bg-sky-300 lg:mt-0 text-sky-100">
                                SWE
                            </a>
                            <a href="/calgeo"  onClick={this.showSidebar}  smooth={true} class="bg-transparent text-xl block mt-4 p-2 rounded-md  hover:text-sky-300 hover:bg-opacity-20 hover:bg-sky-300 lg:mt-0 text-sky-100">
                                CALGEO
                            </a>
                            <a href="/asce"  onClick={this.showSidebar}  smooth={true} class="bg-transparent text-xl block mt-4 p-2 rounded-md  hover:text-sky-300 hover:bg-opacity-20 hover:bg-sky-300 lg:mt-0 text-sky-100">
                                ASCE
                            </a>
                            
                            <Link  to="About Us" onClick={this.showSidebar}  smooth={true}
                                class="bg-transparent  text-xl block mt-4 p-2 rounded-md  hover:text-indigo-300 hover:bg-opacity-20 hover:bg-indigo-300 lg:mt-0 text-indigo-100">
                                About Us
                            </Link>
                        </div>
              
                 
             
                </ul>
                </nav>
            </div>
        );
    }
}

