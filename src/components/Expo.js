import React from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ExpoSideBar from './ExpoSideBar';
import  {GiAtom } from 'react-icons/gi'
import ExpoFooter from './ExpoFooter';

export default class Expo extends React.Component {
    constructor(props) {
        super(props)

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



    render() {
        
        return (
            <div>
            <div class="bg-slate-800 m-0 border-2 border-slate-800 ">
                <ExpoSideBar/>
                {/* Title and Entrance View */}
                <div class ="lg:mr-10 lg:ml-10">
                    <div class="mt-20  ml-5 ">
                        <p class="text-green-600 md:text-xl  lg:text-xl">Sacramento State presents: </p>
                        <div class="lg:text-7xl text-xl md:text-7xl rounded-md text-white font-bold lg:revealUp">Engineering and Computer Science <span class="text-green-600 rounded-sm font-bold">EXPO</span>2023</div>
                    
                    </div>
                    <div class="grid lg:grid-cols-2 ">
                        <div>
                        <p class="text-white mt-10 ml-5  text-left text-2xl lg:w-5/6 ">Striving to educate and inform fellow colleages and the members of our community about engineering and its many diverse fields of study.</p>
                        </div>
                        <div class="mx-auto lg:mr-72">
                            <GiAtom size={200} class="lg:ml-64 text-yellow-400 animate-spin-slow "/>
                        </div>
                    </div>
                

                    <div class="mt-20">
                        <p class="text-white">Saturday April 1st 2023</p>
                        <p class="text-white ">11am-3pm. BALLROOM UNIVERSITY UNION. CSUS</p>
                    </div>
                    {/*  End of title and Entrance View */}







                    {/*Pictures */}
                    <div class= "grid grid-cols-3 ">
                        <div class="p-3">
                            <img  class="rounded-md lg:w-90 lg:h-72" src = "../EXPO/expo2.jpeg"/>
                        </div>
                        <div class="p-3">
                            <img  class="rounded-md lg:w-90 lg:h-72" src = "../EXPO/expo3.jpeg"/>
                        </div>
                        <div class="p-3">
                            <img class="rounded-md lg:w-90 lg:h-72" src = "../EXPO/expo4.jpeg"/>
                        </div>
                        
                    </div>
                    {/*About */}
                    <div class=" mt-10">
                        <div class=" rounded-md   bg-amber-400/20">
                                                    
                                <div class="grid lg:grid-cols-2">

                                    <div class=" ">
                                         <p class="text-5xl mx-auto  font-bold p-3">About</p>

                                        <p class=" lg:text-2xl lg:w-5/6 p-3 ">Each year the College of Engineering and Computer Science and the ECS joint council hold the ECS exposition to showcase our club's and student's work over the year. </p>

                                    </div>
                                    <div class="p-3 ">
                                        <img class="rounded-md phonescreen md:phonescreen  lg:w-90  lg:h-72 m-0 lg:ml-20 lg:mb-10 " src = "../EXPO/expo5.jpeg"/>
                                    </div>
                                </div>
                         
                        </div>
                        <p class="text-white lg:mt-20 md:mt-20 m-10 text-2xl w-3/5 mx-auto">Exhibits from all ranges of engineering and computer science...</p>

                        <div class="bg-green-800/20 rounded-md mt-20   ">

                            <div class="grid lg:grid-cols-3 md:grid-cols-3 mt-2 p-5 ">
                                <div class="">
                                    <img class="rounded-md  lg:h-96 phonescreen  lg:w-72 " src = "../EXPO/tejaaron.jpeg"/>

                                </div>
                                <div class=""> 
                                    <img class="rounded-md lg:h-96  phonescreen lg:w-72 " src = "../EXPO/hashem.jpg"/>
                                </div>

                                <div class="">
                                    <p class="text-white  text-2xl lg:revealUp ">Our clubs and students take on the responsibility to provide and perform activities that not only provide information, but also do so in a creative and fun environment for everyone.</p>

                                </div>

                            </div>
                        </div>
                    </div>

                        

                
        
                </div>
                <ExpoFooter/>

            </div>
        </div>
        )
    }
}