import React from "react";
import { Link } from 'react-scroll'


export default class DSANavBar extends React.Component {
    
    render() {
        return(
            <div class="container lg:mx-auto  bg-transparent">
            <nav class="flex justify-between bg-transparent pb-6 flex-wrap   lg:m-30 pt-6" >
                    <a  
                        href="/dsa" class="text-sky-300 font-semibold text-3xl bg-transparent tracking-tight 
                        hover:underline underline-offset-4 ">
                            DSA
                    </a>
                <div class="  lg:flex text-right  bg-transparent lg:items-center lg:w-auto ">
                    <div class="text-md bg-transparent lg:flex-grow">
                        <Link to="Events" smooth={true} class="bg-transparent text-xl block mt-4 p-2 rounded-md md:inline-block lg:inline-block hover:text-white hover:bg-opacity-30 hover:bg-violet-300 lg:mt-0 text-indigo-100">
                            Events
                        </Link>
       
                        <Link  to="Contact Us" spy={true} smooth={true}
                            class="bg-transparent text-xl block mt-4 p-2 rounded-md lg:inline-block hover:text-white md:inline-block hover:bg-opacity-30 hover:bg-purple-300 lg:mt-0 text-indigo-100">
                            Contact Us
                        </Link>
                        <a  href="/" spy={true} smooth={true}
                            class="bg-transparent text-xl block mt-4 p-2 rounded-md lg:inline-block hover:text-white md:inline-block hover:bg-opacity-30 hover:bg-purple-300 lg:mt-0 text-indigo-100">
                            ECSJC
                        </a>

                        
                    </div>
                    
                </div>
                </nav> 
            </div>
        
        )

    }
}