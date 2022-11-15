import React from "react";
import * as THREE from 'three';
import NavBarSWE from "./NavBarSWE";
import { Link } from "react-scroll";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import CalGeoNav from "./CalGeoNav";
import data from "./data/data.json"

export default class CalGeo extends React.Component {
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
                <div class="m-0 w-full h-full bg-cover bg-transparent border-2 border-transparent <----???" style={{backgroundImage:"url('./calgeo.jpg')"}}>
                <CalGeoNav class="bg-transparent  "/>

                <div class="sac-state-gold mx-auto  2xl:m-96 lg:m-80 lg:mr-20 lg:ml-20 bg-transparent ">
                        <p  class="revealUp text-emerald-100 font-medium text-medium p-3 lg:text-5xl lg:mt-20 lg:text-center md:text-center md:text-4xl ">California GeoTechnical Engineering Association CSUS Chapter
                        </p>
                        <div class=" opacity-90 text-center lg:mt-5 mt-10 mb-10">
                 
                        </div>
                    </div>
                
                
                </div>
                <section class="">

                    <div class="bg-emerald-100  bg-opacity-70">
                        <p class="text-center bg-transparent text-emerald-800 p-4 revealUp">Upcoming Hiking Social: This Saturday, Nov 12th at 10AM  Flyer with details below</p>
                    </div>
                    <div className="bg-transparent grid lg:grid-cols-2 bg-slate-800 opacity-90 ">
                            
                            <div class="bg-transparent lg:mt-20 m-5">
                                <div class ="text-left bg-transparent ml-10">
                                    <img class="h-20 revealUp"src="./CALGEO officers/calgeologo.png"/>

                                    <h1 class ="text-emerald-600 font-semibold text-lg pt-5 bg-transparent line-1  revealUp">
                                                California GeoTechnical Engineering Association CSUS Chapter

                                    </h1>
                                    
                                    <h2 className=" text-md text-dark bg-transparent text-emerald-100 revealUp"> California State University-Sacramento CalGeo's student chapter of the California Geotechnical Engineering Association (CalGeo) is a nonprofit, student-run organization aiming to provide our members with resources to develop interests, skills, and connections in the geoprofessional workforce. </h2>
                                    <p class="text-emerald-600 font-semibold text text-lg pt-5 bg-transparent line-1 anim-typewriter revealUp">
                                            What is the purpose
                                    </p> 
                                    <p class="bg-transparent text-emerald-100 revealUp">
                                     Each semester, CalGeo at California State University-Sacramento hosts informational dinner sessions with practicing firms, lab/project/office/site tours, attends professional conferences, holds social events, coordinates professional development opportunities, and explores the vast field of geotechnical engineering. We aim to be the primary resource for students interested in pursuing geoprofessional careers, including geotechnical engineers, civil engineers, geologists, hydrologists, environmentalists, and water resources. As a student chapter, it is our responsibility and privilege to be a welcoming student body for all aspiring students interested in geoprofessional opportunities.</p>
                                    <p class="bg-transparent text-emerald-600 mt-5 ">
                                    Email: calgeosacramentostate@gmail.com</p>

                                
                                </div>
                            </div>
                            <div class="mx-auto w-full">
                                <div class="mx-auto text-center lg:revealUp " id="Events">
                                    <p class="text-amber-600 lg:mt-20 text-lg p-5 lg:p-0">CalGeo Event</p>
                                    <img src={this.state.calgeo.events} class="lg:mx-auto lg:h-96 lg:w-72 lg:mt-5 lg:rounded-md" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <div class="bg-slate-800">
                    <p class="mx-auto text-center text-green-200 text-3xl revealUp pt-5">CALGEO Fall 2022  Officers</p>

                    <div class="grid lg:grid-cols-2 grid-cols-1  bg-slate-800 lg:revealUp xl:revealUp   " id="About Us">
                    
                    <div class="bg-transparent grid lg:grid-cols-2 grid-cols-1 mt-10">
                        <div class="bg-transparent lg:mx-auto " >
                            <img class = "rounded-full shadow-xl w-40 h-40 mx-auto lg:border-2 border-slate-400 " style={{maxHeight:"350px"}} src="./CALGEO officers/bryan.png"/>     
                        </div>
                        <div class=" text-center m-5 text-xl text-emerald-300">
                               <p class="pt-10 text-cyan-200">{this.state.calgeo.officers.president.name}</p>
                               <p class="text-center text-lime-300 text-lg">{this.state.calgeo.officers.president.role}</p> 
                               <p class="bg-transparent text-green-300 mt-2 text-sm">
                               {this.state.calgeo.officers.president.email}</p>
                        </div>
                    </div>
                    <div class="bg-transparent grid lg:grid-cols-2 grid-cols-1   mt-10 rounded-md ">
                        <div class="bg-transparent lg:border-rounded lg:mx-auto" >
                            <img class = "rounded-full shadow-xl mx-auto w-40 h-40 lg:border-2 border-slate-400" style={{maxHeight:"350px"}} src={this.state.calgeo.officers.vicepresident.picture}/>
                        </div>
                        <div class=" text-center m-5 text-xl  text-green-300">
                               <p class="pt-10 text-cyan-200">{this.state.calgeo.officers.vicepresident.name}</p>
                               <p class="text-center text-lime-300 text-lg">{this.state.calgeo.officers.vicepresident.role}</p>
                               <p class="bg-transparent text-green-300 mt-2 text-sm">
                               {this.state.calgeo.officers.vicepresident.email}</p> 
                    
