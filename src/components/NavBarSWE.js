import React from "react";
import {Link} from 'react-scroll'
import "./NavBarSWE.css"


export default class NavBarSWE extends React.Component {
    
    render() {
        return(
            <div class="container lg:mx-auto  bg-transparent">
            <nav class="flex justify-between bg-transparent pb-6 flex-wrap  text-indigo-300 lg:m-30 pt-6" >
                    <a  
                        href="/" class="text-green-300 font-semibold text-3xl bg-transparent tracking-tight 
                        hover:underline underline-offset-4 ">
                        ECSJC</a>
                <div class="  lg:flex text-right  bg-transparent lg:items-center lg:w-auto ">
                    <div class="text-md bg-transparent lg:flex-grow">
                        <Link to="Events" smooth={true} class="bg-transparent text-xl block mt-4 p-2 rounded-md md:inline-block lg:inline-block hover:text-violet-300 hover:bg-opacity-30 hover:bg-violet-300 lg:mt-0 text-indigo-100">
                            Events
                        </Link>
       
                        <Link  to="Follow Us" spy={true} smooth={true}
                            class="bg-transparent text-xl block mt-4 p-2 rounded-md lg:inline-block hover:text-purple-300 md:inline-block hover:bg-opacity-30 hover:bg-purple-300 lg:mt-0 text-indigo-100">
                            Follow Us
                        </Link>

                        
                    </div>
                    
                </div>
                </nav> 
            </div>
        
        )

    }
}