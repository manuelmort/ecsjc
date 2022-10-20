import React from "react";
import NavBarSWE from "../NavBarSWE";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

export default class Swe extends React.Component {
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
                overwrite: "auto"
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
                overwrite: "auto"
                }
            );
            },
            onLeaveBack: function () {
            gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
            }
        });
        });

    }
    
    render() {
        
        return(
            <div class="">
                <div class="m-0 w-full h-full bg-cover bg-transparent border-2 border-transparent <----???" style={{backgroundImage:"url('./sweforest2.jpg')"}}>
                    
    
                    <NavBarSWE class="bg-transparent "/>

                    <div class="sac-state-gold mx-auto  2xl:m-96 lg:m-80 lg:mr-20 lg:ml-20 bg-transparent ">

                        <p class="text-violet-100 font-medium text-lg p-3 lg:text-5xl lg:mt-20 lg:text-center md:text-center md:text-4xl revealUp">Society of Women Engineers</p>
                        

                    </div>
                
                
            </div>
            <section class="">

                <div class="bg-indigo-100  bg-opacity-70">
                    <p class="text-center bg-transparent text-indigo-800 p-4 revealUp">Upcoming Meeting: TBA</p>
                </div>
                <div className="bg-transparent grid lg:grid-cols-2 bg-slate-800 opacity-90 ">
                        
                        <div class="bg-transparent lg:mt-20 m-5">
                            <div class ="text-left bg-transparent ml-10">
                                
                                <h1 class ="text-indigo-300 font-semibold text-lg pt-5 bg-transparent line-1 anim-typewriter2-ecsjc revealUp">
                                            Society of Women Engineers

                                </h1>
                                
                                <h2 className=" text-md text-dark bg-transparent text-indigo-100 revealUp">The Society of Women Engineers was founded in 1950 and is a non-profit educational organization for professional engineers and engineering students. Professional and student chapters are found world-wide, and membership is open to both men and women. SWE's mission is to encourage men and women to achieve his or her full potential in careers as engineers and leaders, to expand the image of the engineering profession as a positive force in improving the quality of life, and to demonstrate the value of diversity.</h2>
                               
                                <p class="bg-transparent text-indigo-300 mt-5 ">
                                Club Email: swe@csus.edu</p>
                               
                            

                            
                            </div>
                        </div>
                        <div class="mx-auto w-full" to="Events">
                            <div class="mx-auto text-center revealUp " >
                                <p class="text-indigo-300 lg:mt-10">Upcoming Event</p>
                                <img src="./events/ECSJC_Flyer.jpeg" class=" lg:mx-auto lg:mb-10 lg:h-96 lg:mt-5 lg:rounded-md" />
                            </div>
                        </div>
                    </div>                
                    <div class=" bg-slate-700 lg:revealUp xl:revealUp bg-transparent" id="Follow Us">   
                        <p class="mx-auto text-center text-indigo-200 text-3xl revealUp pt-5">SWE 2022-2023 Officers</p>

                    <div class="grid lg:grid-cols-2 grid-cols-1 ">
                        <div class="bg-transparent grid lg:grid-cols-2 grid-cols-1 mt-10">
                            <div class="bg-transparent lg:mx-auto " >
                                <img class = "rounded-full shadow-xl w-40 h-40 mx-auto lg:border-2 border-slate-400 " style={{maxHeight:"350px"}} />     
                            </div>
                            <div class=" text-center m-5 text-xl ">
                                <p class="pt-10 text-purple-200">Judy Magana</p>
                                <p class="text-center text-indigo-300 text-lg">President</p> 
                            </div>
                        </div>
                        <div class="bg-transparent grid lg:grid-cols-2 grid-cols-1   mt-10 rounded-md ">
                            <div class="bg-transparent lg:border-rounded lg:mx-auto" >
                                <img class = "rounded-full shadow-xl mx-auto w-40 h-40 lg:border-2 border-slate-400" style={{maxHeight:"350px"}} />
                            </div>
                            <div class=" text-center m-5 text-xl  text-green-300">
                                <p class="pt-10 text-purple-200">Yesenia Silva</p>
                                <p class="text-center text-indigo-300 text-lg">Vice President</p> 
                            </div>
                        </div>
                        <div class="bg-transparent grid lg:grid-cols-2 grid-cols-1   mt-10 rounded-md ">
                            <div class="bg-transparent lg:border-rounded lg:mx-auto" >
                                <img class = "rounded-full shadow-xl mx-auto w-40 h-40 lg:border-2 border-slate-400" style={{maxHeight:"350px"}} src="../boardmembers/heaman.png"/>
                            </div>
                            <div class=" text-center m-5 text-xl  text-green-300">
                                <p class="pt-10 text-purple-200">Heamandeep Kaur</p>
                                <p class="text-center text-indigo-300 text-lg">Vice President</p> 
                            </div>
                        </div>
                        <div class="bg-transparent grid lg:grid-cols-2 grid-cols-1 mt-20 mb-10">
                            <div class="bg-transparent  lg:mx-auto " >
                                <img class = "rounded-full  shadow-xl mx-auto h-40 w-40 lg:border-2   border-slate-400 " style={{maxHeight:"350px"}} />    
                            </div>
                            <div class=" text-center m-5 text-xl ">
                                    <p class="pt-10 text-purple-200">Bhupinder jit Mehton</p>
                                <p class="text-center text-indigo-300  ">Treasurer</p> 
                            </div>
                        </div>

                        <div class="bg-transparent grid lg:grid-cols-2 grid-cols-1 mt-20 mb-10">
                            <div class="bg-transparent lg:mx-auto" >
                                <img class = "rounded-full lg:border-2 mx-auto h-40 w-40 lg:shadow-xl border-slate-400 " style={{maxHeight:"350px"}} />     
                            </div>
                            <div class=" text-center m-5 text-xl ">
                                <p class="pt-10 text-purple-200">Maritz Juarez</p>
                                <p class="text-center text-indigo-300 ">Professional-Coordinator</p> 
                            </div>
                        </div>
                        <div class="bg-transparent grid lg:grid-cols-2 grid-cols-1 mt-20 mb-10">
                            <div class="bg-transparent lg:mx-auto" >
                                <img class = "rounded-full lg:border-2 mx-auto h-40 w-40 lg:shadow-xl border-slate-400 " style={{maxHeight:"350px"}} />     
                            </div>
                            <div class=" text-center m-5 text-xl ">
                                <p class="pt-10 text-purple-200">Heamandeep Kaur</p>
                                <p class="text-center text-indigo-300 ">Event-Coordinator</p> 
                            </div>
                        </div>
                        

                        <div class="bg-transparent grid lg:grid-cols-2 grid-cols-1 mt-20 mb-10">
                            <div class="bg-transparent  lg:mx-auto " >
                                <img class = "rounded-full mx-auto shadow-xl h-40 w-40 lg:border-2   border-slate-400 " style={{maxHeight:"350px"}} />    
                            </div>
                            <div class=" text-center m-5 text-xl ">
                                    <p class="pt-10 text-purple-200">Emma Docto</p>
                                <p class="text-center text-indigo-300  ">Social Media Manager</p> 
                            </div>
                        </div>

                    </div> 

                </div>
            </section>
            </div>
        )
    }
}