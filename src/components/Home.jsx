import React from "react";
import ImageSlider from "./Slider/ImageSlider";
import { SliderData } from "./Slider/SliderData";
import NavigationBar from "./NavigationBar";
import "./Home.css"
import { Chrono } from "react-chrono";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import {Link} from 'react-scroll'



export default class Home extends React.Component {
    constructor(props) {
        super(props)
        
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
      
    render(){
        
       

        return(
            
            <div class="bg-transparent">
                
                <div class="m-0 w-full h-full bg-cover bg-transparent border-2 border-transparent <----???" style={{backgroundImage:"url('./topView.jpg')"}}>
                    
    
                        <NavigationBar class="bg-transparent "/>

                    <div class="sac-state-gold mx-auto  2xl:m-96 lg:m-80 lg:mr-20 lg:ml-20 bg-transparent ">

                            <p class="text-green-200 font-medium text-lg p-3 lg:text-5xl lg:mt-20 lg:text-center md:text-center md:text-4xl revealUp">Engineering and Computer Science Joint Council</p>
                            <div class=" opacity-90 text-center lg:mt-5 mt-10 mb-10 revealUp">
                                <Link  to="Events"   smooth={true}
                                    class="bg-transparent text-xl text-green-100  p-2 rounded-md border-2 border-green-100/90    hover:text-green-300  hover:bg-opacity-30 hover:bg-green-300  ">
                                    Upcoming Events
                                </Link>
                            </div>
                        

                    </div>
                    
                    
                </div>
                <section class="">

                    <div class="bg-green-100  bg-opacity-70">
                        <p class="text-center bg-transparent text-green-800 p-4 revealUp">Upcoming Meeting: Valley Suite Room 7:00 - 8:30pm, Nov. 2</p>
                    </div>
                    <div className="bg-transparent grid lg:grid-cols-2 bg-slate-800 opacity-90 ">
                            
                            <div class="bg-transparent lg:mt-20 m-5">
                                <div class ="text-left bg-transparent ml-10">
                                    
                                    <h1 class ="text-green-300 font-semibold text-lg pt-5 bg-transparent line-1 anim-typewriter2-ecsjc revealUp">
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

                                
                                </div>
                            </div>
                            <div class="mx-auto w-full">
                                <div class="mx-auto text-center revealUp " id="Events">
                                    <p class="text-green-300 lg:mt-10 text-lg p-5 lg:p-0">ECSJC Event</p>
                                    <img src="./ecsjcflyer2.jpeg" class=" lg:mx-auto lg:h-96 lg:w-72 lg:mt-5 lg:rounded-md" />
                                </div>
                            </div>
                        </div>
                </section>
                <section class="" >

                    
                    <div className="bg-transparent grid lg:grid-cols-2 bg-slate-800 opacity-90 pb-20 ">
                            
                    <div class="mx-auto w-full">
                            <div class="mx-auto text-center revealUp " >
                                    <p class="text-green-300 lg:mt-10 text-lg p-5 lg:p-0">SWE Event</p>
                                    <img src="./spookyTreats.png" class=" lg:mx-auto lg:h-96  lg:w-72 lg:mt-5 lg:rounded-md" />
                                </div>
                            </div>
                            <div class="mx-auto w-full">
                                <div class="mx-auto text-center revealUp " >
                                    <p class="text-green-300 lg:mt-10 text-lg p-5 lg:p-0">DSA Event</p>
                                    <img src="./IntroToBinary.png" class=" lg:mx-auto lg:h-96 lg:w-72 lg:mt-5 lg:rounded-md" />
                                </div>
                            </div>
                    </div>
                </section>
                
                <div class="hidden mt-20  ml-20 mr-20 ">
                    <div class="">
                        <ImageSlider slides={SliderData}/>
                    </div>
                </div>

                <div class="m-0 w-full h-full bg-cover bg-transparent " >       

                <div class="bg-transparent   mb-20 revealUp" id="Clubs">
                    <div class="bg-transparent mx-auto text-center">
                        <p class="text-3xl text-green-600 opacity-90 bg-transparent pt-5" >Clubs and Organizations</p>
                    </div>
                    <div class='grid lg:grid-cols-4 grid-cols-1 2xl:ml-20 gap-4 p-10 bg-transparent '>
                        <a href="https://calgeocsus.weebly.com/" _target="blank" class="bg-transparent ">
                            <button class="bg-green-300 hover:bg-green-400 opacity-80 xl:w-80 w-full rounded-md shadow-xl border-2 border-gray-800/70" > 
                                <p class="bg-transparent p-3 text-green-900 font-semibod">Cal Geotech  </p>
                            </button>
                        </a>
                        <a class="bg-transparent ">
                            <button class="bg-cyan-300 hover:bg-cyan-400 shadow-xl rounded-md xl:w-80 w-full lg:w-80 opacity-80  border-2 border-gray-800/70">
                                <p class="bg-transparent p-3  text-cyan-900 font-semibold">Concrete Canoe</p>
                            </button>
                        </a>
                        <a class="bg-transparent ">
                            <button class="bg-green-800 hover:bg-green-900 shadow-xl opacity-80 xl:w-80 w-full lg:w-80 rounded-md  border-2 border-gray-800/70 " >
                            <p class="bg-transparent p-3 text-white font-semibold">Institute of Transport. Engineers</p>
                            </button>
                        </a>
                        <a class="bg-transparent ">
                            <button class="rounded-md shadow-xl bg-green-300 hover:bg-green-400 xl:w-80 w-full opacity-80 lg:w-80  border-2 border-gray-800/70" >
                                <p class="text-green-800 mx-auto p-3 font-semibold bg-transparent">Data Science</p>


                            </button>
                        </a>
                        <a class="bg-transparent ">
                            <button class="rounded-md  shadow-xl bg-cyan-300 hover:bg-cyan-400 xl:w-80 w-full lg:w-80 opacity-80  border-2 border-gray-800/70" >
                                <p class="bg-transparent p-3 text-cyan-800 font-semibold">Hornet Racing</p>
                            </button>
                        </a>
                        <a class="bg-transparent " href="/swe">
                            <button class="bg-green-800 hover:bg-green-900 opacity-80 lg:w-80 xl:w-80 w-full shadow-xl rounded-md  border-2 border-gray-800/70" >
                                <p class="bg-transparent p-3  text-white font-semibold">Society of Women Engineers</p>

                            </button>
                        </a>
                        <a class="bg-transparent">
                            <button  class="bg-cyan-300 hover:bg-cyan-400 opacity-80 shadow-xl w-full xl:w-80 lg:w-80 rounded-md text-white  border-2 border-gray-800/70" >
                            <p class="bg-transparen text-cyan-800  p-3 font-semibold">National Society of Black Engineers</p>
                            </button>
                        </a>
                        <a class="bg-transparent ">
                            <button class="bg-green-800 hover:bg-green-900 opacity-80 shadow-xl w-full xl:w-80 lg:w-80 rounded-md text-white grow  border-2 border-gray-800/70" >   
                                <div class="bg-transparent">
                                    <p class="bg-transparent text-white p-3 font-semibold ">SHPE</p>
                                </div>
                            </button>
                        </a>
                        <a class="bg-transparent " href="https://csus.acm.org/">
                            <button class="rounded-md shadow-xl bg-green-300 hover:bg-green-400 xl:w-80 w-full opacity-80 lg:w-80  border-2 border-gray-800/70 " >
                                <p class="text-green-800 mx-auto p-3 font-semibold bg-transparent">ACM</p>
                            </button>
                        </a>
                        <a class="bg-transparent">
                            <button  class="bg-cyan-300 hover:bg-cyan-400 opacity-80 shadow-xl w-full xl:w-80 lg:w-80 rounded-md text-white  border-2 border-gray-800/70" >
                            <p class="bg-transparen text-cyan-800  p-3 font-semibold">Data Structs & Algorithms</p>
                            </button>
                        </a>
                    </div>
                </div>
                </div>
                    <div class="bg-transparent mx-auto opacity-90 " id="Calendar" >
                        
                        <Chrono class="bg-transparent"
                            theme={{
                                primary: 'green',
                                secondary: 'transparent',
                                cardBgColor: 'transparent',
                                cardForeColor: 'black',
                                titleColor: 'black',
                                titleColorActive: 'black',
                            }}
                            items={[
                            
                            
                            {
                            title: "Oct 21",
                            cardTitle: "ECS Career Fair",
                            cardSubtitle:"This event is for ECS students and alumni seeking a career opportunity, internship, co-op or part-time experience in the field of engineering, computer science or construction management. A career fair is an opportunity for you to present yourself professionally in person to a potential employer, while showcasing your communication skills.  The keys to a successful job fair experience are preparation and follow up."
                            },
                            {
                                title: "Oct 28 ",
                                cardTitle:"Feel Good Friday: Harvest Festival + Open Climb",
                                cardSubtitle: "Come get spooky at the Challenge Center! This harvest festival event will feature arts & crafts, games, booths, and climbing! Sac State Students can leave with a painted pumpkin courtesy of SEO and Feel Good Friday. The ropes course on campus (behind Yosemite Hall) will be open to climb from 4:00 pm - 7:00 pm. This open climb is free. If you are a non-student, canned food donations to support the ASI Food Pantry and Sac State Students are encouraged!",
                            },
                            {
                                title: "Nov 1st",
                                cardTitle: "Meet with ECS Dean and Club",
                                cardSubtitle:"This is a great opportunity to connect with other ECS students, meet officers of ECS clubs and organizations,  and learn about services provided by ECS Student Success Center.",
                                cardDetailedText:""
                                }
                            ]}
                            mode="VERTICAL"
                            hideControls="true"
                        />
                        
                    </div>
                    <div class=" bg-gray-800 lg:p-20 mx-0">
                    <div class=" bg-transparent">
                        <div class=" lg:grid grid-cols-2 gap-20 bg-transparent mx-0 md:mx-auto">
                            <div class="bg-transparent lg:h-80 phonescreen ">
                            <iframe  
                                class= "lg:rounded-md shadow-md m-0 w-full h-full bg-cover lg:min-w-full lg:h-80  bg-transparent "
                             src="https://www.youtube.com/embed/4UVci93XOSQ?autoplay=1&controls=0&mute=1&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;loop" allowfullscreen></iframe>
                            </div>
                            <div class="bg-transparent  border-white mx-auto"> 
                                <div class="bg-transparent inline-block mx-auto">

                                   <div class="bg-transparent lg:flex">
                                        <img  class=" lg:w-20 lg:h-20 lg:flex lg:mr-5 lg:rounded-xl  sm:mx-auto " src="./cpelogo.png"/>
                                        
                                        
                                        <p class="bg-transparent  lg:mx-auto lg:text-left text-white font-semibold text-4xl lg:p-0 p-5"> 
                                                Subscribe to the
                                                Computer Engineering Youtube Channel!
                                        </p>
                                    </div>
                                   
                                    <p class="bg-transparent text-white lg:text-left mt-10">Channel offers: </p>

                                    <ul class="bg-transparent  lg:text-left list-none lg:list-disc ml-5">
                                        <li class="bg-transparent text-white">Homework Help for Math, Science and Engineering material</li>
                                        <li class="bg-transparent text-white">Programming tutorials</li>
                                        <li class="bg-transparent text-white">Cool drone aerial shots</li>
                                        <li class="bg-transparent text-white">Cat videos </li>

                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="m-0 w-full h-full bg-cover bg-transparent  bg-slate-700" >       

                <div class="grid lg:grid-cols-2 grid-cols-1  bg-slate-700 lg:revealUp xl:revealUp  ">
                    
                    <div class="bg-transparent grid lg:grid-cols-2 grid-cols-1 mt-10">
                        <div class="bg-transparent lg:mx-auto " >
                            <img class = "rounded-full shadow-xl w-40 h-40 mx-auto lg:border-2 border-slate-400 " style={{maxHeight:"350px"}} />     
                        </div>
                        <div class=" text-center m-5 text-xl text-green-300">
                               <p class="pt-10 text-cyan-200">Garima Sharma</p>
                               <p class="text-center text-lime-300 text-lg">President</p> 
                        </div>
                    </div>
                    <div class="bg-transparent grid lg:grid-cols-2 grid-cols-1   mt-10 rounded-md ">
                        <div class="bg-transparent lg:border-rounded lg:mx-auto" >
                            <img class = "rounded-full shadow-xl mx-auto w-40 h-40 lg:border-2 border-slate-400" style={{maxHeight:"350px"}} src="./boardmembers/tej.png"/>
                        </div>
                        <div class=" text-center m-5 text-xl  text-green-300">
                               <p class="pt-10 text-cyan-200">Tej Panchal</p>
                               <p class="text-center text-lime-300 text-lg">Vice President</p> 
                        </div>
                    </div>

                    <div class="bg-transparent grid lg:grid-cols-2 grid-cols-1 mt-20 mb-10">
                        <div class="bg-transparent lg:mx-auto" >
                            <img class = "rounded-full lg:border-2 mx-auto h-40 w-40 lg:shadow-xl border-slate-400 " style={{maxHeight:"350px"}} src="./boardmembers/heaman.png"/>     
                        </div>
                        <div class=" text-center m-5 text-xl ">
                            <p class="pt-10 text-cyan-200">Heamandeep Kaur</p>
                            <p class="text-center text-lime-300 ">Expo Chair</p> 
                        </div>
                    </div>
                    
                    <div class="bg-transparent grid lg:grid-cols-2 grid-cols-1 mt-20 mb-10">
                        <div class="bg-transparent  lg:mx-auto " >
                            <img class = "rounded-full  shadow-xl mx-auto h-40 w-40 lg:border-2   border-slate-400 " style={{maxHeight:"350px"}} src="./boardmembers/tala3.png"/>    
                        </div>
                        <div class=" text-center m-5 text-xl ">
                                <p class="pt-10 text-cyan-200">Tala Jaber</p>
                               <p class="text-center text-lime-300  ">Treasurer</p> 
                        </div>
                    </div>
                    <div class="bg-transparent grid lg:grid-cols-2 grid-cols-1 mt-20 mb-10">
                        <div class="bg-transparent  lg:mx-auto " >
                            <img class = "rounded-full mx-auto shadow-xl h-40 w-40 lg:border-2   border-slate-400 " style={{maxHeight:"350px"}} src="./boardmembers/manny4.png"/>    
                        </div>
                        <div class=" text-center m-5 text-xl ">
                                <p class="pt-10 text-cyan-200">Manny Morteo</p>
                               <p class="text-center text-lime-300  ">Webmaster</p> 
                        </div>
                    </div>

                    

                </div>
                </div>



            </div>
        )
    }
}