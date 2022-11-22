import { FaBars } from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import './SideBar.css';
import { IconContext } from 'react-icons';
import clubData from "./data/clubs.json"
import {Link} from 'react-scroll'
import React from 'react';
import { CgWebsite,CgProfile } from "react-icons/cg"


export default class SideNavbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sidebar: false,
            clubs:clubData
        }
        this.showSidebar = this.showSidebar.bind(this)
    }
    showSidebar() {
        this.setState({sidebar:!this.state.sidebar})
    }


  render(){
  return (
            <div class="">
           
                <div className='navbar text-green-500 mt-5'>

                <a  
                        href="/" class="font-semibold text-4xl bg-transparent tracking-tight 
                        hover:underline ml-3 underline-offset-4 text-green-300 lg:ml-20">
                        ECSJC</a>
                <button to='#' className='menu-bars float-right'>

                    <FaBars onClick={this.showSidebar} class="bg-transparent  text-green-300 hover:text-green-500  lg:mr-20 md:mr-10  lg:mt-2  float-right" size={40}/>
                </button>
                </div>
                <nav className={this.state.sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items bg-slate-800 w-full  ' onClick={this.showSidebar}>
                    <li className='navbar-toggle'>
                    <button to='#' className='menu-bars '>
                        <AiIcons.AiOutlineClose class="text-green-300 mt-12  hover:text-green-500"size={45} />
                    </button>
                    </li>
                  
                  
                        <div class="text-md bg-transparent lg:flex-grow md:flex-grow mt-5">
                            <Link to="Clubs" onClick={this.showSidebar} smooth={true} class=" bg-transparent text-xl block mt-4 p-2 rounded-md   hover:text-green-300 hover:bg-opacity-20 hover:bg-green-300 lg:mt-0 text-green-100">
                                Clubs

                                
                            </Link>
                            <a href="/dsa"  onClick={this.showSidebar}  smooth={true} class="bg-transparent text-xl block mt-4 p-2 rounded-md  hover:text-sky-300 hover:bg-opacity-20 hover:bg-sky-300 lg:mt-0 text-sky-100">
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
                            
                            <Link to="Events" onClick={this.showSidebar} smooth={true} class="bg-transparent text-xl block mt-4 p-2 rounded-md  hover:text-green-300 hover:bg-opacity-20 hover:bg-green-300 lg:mt-0 text-green-100">
                               Events
                            </Link>
                            
                            <Link  to="About Us" onClick={this.showSidebar} smooth={true}
                                class="bg-transparent text-xl block mt-4 p-2 rounded-md lg:inline-block hover:text-green-300  hover:bg-opacity-20 hover:bg-green-300 lg:mt-0 text-green-100">
                             <span class="inline-block"><CgProfile/></span>About Us
                            </Link>
                            
                        </div>
              
                 
             
                </ul>
                </nav>
            </div>
        );
    }
}

