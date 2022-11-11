import React from "react";
import {Link} from 'react-scroll'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { GiHamburgerMenu } from "react-icons/gi"
import "./CalGeoNav.css";

export default class DSANavBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            drop: false,
            side:false
        }
        this.handleDrop = this.handleDrop.bind(this);
    }
    handleDrop() {
        
        this.setState({drop:!this.state.drop})
    }
    handleSideMenu() {

    }
    
    render() {
        return(
            <div class="z-10">
            <div class="container lg:mx-auto  bg-transparent">
            <nav class="flex justify-between bg-transparent web-nav   text-emerald-8 00 pb-6 flex-wrap   lg:m-30 pt-6" >
            <a  
                        href="/dsa" class="text-green-300  font-semibold text-3xl bg-transparent tracking-tight 
                        hover:underline underline-offset-4  ">
                        <img src="./dsalogo.png" class="h-20 hover:bg-purple-300/30 rounded-lg p-2"/></a>
                <div class="  lg:flex text-right  bg-transparent lg:items-center lg:w-auto z-10 ">
                    <div class="text-md bg-transparent lg:flex-grow z-20 ">
                        <Link onClick={this.handleDrop} smooth={true} class=" bg-transparent text-xl block mt-4 p-3 rounded-md md:inline-block lg:inline-block hover:text-emerald-300 hover:bg-opacity-20 hover:bg-emerald-700 lg:mt-0 text-emerald-800">
                            Clubs

                            
                        </Link>
 
                        <Link  to="About Us" smooth={true}
                            class="bg-transparent text-xl block mt-4 p-2 rounded-md lg:inline-block hover:text-emerald-300 md:inline-block hover:bg-opacity-20 hover:bg-emerald-700 lg:mt-0 text-emerald-800">
                            About Us
                        </Link>
                        <a href="/" smooth={true}
                            class="bg-transparent text-xl block mt-4 p-2 rounded-md lg:inline-block hover:text-emerald-300 md:inline-block hover:bg-opacity-20 hover:bg-emerald-700 lg:mt-0 text-emerald-800">
                            ECSJC
                        </a>
                    </div>
                    
                </div>
                </nav> 
            <div class="mobile-nav">
                
                <div class="text-white border-2  p-5 inline-block">
                    <a  
                        href="/" class="font-semibold text-3xl bg-transparent tracking-tight 
                        hover:underline underline-offset-4 text-left ">
                    ECSJC</a>

                    <div class="text-right inline-block">
                        <button class="text-rght">
                            <GiHamburgerMenu class="text-right" size={30}/>
                        </button>
                    </div>
                </div>
            </div>
            </div>
                <div class="text-green-100 smoothDrop ">
                {this.state.drop ? (
                        
                        <div class=" absolute lg:bg-gray-800/90 md:bg-gray-800/90 bg-gray-800 rounded-lg  mt-5 w-full  mx-auto">
                        <div class=" grid lg:grid-cols-4 grid-cols-1">

                        <button class="mx-auto text-left hover:bg-gray-800/90 border-2 border-gray-700 rounded-lg hover:rounded-lg w-full  p-5" ><Link  class=" mx-auto">Society of Women Engineers</Link></button>
                        <button class="mx-auto text-left hover:bg-gray-800/90 border-2 border-gray-700 rounded-lg hover:rounded-lg w-full p-5" ><a href="/dsa" >Concrete Canoe</a></button>

                        <button class="mx-auto text-left hover:bg-gray-800/90 border-2 border-gray-700 rounded-lg hover:rounded-lg w-full p-5" ><a href="/dsa" >Data Structure and Algo</a></button>
                        <button class="mx-auto text-left hover:bg-gray-800/90 border-2 border-gray-700 rounded-lg hover:rounded-lg w-full p-5"><a href="/calgeo">CAL GEO</a></button>
                        <button class="mx-auto text-left hover:bg-gray-800/90 border-2 border-gray-700 rounded-lg hover:rounded-lg w-full p-5"><a>Institue of Transportation Engineers</a></button>
                        <button class="mx-auto text-left hover:bg-gray-800/90 border-2 border-gray-700 rounded-lg hover:rounded-lg w-full p-5" ><a href="/swe" class=" mx-auto">Nat. Society of Black Engineers</a></button>
                        <button class="mx-auto text-left hover:bg-gray-800/90 border-2 border-gray-700 rounded-lg hover:rounded-lg w-full p-5"><a>ACM</a></button>
                        <button class="mx-auto text-left hover:bg-gray-800/90 border-2 border-gray-700 rounded-lg hover:rounded-lg w-full p-5"><a>Society Of Hispanic Engineers</a></button>
                        <button class="mx-auto text-left hover:bg-gray-800/90 border-2 border-gray-700 rounded-lg hover:rounded-lg w-full p-5"><a>Data Science</a></button>
                        <button class="mx-auto text-left hover:bg-gray-800/90 border-2 border-gray-700 rounded-lg hover:rounded-lg w-full p-5"><a href="https://www.hornetracing.net/">Hornet Racing</a></button>





                        </div>
                         

                        </div>
                       
                        ): null

                        }
                </div>
                </div>
        
        )

    }
}