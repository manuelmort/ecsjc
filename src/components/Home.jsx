import React from "react";
import ImageSlider from "./Slider/ImageSlider";
import { SliderData } from "./Slider/SliderData";
import SideNavbar from "./HomeSideBar";
import "./Home.css"
import { Chrono } from "react-chrono";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import {Link} from 'react-scroll'


import data from "./data/data.json"
import HomeSideBar from "./HomeSideBar";



export default class Home extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            ecsjc: data.pages[0].ecsjc,
            ECSJC:0,
            ECS:1,
            CALGEO:2,
            DSA:3,
            SWE:4,
            page:"ecsjc",
            date:new Date()
        }
        
        this.showText = this.showText.bind(this)

    }
    showText() {
        this.setState({hidden:"visible bg-transparent"})
        console.log("text is now visible")
    }
    componentDidMount() {

         //gsap is fucking amazing!
        gsap.registerPlugin(ScrollTrigger);
        //reveal
        gsap.utils.toArray(".revealUp").forEach(function (elem) {
        ScrollTrigger.create({
            trigger: elem,
            start: "top 80%",
            end: "bottom 10%",
            markers: false,
            onEnter: function () {
            gsap.fromTo(
                elem,
                { y: 100, autoAlpha: 0 },
                {
                duration: 1.25,
                y: 0,
                autoAlpha: 1,
                ease: "back",
                overwrite: "auto",

                
                }
            );
            },
            onLeave: function () {
            gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
            },
            onEnterBack: function () {
            gsap.fromTo(
                elem,
                { y: -100, autoAlpha: 0 },
                {
                duration: 1.25,
                y: 0,
                autoAlpha: 1,
                ease: "back",
                overwrite: "auto",
                zIndex: -10
                }
            );
            },
            onLeaveBack: function () {
            gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" ,zIndex: -10
        });
            }
        });
        });

    }


      
    render(){
        

        return(
           
            <div class="bg-transparent">
                
                <div class="m-0 w-full h-full bg-cover bg-transparent border-2 border-transparent <----???" style={{backgroundImage:"url('./topView.jpg')"}}>
                    
                    <HomeSideBar class="revealUp m-0"/>
                    <div class=" mx-auto  2xl:m-96 lg:m-80 lg:mr-20 lg:ml-20 bg-transparent test ">
                        
                            <p  class="text-green-200 font-medium text-lg p-3 lg:text-5xl lg:mt-20 lg:text-center md:text-center md:text-4xl lg:revealUp md:revealUp phonescreen">Engineering and Computer Science Joint Council</p>
                            
                            <div class=" opacity-90 text-center lg:mt-5 mt-10 mb-10 revealUp">
                                <Link  to="Events"   smooth={true}
                                    class="bg-transparent  -z-10 text-xl text-green-100   p-2 rounded-md border-2 border-green-100/90    hover:text-green-300  hover:bg-opacity-30 hover:bg-green-300  ">
                                    Upcoming Events
                                </Link>
                            </div>
                            <p  class="text-green-300 font-medium text-lg p-3 lg:text-3xl lg:mt-20 lg:text-center md:text-center md:text-4xl lg:revealUp md:revealUp phonescreen">Spring 2023</p>



                    </div>
                    
                    
                </div>
                <section class="">

                    <div class="bg-green-100  bg-opacity-70">
                        <p class="text-center bg-transparent text-green-800 p-4 revealUp">Upcoming Meeting: Valley Suite Room 7:00 - 8:30pm, March 1st</p>
                    </div>
                    <div className="bg-transparent grid lg:grid-cols-2 bg-slate-800 opacity-90 ">
                            
                            <div class="bg-transparent lg:mt-20 m-5">
                                <div class ="text-left bg-transparent ml-10">
                                    
                                    <h1 class ="text-green-300 font-semibold text-lg pt-5 bg-transparent line-1 anim-typewriter2-ecsjc -z-10 revealUp">
                                                Engineering & Computer Science Joint Council

                                    </h1>
                                    
                                    <h2 className=" text-md text-dark bg-transparent text-green-100 revealUp">ECSJC is a campus recognized organization, sponsored by ASI, which   provides a forum for networking and collaboration among student leaders in the College of Engineering and Computer Science as well as providing an avenue for the student voice.</h2>
                                    <p class="text-green-300 font-semibold text text-lg pt-5 bg-transparent line-1 anim-typewriter revealUp">
                                            What is the purpose
                                    </p> 
                                    <p class="bg-transparent text-green-100 revealUp">
                                            ECSJC gives student leaders within the College of Engineering and Computer Science the opportunity to share ideas, plan joint events (e.g. ECS Expo), and discuss student issues.
                                    </p>
                                    <p class="text-green-300 opacity-100 font-semibold text-lg pt-5 bg-transparent line-1 anim-typewriter revealUp">
                                            Who can join ECSJC
                                    </p>
                                    <p class="bg-transparent text-green-100 pb-20 revealUp">
                                        
                                            ECSJC members are selected officers from clubs recognized by the College of Engineering and Computer Science and SO&L.
                                    </p>
                                    <p class="bg-transparent text-green-300 mt-5 ">
                                    Email: ecsjc@csus.edu</p>

                                
                                </div>
                            </div>
                            <div class="mx-auto w-full">
                                <div class="mx-auto text-center lg:revealUp " id="Events">
                                    <p class="text-green-300 lg:mt-10 text-lg p-5 lg:p-0">{this.state.ecsjc.specialEvent.clubname}</p>
                                    <img src = {this.state.ecsjc.specialEvent.flyer}  class=" lg:mx-auto lg:h-96 lg:w-80 lg:mt-5 lg:rounded-md lg:zoom" />
                                </div>
                            </div>
                        </div>
                </section>
                <section class="" >
                    <div className="bg-transparent grid lg:grid-cols-3 bg-slate-800 opacity-90 pb-20 ">
                        {
                            this.state.ecsjc.events.map((item)=> {
                                return(
                                    
                                    <div class="mx-auto text-center lg:revealUp " >
                                        <p class="text-green-300 lg:mt-10 text-lg p-5 lg:p-0">{item.clubname} Event</p>
                                        <img src={item.flyer} class=" lg:mx-auto lg:h-96  lg:w-72 lg:mt-5 lg:rounded-md lg:zoom" />
                                    </div>
                                )
                                })  
                        }

                    </div>
                </section>

                
                <div class="hidden mt-20  ml-20 mr-20 ">
                    <div class="">
                        <ImageSlider slides={SliderData}/>
                    </div>
                </div>

                <div class="m-0 w-full h-full bg-cover bg-transparent border-2 border-transparent "  style={{backgroundImage:"url('./ecsjcmeetwithdean.jpeg')"}}>       

                <div class="bg-transparent   lg:mb-40 lg:mt-20 " id="Clubs">
                    <div class="bg-transparent mx-auto text-center">
                        <p class="text-3xl text-green-100 opacity-90 bg-transparent pt-5" >Clubs and Organizations</p>
                    </div>
                    <div class='grid lg:grid-cols-3 grid-cols-1 2xl:ml-20 gap-4 p-10 bg-transparent text-center '>
                        <a href="/calgeo" target="_blank" class="bg-transparent lg:revealUp ">
                            <button class="bg-green-300 hover:bg-green-400 opacity-80 xl:w-80 w-full glow rounded-md shadow-xl border-2 border-gray-800/70" > 
                                <p class="bg-transparent p-3 text-green-900 font-semibod">Cal Geotech  </p>
                            </button>
                        </a>
                        <a class="bg-transparent lg:revealUp">
                            <button class="bg-cyan-300 hover:bg-cyan-400 shadow-xl rounded-md xl:w-80 w-full lg:w-80 opacity-80  border-2 border-gray-800/70">
                                <p class="bg-transparent p-3  text-cyan-900 font-semibold">Concrete Canoe</p>
                            </button>
                        </a>
                        <a class="bg-transparent lg:revealUp">
                            <button class="bg-green-800 hover:bg-green-900 shadow-xl opacity-80 xl:w-80 w-full lg:w-80 rounded-md  border-2 border-gray-800/70 " >
                            <p class="bg-transparent p-3 text-white font-semibold">Institute of Transport. Engineers</p>
                            </button>
                        </a>
                        <a class="bg-transparent lg:revealUp">
                            <button class="rounded-md shadow-xl bg-green-300 hover:bg-green-400 xl:w-80 w-full opacity-80 lg:w-80  border-2 border-gray-800/70" >
                                <p class="text-green-800 mx-auto p-3 font-semibold bg-transparent">Data Science</p>


                            </button>
                        </a>
                        <a class="bg-transparent lg:revealUp " href = "https://www.hornetracing.net/" target="_blank">
                            <button class="rounded-md  shadow-xl bg-cyan-300 hover:bg-cyan-400 xl:w-80 w-full lg:w-80 opacity-80  border-2 border-gray-800/70" >
                                <p class="bg-transparent p-3 text-cyan-800 font-semibold">Hornet Racing</p>
                            </button>
                        </a>
                        <a class="bg-transparent lg:revealUp" href="/swe" target="_blank">
                            <button class="bg-green-800 hover:bg-green-900 opacity-80 lg:w-80 xl:w-80 w-full shadow-xl rounded-md  border-2 border-gray-800/70" >
                                <p class="bg-transparent p-3  text-white font-semibold">Society of Women Engineers</p>

                            </button>
                        </a>
                        <a class="bg-transparent lg:revealUp" href="/nsbe">
                            <button  class="bg-cyan-300 hover:bg-cyan-400 opacity-80 shadow-xl w-full xl:w-80 lg:w-80 rounded-md text-white  border-2 border-gray-800/70" >
                            <p class="bg-transparen text-cyan-800  p-3 font-semibold">National Society of Black Engineers</p>
                            </button>
                        </a>
                        <a href="https://sacshpe.org/" class="bg-transparent lg:revealUp">
                            <button class="bg-green-800 hover:bg-green-900 opacity-80 shadow-xl w-full xl:w-80 lg:w-80 rounded-md text-white grow  border-2 border-gray-800/70" >   
                                <div class="bg-transparent">
                                    <p class="bg-transparent text-white p-3 font-semibold ">SHPE</p>
                                </div>
                            </button>
                        </a>
                        <a class="bg-transparent lg:revealUp " href="https://csus.acm.org/" target="_blank">
                            <button class="rounded-md shadow-xl bg-green-300 hover:bg-green-400 xl:w-80 w-full opacity-80 lg:w-80  border-2 border-gray-800/70 " >
                                <p class="text-green-800 mx-auto p-3 font-semibold bg-transparent">ACM</p>
                            </button>
                        </a>
                        <a  href="/dsa" target ="_blank" class="bg-transparent lg:revealUp">
                            <button  class="bg-cyan-300 hover:bg-cyan-400 opacity-80 shadow-xl w-full xl:w-80 lg:w-80 rounded-md text-white  border-2 border-gray-800/70" >
                            <p class="bg-transparen text-cyan-800  p-3 font-semibold">Data Structs & Algorithms</p>
                            </button>
                        </a>
                        <a class="bg-transparent lg:revealUp" target ="_blank" href="/asce">
                            <button class="rounded-md shadow-xl bg-green-300 hover:bg-green-400 xl:w-80 w-full opacity-80 lg:w-80  border-2 border-gray-800/70" >
                                <p class="text-green-800 mx-auto p-3 font-semibold bg-transparent">ASCE</p>


                            </button>
                        </a>
                        <a class="bg-transparent lg:revealUp " href = "/material-advantage" target="_blank">
                            <button class="rounded-md  shadow-xl bg-cyan-300 hover:bg-cyan-400 xl:w-80 w-full lg:w-80 opacity-80  border-2 border-gray-800/70" >
                                <p class="bg-transparent p-3 text-cyan-800 font-semibold">Material Advantage</p>
                            </button>
                        </a>
                    </div>
                </div>
                </div>
                <section class="" >

                    <div class=" bg-green-900/90 text-center text-3xl text-cyan-200 pt-10">Meet the ECS Director</div>
                    <div className="grid lg:grid-cols-2 bg-green-900/90  pb-20 ">
                        
                    
                        
                        <div class="mx-auto text-center lg:revealUp " >
                            <p class="text-green-300  lg:mt-10 text-lg p-5 lg:p-0">Tej Panchal</p>
                            <img src={"./tej.jpeg"} class=" border-2 border-slate-400 shadow-xl lg:mx-auto lg:h-96  lg:w-72 lg:mt-5 lg:rounded-md lg:zoom" />
                        </div>
                        <div class="mx-auto lg:revealUp mt-20 p-5">
                            <p class="text-slate-800 text-lg">Major: <span class="text-green-300">Computer Science</span></p>
                            <p class="text-slate-800 text-lg">1. What is your favorite class that you have took throughout your college career and why?</p>
                            <p class="text-green-300 text-md pl-5 pb-2">"CSC 135, It was challenging but it has a lot to learn from. The logic and some of the math behind made the class intuitively intresting"</p>

                            <p class="text-slate-800 text-lg">2.Favorite Place to Study?</p>
                            <p class="text-green-300 text-md pl-5 pb-2">Backside Library 3rd floor</p>
                            <p class="text-slate-800 text-lg">3.Favorite Place to get Coffee</p>

                            <p class="text-green-300 text-md pl-5 pb-2">"Coffee shops offer a uniquely calm atmosphere where people can gather with their friends to catch up over a cup of something warm so I won't say Starbucks, but a proper coffee shop in the downtown."</p>

                            <p class="text-slate-800 text-lg">4.Your perfect idea for a date</p>
                            <p class="text-green-300 text-md pl-5 pb-2">"Anywhere to salsa, preferably on a terrace"</p>



                        </div>


                    </div>
                </section>

                <div class="m-0 w-full h-full bg-cover bg-transparent  bg-slate-700" >       
                        <h2 class="text-green-300 text-3xl pt-10 text-center">Joint Council Members</h2>
                <div id="About Us" class="grid lg:grid-cols-2 grid-cols-1  bg-slate-700 lg:revealUp xl:revealUp  ">
                    <div class="bg-transparent grid lg:grid-cols-2 grid-cols-1 mt-10">
                        <div class="bg-transparent lg:mx-auto " >
                            <img class = "rounded-full shadow-xl w-40 h-40 mx-auto lg:border-2 border-slate-400 " style={{maxHeight:"350px"}} src={this.state.ecsjc.officers.president.picture} />     
                        </div>
                        <div class=" text-center m-5 text-xl text-green-300">
                               <p class="pt-10 text-cyan-200">{this.state.ecsjc.officers.president.name}</p>
                               <p class="text-center text-lime-300 text-lg">President</p> 
                               <p class="bg-transparent text-green-300 mt-2 text-sm">
                               {this.state.ecsjc.officers.president.email}</p>
                        </div>
                    </div>
                    <div class="bg-transparent grid lg:grid-cols-2 grid-cols-1   mt-10 rounded-md ">
                        <div class="bg-transparent lg:border-rounded lg:mx-auto" >
                            <img class = "rounded-full shadow-xl mx-auto w-40 h-40 lg:border-2 border-slate-400" style={{maxHeight:"350px"}} src={this.state.ecsjc.officers.vicepresident.picture}/>
                        </div>
                        <div class=" text-center m-5 text-xl  text-green-300">
                               <p class="pt-10 text-cyan-200">{this.state.ecsjc.officers.vicepresident.name}</p>
                               <p class="text-center text-lime-300 text-lg">Vice President</p>
                               <p class="bg-transparent text-green-300 mt-2 text-sm">
                            {this.state.ecsjc.officers.vicepresident.email}</p> 
                    
                        </div>
                    </div>

                    <div class="bg-transparent grid lg:grid-cols-2 grid-cols-1 mt-20 mb-10">
                        <div class="bg-transparent lg:mx-auto" >
                            <img class = "rounded-full lg:border-2 mx-auto h-40 w-40 lg:shadow-xl border-slate-400 " style={{maxHeight:"350px"}} src={this.state.ecsjc.officers.expochair.picture}/>     
                        </div>
                        <div class=" text-center m-5 text-xl ">
                            <p class="pt-10 text-cyan-200">{this.state.ecsjc.officers.expochair.name}</p>
                            <p class="text-center text-lime-300 ">Expo Chair</p> 
                            <p class="bg-transparent text-green-300 mt-2 text-sm">
                                {this.state.ecsjc.officers.expochair.email}</p>
                        </div>
                    </div>
                    
                    <div class="bg-transparent grid lg:grid-cols-2 grid-cols-1 mt-20 mb-10">
                        <div class="bg-transparent  lg:mx-auto " >
                            <img class = "rounded-full  shadow-xl mx-auto h-40 w-40 lg:border-2   border-slate-400 " style={{maxHeight:"350px"}} src={this.state.ecsjc.officers.treasurer.picture}/>    
                        </div>
                        <div class=" text-center m-5 text-xl ">
                                <p class="pt-10 text-cyan-200">{this.state.ecsjc.officers.treasurer.name}</p>
                               <p class="text-center text-lime-300  ">Treasurer</p> 
                               <p class="bg-transparent text-green-300 mt-2 text-sm">
                               {this.state.ecsjc.officers.treasurer.email}</p>
                        </div>
                    </div>
                    <div class="bg-transparent grid lg:grid-cols-2 grid-cols-1 mt-20 mb-10">
                        <div class="bg-transparent  lg:mx-auto " >
                            <img class = "rounded-full mx-auto shadow-xl h-40 w-40 lg:border-2   border-slate-400 " style={{maxHeight:"350px"}} src={this.state.ecsjc.officers.webmaster.picture}/>    
                        </div>
                        <div class=" text-center m-5 text-xl ">
                                <p class="pt-10 text-cyan-200">{this.state.ecsjc.officers.webmaster.name}</p>
                               <p class="text-center text-lime-300  ">{this.state.ecsjc.officers.webmaster.role}</p> 
                               <p class="bg-transparent text-green-300 mt-2 text-sm">
                                {this.state.ecsjc.officers.webmaster.email}</p>
                        </div>
                    </div>


                    

                </div>
                </div>



            </div>
        )
    }
}