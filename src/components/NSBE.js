import React from "react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import MaterialAdvantageSideBar from "./MatAdvSideBar";
import data from "./data/data.json"

export default class MaterialAdvantage extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            calgeo: data.pages[2].calgeo
        }
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
            <div>
                <div class="m-0 w-full h-full bg-cover bg-transparent border-2 border-transparent <----???" style={{backgroundImage:"url('./MaterialAdvantage/MaterialAdvantageWallpaper.jpg')"}}>
                <MaterialAdvantageSideBar class="bg-transparent  "/>

                <div class="sac-state-gold mx-auto  2xl:m-96 lg:m-80 lg:mr-20 lg:ml-20 bg-transparent ">
                        <p  class="revealUp text-orange-500 font-medium text-medium p-3 lg:text-5xl lg:mt-20 lg:text-center md:text-center md:text-4xl ">CSUS Material Advantage Club
                        </p>
                        <div class=" opacity-90 text-center lg:mt-5 mt-10 mb-10">
                 
                        </div>
                    </div>
                
                
                </div>
                <section class="">

                    <div class="bg-orange-100  bg-opacity-70">
                        <p class="text-center bg-transparent text-orange-800 p-4 revealUp">Upcoming Hiking Social: This Saturday, Nov 12th at 10AM  Flyer with details below</p>
                    </div>
                    <div className="bg-transparent grid lg:grid-cols-2 bg-slate-800 opacity-90 ">
                            
                            <div class="bg-transparent lg:mt-20 m-5">
                                <div class ="text-left bg-transparent ml-10">

                                    <h1 class ="text-orange-600 font-semibold text-lg pt-5 bg-transparent line-1  revealUp">
                                                CSUS Material Advantage Club

                                    </h1>
                                    
                                    <h2 className=" text-md text-dark bg-transparent text-orange-100 revealUp"> This club is perfect for civil and mechanical engineering students who are seeking a more hands-on experience with material science in the form of blacksmithing and forging </h2>
                                    <p class="text-orange-600 font-semibold text text-lg pt-5 bg-transparent line-1 anim-typewriter revealUp">
                                            Being a member
                                    </p> 
                                    <p class="bg-transparent text-orange-100 revealUp">
                                    On top of gaining access to the forge at Sac State, being a member of this club will provide access to four prominent material science societies. This will open up opportunities to such as scholarships, internships, and more. </p>
                                    <p class="bg-transparent text-orange-600 mt-5 ">
                                    Ecs-mac@csus.edu</p>

                                
                                </div>
                            </div>
                            <div class="mx-auto w-full">
                              
                            </div>
                        </div>
                    </section>

                    <div class="bg-slate-800">
                    <p class="mx-auto text-center text-green-200 text-3xl revealUp pt-5">CALGEO Fall 2022  Officers</p>

                    <div class="grid lg:grid-cols-3 grid-cols-1  bg-slate-800 lg:revealUp xl:revealUp   " id="About Us">
                </div>
                </div>
                
            </div>
        )
    }
}