                        </div>
                    </div>
                    <div class="bg-transparent grid lg:grid-cols-2 grid-cols-1   mt-20 rounded-md ">
                        <div class="bg-transparent lg:border-rounded lg:mx-auto" >
                            <img class = "rounded-full shadow-xl mx-auto w-40 h-40 lg:border-2 border-slate-400" style={{maxHeight:"350px"}} src={this.state.calgeo.officers.secretary.picture}/>
                        </div>
                        <div class=" text-center m-5 text-xl  text-green-300">
                               <p class="pt-10 text-cyan-200">{this.state.calgeo.officers.secretary.name}</p>
                               <p class="text-center text-lime-300 text-lg">{this.state.calgeo.officers.secretary.role}</p>
                               <p class="bg-transparent text-green-300 mt-2 text-sm">
                               {this.state.calgeo.officers.secretary.email}</p> 
                    
                        </div>
                    </div>

                    <div class="bg-transparent grid lg:grid-cols-2 grid-cols-1 mt-20 mb-10">
                        <div class="bg-transparent lg:mx-auto" >
                            <img class = "rounded-full lg:border-2 mx-auto h-40 w-40 lg:shadow-xl border-slate-400 " style={{maxHeight:"350px"}} src={this.state.calgeo.officers.treasurer.picture} />     
                        </div>
                        <div class=" text-center m-5 text-xl ">
                            <p class="pt-10 text-cyan-200">{this.state.calgeo.officers.treasurer.name}</p>
                            <p class="text-center text-lime-300 ">{this.state.calgeo.officers.treasurer.role}</p> 
                            <p class="bg-transparent text-green-300 mt-2 text-sm">
                            {this.state.calgeo.officers.treasurer.email}</p>
                        </div>
                    </div>
                    
                    <div class="bg-transparent grid lg:grid-cols-2 grid-cols-1 mt-20 mb-10">
                        <div class="bg-transparent  lg:mx-auto " >
                            <img class = "rounded-full  shadow-xl mx-auto h-40 w-40 lg:border-2   border-slate-400 " style={{maxHeight:"350px"}} src={this.state.calgeo.officers.eventscoordinator.picture}/>    
                        </div>
                        <div class=" text-center m-5 text-xl ">
                                <p class="pt-10 text-cyan-200">{this.state.calgeo.officers.eventscoordinator.name}</p>
                               <p class="text-center text-lime-300  ">{this.state.calgeo.officers.eventscoordinator.role}</p> 
                               <p class="bg-transparent text-green-300 mt-2 text-sm">
                               {this.state.calgeo.officers.eventscoordinator.email}</p>
                        </div>
                    </div>
                    <div class="bg-transparent grid lg:grid-cols-2 grid-cols-1 mt-20 mb-10">
                        <div class="bg-transparent  lg:mx-auto " >
                            <img class = "rounded-full mx-auto shadow-xl h-40 w-40 lg:border-2   border-slate-400 " style={{maxHeight:"350px"}} src={this.state.calgeo.officers.platformschair.picture}/>    
                        </div>
                        <div class=" text-center m-5 text-xl ">
                                <p class="pt-10 text-cyan-200">{this.state.calgeo.officers.platformschair.name}</p>
                               <p class="text-center text-lime-300  ">{this.state.calgeo.officers.platformschair.role}</p> 
                               <p class="bg-transparent text-green-300 mt-2 text-sm">
                               {this.state.calgeo.officers.platformschair.email}</p>
                        </div>
                    </div>
                    <div class="bg-transparent grid lg:grid-cols-2 grid-cols-1 mt-20 mb-10">
                        <div class="bg-transparent lg:mx-auto" >
                            <img class = "rounded-full lg:border-2 mx-auto h-40 w-40 lg:shadow-xl border-slate-400 " style={{maxHeight:"350px"}} src="./CALGEO officers/angel.png" />     
                        </div>
                        <div class=" text-center m-5 text-xl ">
                            <p class="pt-10 text-cyan-200">{this.state.calgeo.officers.geowallrep.name}</p>
                            <p class="text-center text-lime-300 ">{this.state.calgeo.officers.geowallrep.role}</p> 
                            <p class="bg-transparent text-green-300 mt-2 text-sm">
                            {this.state.calgeo.officers.geowallrep.email}</p>
                        </div>
                    </div>
                    <div class="bg-transparent grid lg:grid-cols-2 grid-cols-1 mt-20 mb-10">
                        <div class="bg-transparent  lg:mx-auto " >
                            <img class = "rounded-full mx-auto shadow-xl h-40 w-40 lg:border-2    border-slate-400 " style={{maxHeight:"350px"}} src="./CALGEO officers/rudy.png" />    
                        </div>
                        <div class=" text-center m-5 text-xl ">
                                <p class="pt-10 text-cyan-200">{this.state.calgeo.officers.shadowofficer.name}</p>
                               <p class="text-center text-lime-300  ">{this.state.calgeo.officers.shadowofficer.role}</p> 
                               <p class="bg-transparent text-green-300 mt-2 text-sm">
                               {this.state.calgeo.officers.shadowofficer.email}</p>
                        </div>
                    </div>
                    

                    

                </div>
                </div>
                
            </div>
        )
    }
}