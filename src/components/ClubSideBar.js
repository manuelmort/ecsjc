import { FaBars } from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import clubData from "./data/clubs.json"
import {Link} from 'react-scroll'
import React from 'react';
import "./ClubSideBar.css";


export default class ClubSideBar extends React.Component {
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
           
                <div className='navbar text-green-500 mt-10'>

                <a  
                        href="/" class="font-semibold text-4xl bg-transparent tracking-tight 
                        hover:underline underline-offset-4 text-green-300 lg:ml-20">
                        ECSJC</a>
                <button to='#' className='menu-bars float-right'>

                    <FaBars onClick={this.showSidebar} class="bg-transparent  text-green-300 hover:text-green-500  lg:mr-10 md:mr-10  lg:mt-2  float-right" size={40}/>
                </button>
                </div>
                <nav className={this.state.sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items bg-slate-800 w-full  ' onClick={this.showSidebar}>
                    <li className='navbar-toggle'>
                    <button to='#' className='menu-bars '>
                        <AiIcons.AiOutlineClose class="text-green-300 hover:text-green-500"size={40} />
                    </button>
                    </li>
                  
                  
                        <div class="text-md bg-transparent lg:flex-grow md:flex-grow ">
                            <Link to="Clubs"  smooth={true} class="bg-transparent text-xl block mt-4 p-3 rounded-md   hover:text-green-300 hover:bg-opacity-20 hover:bg-green-300 lg:mt-0 text-green-100">
                                Clubs

                                
                            </Link>
                            <Link to="Calendar"  smooth={true} class="bg-transparent text-xl block mt-4 p-2 rounded-md  hover:text-green-300 hover:bg-opacity-20 hover:bg-green-300 lg:mt-0 text-green-100">
                                Calendar
                            </Link>
                            <Link  to="About Us"  spy={true} smooth={true}
                                class="bg-transparent  text-xl block mt-4 p-2 rounded-md  hover:text-green-300 hover:bg-opacity-20 hover:bg-green-300 lg:mt-0 text-green-100">
                                About Us
                            </Link>
                        </div>
              
                 
             
                </ul>
                </nav>
            </div>
        );
    }
}

