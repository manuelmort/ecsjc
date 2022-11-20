import React from "react";
import { Link } from "react-scroll";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import DSASideBar from "./DSASideBar";

export default class DSA extends React.Component {
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
                <div class="m-0 w-full h-full bg-cover bg-transparent border-2 border-transparent <----???" style={{backgroundImage:"url('./DSA.jpg')"}}>
                <DSASideBar/>
                <div class=" mx-auto  2xl:m-96 lg:m-80 lg:mr-20 lg:ml-20 bg-transparent ">
                        <p  class="text-sky-300 font-medium text-lg p-3 lg:text-5xl lg:mt-20 lg:text-center md:text-center md:text-4xl ">Data Structures and Algorithms Club</p>
                        <div class=" opacity-90 text-center lg:mt-5 mt-10 mb-10">
                 
                        </div>
                    </div>
                
                
                </div>
                <section class="">

                    <div class="bg-sky-100  bg-opacity-70">
                        <p class="text-center bg-transparent text-sky-800 p-4 revealUp">Meetings: Tuesdays 2:30pm - 3:30pm weekly</p>
                    </div>
                    <div className="bg-transparent grid lg:grid-cols-2 bg-slate-800 opacity-90 ">
                            
                            <div class="bg-transparent lg:mt-20 m-5">
                                <div class ="text-left bg-transparent ml-10">
                                    
                                    <h1 class ="text-sky-300 font-semibold text-lg pt-5 bg-transparent line-1 anim-typewriter2-ecsjc revealUp">
                                                Data Structures and Algorithms Club

                                    </h1>
                                    
                                    <h2 className=" text-md text-dark bg-transparent text-sky-100 revealUp"> The Data Structures and Algorithms club at Sac State is a student organization dedicated to the pursuit of technical prowess in regards to data structures and algorithms. </h2>
                                    <p class="text-sky-300 font-semibold text text-lg pt-5 bg-transparent line-1 anim-typewriter revealUp">
                                            What is the purpose
                                    </p> 
                                    <p class="bg-transparent text-sky-100 revealUp">
                                        We will provide a forum to exchange ideas and foster discussions for all students interested in the technical pursuit of this core computing concept. In addition, this club will provide technical interview practice, networking opportunities, and growth opportunities for any students interested. The club will foster social interaction for members through hosting of events such as programming workshops, group projects, weekly problem discussions and leetcode contests. It will coordinate events and lectures with the Computer Science Department at Sac State but is open to all students. 
                                    </p>
                                    <p class="bg-transparent text-sky-300 mt-5 ">
                                    Email: dsa@csus.edu</p>

                                
                                </div>
                            </div>
                            <div class="mx-auto w-full">
                                <div class="mx-auto text-center lg:revealUp " id="Events">
                                    <p class="text-sky-300 lg:mt-10 text-lg p-5 lg:p-0">DSA Event</p>
                                    <img src="./DSAblitz.png" class="lg:mx-auto lg:h-96 lg:w-72 lg:mt-5 lg:rounded-md" />
                                </div>
                            </div>
                        </div>
                    </section>
                
            </div>
        )
    }
}