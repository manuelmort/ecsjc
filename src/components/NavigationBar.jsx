import React from "react";
import {Link} from 'react-scroll'

export default class NavigationBar extends React.Component {
    render() {
        return(
            <div class="container mx-auto">
            <nav class="flex justify-between   text-green-800 pb-6 flex-wrap m-30 pt-6" >
                    <a  
                        href="/" class="font-semibold text-xl  tracking-tight 
                        hover:underline underline-offset-4">
                        ECSJC</a>
                <div class="  lg:flex text-right lg:items-center lg:w-auto">
                    <div class="text-md lg:flex-grow">
                        <Link to="Clubs" smooth={true} class="block mt-4 p-2 rounded-md lg:inline-block hover:text-green-700 hover:bg-opacity-10 hover:bg-green-700 lg:mt-0 text-black">
                            Clubs
                        </Link>
                        <Link to="Calendar"  smooth={true} class="block mt-4 p-2 rounded-md lg:inline-block hover:text-green-700 hover:bg-opacity-10 hover:bg-green-700 lg:mt-0 text-black">
                            Calendar
                        </Link>
                        <Link  to="Follow Us" spy={true} smooth={true}
                            class="block mt-4 p-2 rounded-md lg:inline-block hover:text-green-700 hover:bg-opacity-10 hover:bg-green-700 lg:mt-0 text-black">
                            Follow Us 
                        </Link>
                    </div>
                    
                </div>
                </nav> 
            </div>
        
        )

    }
}