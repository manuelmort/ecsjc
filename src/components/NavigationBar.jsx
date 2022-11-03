import React from "react";
import {Link} from 'react-scroll'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import "./NavigationBar.css";

export default class NavigationBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            drop: false
        }
        this.handleDrop = this.handleDrop.bind(this);
    }
    handleDrop() {
        
        this.setState({drop:!this.state.drop})
    }
    
    render() {
        return(
            <div>
            <div class="container lg:mx-auto  bg-transparent">
            <nav class="flex justify-between bg-transparent   text-green-300 pb-6 flex-wrap   lg:m-30 pt-6" >
                    <a  
                        href="/" class="font-semibold text-3xl bg-transparent tracking-tight 
                        hover:underline underline-offset-4 ">
                        ECSJC</a>
                <div class="  lg:flex text-right  bg-transparent lg:items-center lg:w-auto z-10 ">
                    <div class="text-md bg-transparent lg:flex-grow z-20 ">
                        <Link onClick={this.handleDrop} smooth={true} class=" bg-transparent text-xl block mt-4 p-3 rounded-md md:inline-block lg:inline-block hover:text-green-300 hover:bg-opacity-20 hover:bg-green-300 lg:mt-0 text-green-100">
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
                <div class="text-green-100 smoothDrop ">
                {this.state.drop ? (
                        
                        <div class=" absolute bg-gray-800/90 rounded-lg  mt-5 w-full z-10 mx-auto">
                        <div class=" grid lg:grid-cols-4 grid-cols-1">

                        <button class="mx-auto text-left hover:bg-gray-800/90 border-2 border-gray-700 rounded-lg hover:rounded-lg w-full p-5" ><Link href="/swe" class=" mx-auto">Society of Women Engineers</Link></button>
                        <button class="mx-auto text-left hover:bg-gray-800/90 border-2 border-gray-700 rounded-lg hover:rounded-lg w-full p-5" ><a href="/dsa" >Concrete Canoe</a></button>

                        <button class="mx-auto text-left hover:bg-gray-800/90 border-2 border-gray-700 rounded-lg hover:rounded-lg w-full p-5" ><a href="/dsa" >Data Structure and Algo</a></button>
                        <button class="mx-auto text-left hover:bg-gray-800/90 border-2 border-gray-700 rounded-lg hover:rounded-lg w-full p-5"><a>CAL GEO</a></button>
                        <button class="mx-auto text-left hover:bg-gray-800/90 border-2 border-gray-700 rounded-lg hover:rounded-lg w-full p-5"><a>Institue of Transportation Engineers</a></button>
                        <button class="mx-auto text-left hover:bg-gray-800/90 border-2 border-gray-700 rounded-lg hover:rounded-lg w-full p-5" ><a href="/swe" class=" mx-auto">Nat. Society of Black Engineers</a></button>
                        <button class="mx-auto text-left hover:bg-gray-800/90 border-2 border-gray-700 rounded-lg hover:rounded-lg w-full p-5"><a>ACM</a></button>
                        <button class="mx-auto text-left hover:bg-gray-800/90 border-2 border-gray-700 rounded-lg hover:rounded-lg w-full p-5"><a>Society Of Hispanic Engineers</a></button>
                        <button class="mx-auto text-left hover:bg-gray-800/90 border-2 border-gray-700 rounded-lg hover:rounded-lg w-full p-5"><a>Data Science</a></button>





                        </div>
                         

                        </div>
                       
                        ): null

                        }
                </div>
                </div>
        
        )

    }
}