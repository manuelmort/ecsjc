import React from "react";
import {Link} from 'react-scroll'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { GiHamburgerMenu } from "react-icons/gi"

export default class AsceNav extends React.Component {
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
            <nav class="flex justify-between bg-transparent text-emerald-8 00 pb-6 flex-wrap   lg:m-30 pt-6" >
            <a  
                        href="/asce" class="text-green-300  font-semibold text-3xl bg-transparent tracking-tight 
                        hover:underline underline-offset-4  ">
                        <img src="./ASCE officers/ascelogo.png" class="h-28 hover:bg-purple-300/30 rounded-lg p-2" /></a>
                <div class="  lg:flex text-right  bg-transparent lg:items-center lg:w-auto z-10 ">
                    <div class="text-md bg-transparent lg:flex-grow z-20 ">
 
 
                        <Link  to="About Us" smooth={true}
                            class="bg-transparent text-xl block mt-4 p-2 rounded-md lg:inline-block hover:text-sky-300 md:inline-block hover:bg-opacity-20 hover:bg-sky-700 lg:mt-0 text-sky-800">
                            About Us
                        </Link>
                        <a href="/" smooth={true}
                            class="bg-transparent text-xl block mt-4 p-2 rounded-md lg:inline-block hover:text-sky-300 md:inline-block hover:bg-opacity-20 hover:bg-sky-700 lg:mt-0 text-sky-800">
                            ECSJC
                        </a>
                    </div>
                    
                </div>
                </nav> 
            </div>
            </div>
            
        
        )

    }
}