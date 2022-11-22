import React from 'react';

import { FaBars } from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import clubData from "./data/clubs.json"
import {Link} from 'react-scroll'
import "./ClubSideBar.css";
import { CgWebsite,CgProfile } from "react-icons/cg"
import { ImNewspaper} from "react-icons/im";
import { IoPeopleCircleOutline } from "react-icons/io5"



export default class CalGeoSideBar extends React.Component {
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

                <img  src={this.state.clubs.clubs[4].logo} 
                        href="/calgeo" class="w-28 inline ml-2 lg:ml-10"/>
                <button to='#' className='menu-bars float-right'>

                    <FaBars onClick={this.showSidebar} class="bg-transparent  text-slate-800 hover:text-green-100  lg:mr-10 md:mr-10  lg:mt-2  float-right" size={40}/>
                </button>
                </div>
                <nav className={this.state.sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items bg-slate-800 w-full  ' onClick={this.showSidebar}>
                    <li className='navbar-toggle'>
                    <button to='#' className='menu-bars '>
                        <AiIcons.AiOutlineClose class="text-emerald-100 mt-12  hover:text-emerald-500"size={45} />
                    </button>
                    </li>
                  
                  
                        <div class="text-md bg-transparent lg:flex-grow md:flex-grow mt-5 ">
                            <Link to="Clubs"  onClick={this.showSidebar}  smooth={true} class="bg-transparent text-xl block mt-4 p-3 rounded-md   hover:text-indigo-300 hover:bg-opacity-20 hover:bg-indigo-300 lg:mt-0 text-indigo-100">
                                <span class="inline-block"><ImNewspaper/> </span>Events
                                
                            </Link>
                            <Link  to="About Us" onClick={this.showSidebar}  smooth={true}
                                class="bg-transparent  text-xl block mt-4 p-2 rounded-md  hover:text-indigo-300 hover:bg-opacity-20 hover:bg-indigo-300 lg:mt-0 text-indigo-100">
                                <span class="inline-block"><CgProfile/></span>About Us
                            </Link>
                            <a href="/"  onClick={this.showSidebar}  smooth={true} class="bg-transparent text-xl block mt-4 p-2 rounded-md  hover:text-indigo-300 hover:bg-opacity-20 hover:bg-indigo-300 lg:mt-0 text-indigo-100">
                                <span class="inline-block"><CgWebsite/></span>ECSJC
                            </a>
                            <a href="/dss"  onClick={this.showSidebar}  smooth={true} class="bg-transparent text-xl block mt-4 p-2 rounded-md  hover:text-sky-300 hover:bg-opacity-20 hover:bg-sky-300 lg:mt-0 text-sky-100">
                                 <span class="inline-block"><CgWebsite/></span>DSA
                            </a>
                            <a href="/swe"  onClick={this.showSidebar}  smooth={true} class="bg-transparent text-xl block mt-4 p-2 rounded-md  hover:text-sky-300 hover:bg-opacity-20 hover:bg-sky-300 lg:mt-0 text-sky-100">
                                <span class="inline-block"><CgWebsite/></span>SWE
                            </a>
                            <a href="/calgeo"  onClick={this.showSidebar}  smooth={true} class="bg-transparent text-xl block mt-4 p-2 rounded-md  hover:text-sky-300 hover:bg-opacity-20 hover:bg-sky-300 lg:mt-0 text-sky-100">
                                <span class="inline-block"><CgWebsite/></span>CALGEO
                            </a>
                            <a href="/asce"  onClick={this.showSidebar}  smooth={true} class="bg-transparent text-xl block mt-4 p-2 rounded-md  hover:text-sky-300 hover:bg-opacity-20 hover:bg-sky-300 lg:mt-0 text-sky-100">
                                <span class="inline-block"><CgWebsite/></span>ASCE
                            </a>
                        </div>
              
                 
             
                </ul>
                </nav>
            </div>
        );
    }
}

