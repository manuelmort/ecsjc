import React from "react";
import ImageSlider from "./Slider/ImageSlider";
import { SliderData } from "./Slider/SliderData";
import "./Home.css"
import { Chrono } from "react-chrono";

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hidden:"isible bg-transparent"
        }
        this.showText = this.showText.bind(this)

    }
    showText() {
        this.setState({hidden:"visible bg-transparent"})
        console.log("text is now visible")
    }
    
    render(){
        const items =[
            {
            title:"September 22",
            contentTitle:"Joint Council Welcome Back BBQ",
            contentText:""
            },
            {
            title:"",
            contentTitle:"",
            contentText:""
            },
            {
            title:"",
            contentTitle:"",
            contentText:""
            }
        ]

        return(
            <div class="mt-1 mx-auto">
                <div class="sac-state-gold mx-auto text-left m-0 mr-20 ml-20  ">
                
                    <div className="bg-transparent ">

                        <h1 class="text-green-800 opacity-100 text-center text-4xl bg-transparent">
                            Engineering and Computer Science Joint Council
                        </h1>
                        <div class ="text-left bg-transparent ">
                            <h1 class ="text-green-800 font-semibold text-lg pt-5 bg-transparent ">
                                Engineering & Computer Science Joint Council

                            </h1>
                            <h2 className=" text-md text-dark bg-transparent ">ECSJC is a campus recognized organization, sponsored by ASI, which   provides a forum for networking and collaboration among student leaders in the College of Engineering and Computer Science as well as providing an avenue for the student voice.</h2>
                                
                            <p class="text-green-900 font-semibold text text-lg pt-5 bg-transparent">
                                What is the purpose
                            </p> 
                            <p class="bg-transparent">
                                ECSJC gives student leaders within the College of Engineering and Computer Science the opportunity to share ideas, plan joint events (e.g. ECS Expo), and discuss student issues.
                            </p>
                            <p class="text-green-800 opacity-100 font-semibold text-lg pt-5 bg-transparent">
                                Who can join ECSJC
                            </p>
                            <p class="bg-transparent">
                            
                                ECSJC members are selected officers from clubs recognized by the College of Engineering and Computer Science and SO&L.
                            </p>

                        
                        </div>

                    </div>
                    
                    

                </div>
                <div class="bg-green-700  bg-opacity-90 mt-20">
                    <p class="text-center bg-transparent text-yellow-300 p-4">Upcoming Event: ECSJC club officer meeting!</p>
                </div>
                
                    <div class="invisible lg:visible ml-20 mr-20">
                        <ImageSlider slides={SliderData}/>

                    </div>
                <div class="m-0 w-full h-full bg-cover bg-transparent " style={{backgroundImage:"url('./leaffullscreen.jpg')",minHeight:"500px"}}>       

                <div class="bg-transparent m-0 w-full h-full mb-20 " id="Clubs">
                    <div class="bg-transparent mx-auto text-center">
                        <p class="text-3xl text-green-300 opacity-90 bg-transparent pt-5">Clubs and Organizations</p>
                    </div>
                    <div class='grid lg:grid-cols-4 grid-cols-1 gap-4 p-10 bg-transparent'>
                        <a href="/geotech" class="bg-transparent">
                            <button class="bg-green-800 hover:bg-green-900 rounded-md shadow-xl grow club-card"> 
                                <p class="bg-transparent p-3 pt-3  text-zinc-100 font-bold">CalGeo</p>
                                <div class={this.state.hidden} onMouseMove={this.showText}>
                                
                                    <p class="bg-transparent p-3 font-semibold text-white">California Geotechnical Engineering Association</p>
                                    <p class="bg-transparent p-3 text-white">CSUS CalGeo's student chapter, a nonprofit, student-run organization aiming to provide members with resources to develop interests, skills, and connections in the geoprofessional workforce.</p>   
                                </div> 
                            </button>
                        </a>
                        <a class="bg-transparent">
                            <button class="bg-amber-400 shadow-xl rounded-md hover:bg-amber-500 grow club-card">
                                <p class="bg-transparent p-3  text-white font-bold">Concrete Canoe</p>
                                <p class="bg-transparent p-3 text-white font-bold">ASCE National Concrete Canoe Competition (NCCC)</p>
                                <p class="bg-transparent text-white">provides students with a practical application of the engineering principles they learn in the classroom, along with important team and project management skills they will need in their careers. </p>
                            </button>
                        </a>
                        <a class="bg-transparent">
                            <button class="bg-amber-400 shadow-xl rounded-md hover:bg-amber-500 grow club-card">
                            <p class="bg-transparent p-3 text-white font-bold">ITE</p> 
                            <p class="bg-transparent p-3 text-white font-semibold">Institute of Transportation Engineers</p>
                            <p class="bg-transparent p-3 text-white">ITE is committed to connecting students and professionals in the transportation industry.</p>
                            </button>
                        </a>
                        <a class="bg-transparent">
                            <button class="rounded-md shadow-xl bg-green-700 hover:bg-green-800 grow club-card">
                                <p class="text-white mx-auto p-3 font-bold bg-transparent">Data Science</p>
                                <p class="bg-transparent text-white">The Data Science Club explores the field of data science, which uses math, statistics, and computer science to extract useful knowledge from our society's increasing collection of data in order to advance scholarship and gain insights into every kind of subject matter, from art to zoology.</p>
                            </button>
                        </a>
                        <a class="bg-transparent">
                            <button class="rounded-md  shadow-xl sac-state-gold-2 hover:sac-state-gold-3 grow club-card">
                                <p class="bg-transparent p-3 text-white font font-semibold">Hornet Racing</p>
                                <p class="bg-transparent font-semibold p-3 text-white">Formula SAE </p>
                                <p class="bg-transparent p-3 text-white">challenges students to combine creative engineering and design with competitive business practices to build and race a purpose-built open-wheel formula style car</p>
                            </button>
                        </a>
                        <a class="bg-transparent">
                            <button class="bg-green-800  hover:bg-green-900 shadow-xl rounded-md grow club-card">
                                <p class="bg-transparent p-3  text-zinc-100 font-bold">SWE</p>
                                <p class="bg-transparent p-3 text-white font-semibold">Society of Women Engineers</p>
                                <p class="bg-transparent p-3 text-white">encourage men and women to achieve his or her full potential in careers as engineers and leaders, to expand the image of the engineering profession as a positive force improving the quality of life, and demonstrate the value of diversity.</p>

                            </button>
                        </a>
                        <a class="bg-transparent">
                            <button  class="bg-green-700 hover:bg-green-800 shadow-xl rounded-md text-white grow club-card">
                            <p class="bg-transparent p-3 font-bold">NSBE</p>
                            <p class="bg-transparent p-3 font-semibold">National Society of Black Engineers</p>
                            <p class="bg-transparent p-3">The mission of the National Society of Black Engineers is to increase the number of culturally responsible black engineers who succeed professionally and positively impact the community.</p>
                            </button>
                        </a>
                        <a class="bg-transparent">
                            <button class="bg-amber-400 hover:bg-amber-500 shadow-xl rounded-md text-white grow">   
                                <p class="bg-transparent p-3 font-bold">SHPE</p>
                                <div class="bg-transparent">
                                    <p class="bg-transparent p-3 font-semibold">Society of Hispanic Professional Engineers</p>
                                    <p class="bg-transparent p-3">SHPE changes lives by empowering the Hispanic community to realize its fullest potential and to impact the world through STEM awareness, access, support, and development.</p>
                                </div>
                            </button>
                        </a>
                    </div>
                </div>
                </div>
                    <div class="bg-transparent mx-auto" id="Calendar" style={{ maxWidth: "700px", height: "900px" }}>
                        
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
                            title: "Sept 22, 11:30 - 1:30PM",
                            cardTitle: "Joint Council Welcome Back BBQ",
                            cardSubtitle:"This is a great opportunity to connect with other ECS students, meet officers of ECS clubs and organizations,  and learn about services provided by ECS Student Success Center.",
                            cardDetailedText:""
                            },
                            {
                            title: "October 7 ",
                            cardTitle: "Virtual Career Fair",
                            },
                            {
                            title: "October 21 ",
                            cardTitle: "In-Person Career Fair",
                            }]}
                            mode="VERTICAL"
                        />
                        
                    </div>

                <div class="grid lg:grid-cols-2 grid-cols-1  gap-4 ">

                    <div class=""><img class = "lg:rounded-md" src="./boardmembers/president.png"/>
                        <div class="text-center m-5 text-xl font-semibold">
                            President
                        </div>
                    </div>
                    <div><img class = "lg:rounded-md" src="./boardmembers/vice.png"/>
                        <div class="text-center m-5 text-xl font-semibold">
                            Vice President
                        </div>
                    </div>
                    <div><img  class = "lg:rounded-md" src="./boardmembers/treasurer.png"/>
                        <div class="text-center text-xl m-5 font-semibold">
                            Treasurer
                        </div>
                    </div>
                    <div><img  class = "lg:rounded-md" src="./boardmembers/sec.png"/>
                        <div class="text-center m-5 text-xl font-semibold">
                            Secretary
                        </div>
                    </div>

                    

                </div>



            </div>
        )
    }
}