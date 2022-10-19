import React from "react";
import {Link} from 'react-scroll'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

export default class NavigationBar extends React.Component {
    
    render() {
        return(
            <div class="container lg:mx-auto  bg-transparent">
            <nav class="flex justify-between bg-transparent   text-green-300 pb-6 flex-wrap   lg:m-30 pt-6" >
                    <a  
                        href="/" class="font-semibold text-3xl bg-transparent tracking-tight 
                        hover:underline underline-offset-4 ">
                        ECSJC</a>
                <div class="  lg:flex text-right  bg-transparent lg:items-center lg:w-auto ">
                    <div class="text-md bg-transparent lg:flex-grow">
                        <Link to="Clubs" smooth={true} class="bg-transparent text-xl block mt-4 p-2 rounded-md md:inline-block lg:inline-block hover:text-green-300 hover:bg-opacity-20 hover:bg-green-300 lg:mt-0 text-green-100">
                            Clubs
                        </Link>
                        <Link to="Calendar"  smooth={true} class="bg-transparent text-xl block mt-4 p-2 rounded-md md:inline-block lg:inline-block hover:text-green-300 hover:bg-opacity-20 hover:bg-green-300 lg:mt-0 text-green-100">
                            Calendar
                        </Link>
                        <Link  to="Follow Us" spy={true} smooth={true}
                            class="bg-transparent text-xl block mt-4 p-2 rounded-md lg:inline-block hover:text-green-300 md:inline-block hover:bg-opacity-20 hover:bg-green-300 lg:mt-0 text-green-100">
                            Follow Us 
                        </Link>
                    </div>
                    
                </div>
                </nav> 
            </div>
        
        )

    }
}