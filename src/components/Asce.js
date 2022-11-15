import React from "react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import data from "./data/data.json"
import AsceNav from "./AsceNav";
export default class Asce extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            asce: data.pages[3].asce
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
                <div class="m-0 w-full h-full bg-cover bg-transparent border-2 border-transparent <----???" style={{backgroundImage:"url('./asce.jpg')"}}>
                <AsceNav class="bg-transparent  "/>

                <div class="sac-state-gold mx-auto  2xl:m-96 lg:m-80 lg:mr-20 lg:ml-20 rounded-lg bg-slate-800/40 revealUp   ">
                        <p  class="revealUp text-sky-100 font-medium text-medium p-3 lg:text-5xl lg:mt-5 lg:text-center md:text-center md:text-4xl ">American Society Of Civil Engineers <p class="text-sm"> CSUS Student Chapter</p>
                        </p>
                     
                    </div>
                
                
                </div>
                <section class="">

                    <div class="bg-sky-100  bg-opacity-70">
                        <p class="text-center bg-transparent text-sky-800 p-4 lg:revealUp">{this.state.asce.meeting}</p>
                    </div>
                    <div className="bg-transparent grid lg:grid-cols-2 bg-slate-800 opacity-90 ">
                            
                            <div class="bg-transparent lg:mt-20 m-5">
                                <div class ="text-left bg-transparent ml-10">
                                    <img class="h-20 revealUp"src="./ASCE officers/ascelogo.png"/>

                                    <h1 class ="text-sky-600 font-semibold text-lg pt-5 bg-transparent line-1  lg:revealUp">
                                                California GeoTechnical Engineering Association CSUS Chapter

                                    </h1>
                                    
                                    <h2 className=" text-md text-dark bg-transparent text-sky-100 revealUp"> The American Society of Civil Engineers represents more than 150,000 members of the civil engineering profession in 177 countries. Founded in 1852, ASCE is the nation’s oldest engineering society.</h2>
                                    <p class="text-sky-600 font-semibold text text-lg pt-5 bg-transparent line-1 anim-typewriter revealUp">
                                            What is the purpose
                                    </p> 
                                    <p class="bg-transparent text-sky-100 revealUp">
                                    ASCE stands at the forefront of a profession that plans, designs, constructs, and operates society’s economic and social engine – the built environment – while protecting and restoring the natural environment.</p>
                                    <p class="bg-transparent text-sky-100 revealUp" >Through the expertise of its active membership, ASCE is a leading provider of technical and professional conferences and continuing education, the world’s largest publisher of civil engineering content, and an authoritative source for codes and standards that protect the public.</p>
                                    <p class="bg-transparent text-sky-600 mt-5 ">
                                    Email:csusascepresident@gmail.com </p>
                                    <p class="bg-transparent text-sky-600 mt-5 ">
                                    Email ascesacramentostate@gmail.com</p>

                                
                                </div>
                            </div>
                            <div class="mx-auto w-full">
                                <div class="mx-auto text-center lg:revealUp " id="Events">
                                    <p class="text-amber-600 lg:mt-20 text-lg p-5 lg:p-0 lg:revealUp">ASCE Event</p>
                                    <img src={this.state.asce.events} class="lg:mx-auto lg:h-96 lg:w-72 lg:mt-5 lg:rounded-md lg:revealUp" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <div class="bg-slate-800">
                    <p class="mx-auto text-center text-green-200 text-3xl revealUp pt-5">ASCE Fall 2022  Officers</p>
                    <p class="pt-10 text-cyan-200 lg:ml-10 text-xl text-center">Elected Board:</p>
 
                    <div class="grid lg:grid-cols-3 grid-cols-1  bg-slate-800 lg:revealUp xl:revealUp   " id="About Us">

                    
                    <div class="bg-transparent grid lg:grid-cols-2 grid-cols-1 mt-10">
                        <div class="bg-transparent lg:mx-auto " >
                            <img class = "rounded-full shadow-xl w-40 h-40 mx-auto lg:border-2 border-slate-400 " style={{maxHeight:"350px"}} src={this.state.asce.officers.president.picture}/>     
                        </div>
                        <div class=" text-center m-5 text-xl text-emerald-300">
                               <p class="pt-10 text-cyan-200">{this.state.asce.officers.president.name}</p>
                               <p class="text-center text-lime-300 text-lg">{this.state.asce.officers.president.role}</p> 
                               <p class="bg-transparent text-green-300 mt-2 text-sm">
                               {this.state.asce.officers.president.email}</p>
                        </div>
                    </div>
                    <div class="bg-transparent grid lg:grid-cols-2 grid-cols-1   mt-10 rounded-md ">
                        <div class="bg-transparent lg:border-rounded lg:mx-auto" >
                            <img class = "rounded-full shadow-xl mx-auto w-40 h-40 lg:border-2 border-slate-400" style={{maxHeight:"350px"}} src={this.state.asce.officers.vicepresidentInternal.picture}/>
                        </div>
                        <div class=" text-center m-5 text-xl  text-green-300">
                               <p class="pt-10 text-cyan-200">{this.state.asce.officers.vicepresidentInternal.name}</p>
                               <p class="text-center text-lime-300 text-lg">{this.state.asce.officers.vicepresidentInternal.role}</p>
                               <p class="bg-transparent text-green-300 mt-2 text-sm">
                               {this.state.asce.officers.vicepresidentInternal.email}</p> 
                    
                        </div>
                    </div>
                    <div class="bg-transparent grid lg:grid-cols-2 grid-cols-1   mt-10 rounded-md ">
                        <div class="bg-transparent lg:border-rounded lg:mx-auto" >
                            <img class = "rounded-full shadow-xl mx-auto w-40 h-40 lg:border-2 border-slate-400" style={{maxHeight:"350px"}} src={this.state.asce.officers.vicepresidentExternal.picture}/>
                        </div>
                        <div class=" text-center m-5 text-xl  text-green-300">
                               <p class="pt-10 text-cyan-200">{this.state.asce.officers.vicepresidentExternal.name}</p>
                               <p class="text-center text-lime-300 text-lg">{this.state.asce.officers.vicepresidentExternal.role}</p>
                               <p class="bg-transparent text-green-300 mt-2 text-sm">
                               {this.state.asce.officers.vicepresidentExternal.email}</p> 
                    
                        </div>
                    </div>
                    <div class="bg-transparent grid lg:grid-cols-2 grid-cols-1   mt-20 rounded-md ">
                        <div class="bg-transparent lg:border-rounded lg:mx-auto" >
                            <img class = "rounded-full shadow-xl mx-auto w-40 h-40 lg:border-2 border-slate-400" style={{maxHeight:"350px"}} src={this.state.asce.officers.secretary.picture}/>
                        </div>
                        <div class=" text-center m-5 text-xl  text-green-300">
                               <p class="pt-10 text-cyan-200">{this.state.asce.officers.secretary.name}</p>
                               <p class="text-center text-lime-300 text-lg">{this.state.asce.officers.secretary.role}</p>
                               <p class="bg-transparent text-green-300 mt-2 text-sm">
                               {this.state.asce.officers.secretary.email}</p> 
                    
                        </div>
                    </div>

                    <div class="bg-transparent grid lg:grid-cols-2 grid-cols-1 mt-20 mb-10">
                        <div class="bg-transparent lg:mx-auto" >
                            <img class = "rounded-full lg:border-2 mx-auto h-40 w-40 lg:shadow-xl border-slate-400 " style={{maxHeight:"350px"}} src={this.state.asce.officers.treasurer.picture} />     
                        </div>
                        <div class=" text-center m-5 text-xl ">
                            <p class="pt-10 text-cyan-200">{this.state.asce.officers.treasurer.name}</p>
                            <p class="text-center text-lime-300 ">{this.state.asce.officers.treasurer.role}</p> 
                            <p class="bg-transparent text-green-300 mt-2 text-sm">
                            {this.state.asce.officers.treasurer.email}</p>
                        </div>
                    </div>
                    </div>
                    <p class="pt-10 text-cyan-200 lg:ml-10 text-xl text-center">Appointed Board:</p>
                    <div class="grid lg:grid-cols-3 grid-cols-1  bg-slate-800 lg:revealUp xl:revealUp   " id="About Us">

                    <div class="bg-transparent grid lg:grid-cols-2 grid-cols-1 mt-20 mb-10">
                        <div class="bg-transparent  lg:mx-auto " >
                            <img class = "rounded-full  shadow-xl mx-auto h-40 w-40 lg:border-2   border-slate-400 " style={{maxHeight:"350px"}} src={this.state.asce.officers.midpaccoordinator.picture}/>    
                        </div>
                        <div class=" text-center m-5 text-xl ">
                                <p class="pt-10 text-cyan-200">{this.state.asce.officers.midpaccoordinator.name}</p>
                               <p class="text-center text-lime-300  ">{this.state.asce.officers.midpaccoordinator.role}</p> 
                               <p class="bg-transparent text-green-300 mt-2 text-sm">
                               {this.state.asce.officers.midpaccoordinator.email}</p>
                        </div>
                    </div>
                    <div class="bg-transparent grid lg:grid-cols-2 grid-cols-1 mt-20 mb-10">
                        <div class="bg-transparent  lg:mx-auto " >
                            <img class = "rounded-full mx-auto shadow-xl h-40 w-40 lg:border-2   border-slate-400 " style={{maxHeight:"350px"}} src={this.state.asce.officers.eventschair.picture}/>    
                        </div>
                        <div class=" text-center m-5 text-xl ">
                                <p class="pt-10 text-cyan-200">{this.state.asce.officers.eventschair.name}</p>
                               <p class="text-center text-lime-300  ">{this.state.asce.officers.eventschair.role}</p> 
                               <p class="bg-transparent text-green-300 mt-2 text-sm">
                               {this.state.asce.officers.eventschair.email}</p>
                        </div>
                    </div>
                    <div class="bg-transparent grid lg:grid-cols-2 grid-cols-1 mt-20 mb-10">
                        <div class="bg-transparent lg:mx-auto" >
                            <img class = "rounded-full lg:border-2 mx-auto h-40 w-40 lg:shadow-xl border-slate-400 " style={{maxHeight:"350px"}} src={this.state.asce.officers.platformschair.picture} />     
                        </div>
                        <div class=" text-center m-5 text-xl ">
                            <p class="pt-10 text-cyan-200">{this.state.asce.officers.platformschair.name}</p>
                            <p class="text-center text-lime-300 ">{this.state.asce.officers.platformschair.role}</p> 
                            <p class="bg-transparent text-green-300 mt-2 text-sm">
                            {this.state.asce.officers.platformschair.email}</p>
                        </div>
                    </div>
                    <div class="bg-transparent grid lg:grid-cols-2 grid-cols-1 mt-20 mb-10">
                        <div class="bg-transparent  lg:mx-auto " >
                            <img class = "rounded-full mx-auto shadow-xl h-40 w-40 lg:border-2    border-slate-400 " style={{maxHeight:"350px"}} src={this.state.asce.officers.membershipchair.picture}/>    
                        </div>
                        <div class=" text-center m-5 text-xl ">
                                <p class="pt-10 text-cyan-200">{this.state.asce.officers.membershipchair.name}</p>
                               <p class="text-center text-lime-300  ">{this.state.asce.officers.membershipchair.role}</p> 
                               <p class="bg-transparent text-green-300 mt-2 text-sm">
                               {this.state.asce.officers.membershipchair.email}</p>
                        </div>
                    </div>
                    <div class="bg-transparent grid lg:grid-cols-2 grid-cols-1 mt-20 mb-10">
                        <div class="bg-transparent  lg:mx-auto " >
                            <img class = "rounded-full mx-auto shadow-xl h-40 w-40 lg:border-2    border-slate-400 " style={{maxHeight:"350px"}} src={this.state.asce.officers.alumnirelationschair.picture}/>    
                        </div>
                        <div class=" text-center m-5 text-xl ">
                                <p class="pt-10 text-cyan-200">{this.state.asce.officers.alumnirelationschair.name}</p>
                               <p class="text-center text-lime-300  ">{this.state.asce.officers.alumnirelationschair.role}</p> 
                               <p class="bg-transparent text-green-300 mt-2 text-sm">
                               {this.state.asce.officers.alumnirelationschair.email}</p>
                        </div>
                    </div>
                    <div class="bg-transparent grid lg:grid-cols-2 grid-cols-1 mt-20 mb-10">
                        <div class="bg-transparent  lg:mx-auto " >
                            <img class = "rounded-full mx-auto shadow-xl h-40 w-40 lg:border-2    border-slate-400 " style={{maxHeight:"350px"}} src={this.state.asce.officers.outreachChair.picture}/>    
                        </div>
                        <div class=" text-center m-5 text-xl ">
                                <p class="pt-10 text-cyan-200">{this.state.asce.officers.outreachChair.name}</p>
                               <p class="text-center text-lime-300  ">{this.state.asce.officers.outreachChair.role}</p> 
                               <p class="bg-transparent text-green-300 mt-2 text-sm">
                               {this.state.asce.officers.outreachChair.email}</p>
                        </div>
                    </div>
                    <div class="bg-transparent grid lg:grid-cols-2 grid-cols-1 mt-20 mb-10">
                        <div class="bg-transparent  lg:mx-auto " >
                            <img class = "rounded-full mx-auto shadow-xl h-40 w-40 lg:border-2    border-slate-400 " style={{maxHeight:"350px"}} src={this.state.asce.officers.shadowofficer.picture}/>    
                        </div>
                        <div class=" text-center m-5 text-xl ">
                                <p class="pt-10 text-cyan-200">{this.state.asce.officers.shadowofficer.name}</p>
                               <p class="text-center text-lime-300  ">{this.state.asce.officers.shadowofficer.role}</p> 
                               <p class="bg-transparent text-green-300 mt-2 text-sm">
                               {this.state.asce.officers.shadowofficer.email}</p>
                        </div>
                    </div>
                    
                    

                    

                </div>
                </div>
                
            </div>
        )
    }
}