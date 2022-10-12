import React from "react";
import ImageSlider from "./Slider/ImageSlider";
import { SliderData } from "./Slider/SliderData";
import NavigationBar from "./NavigationBar";
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
    componentDidMount() {
        // List of sentences
    var _CONTENT = [ 
        " 'Welcome ", 
        " 'Bienvenidos ",
        " '환영! ",
        " 'स्वागत हे! ",
        " 'مرحبا ",
        " 'Bienvenue ",
        " 'ברוך הבא" ,
        " 'ようこそ ",
        " '欢迎 ", 
        " 'Chào mừng ",
        " 'Maligayang pagdating ",
    ];

    // Current sentence being processed
    var _PART = 0;

    // Character number of the current sentence being processed 
    var _PART_INDEX = 0;

    // Holds the handle returned from setInterval
    var _INTERVAL_VAL;

    // Element that holds the text
    var _ELEMENT = document.querySelector("#text");

    // Cursor element 
    var _CURSOR = document.querySelector("#cursor");

    // Implements typing effect
    function Type() { 
        // Get substring with 1 characater added
        var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
        _ELEMENT.innerHTML = text;
        _PART_INDEX++;

        // If full sentence has been displayed then start to delete the sentence after some time
        if(text === _CONTENT[_PART]) {
            // Hide the cursor
            _CURSOR.style.display = 'none';

            clearInterval(_INTERVAL_VAL);
            setTimeout(function() {
                _INTERVAL_VAL = setInterval(Delete, 60);
            }, 1000);
        }
    }

        // Implements deleting effect
        function Delete() {
            // Get substring with 1 characater deleted
            var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
            _ELEMENT.innerHTML = text;
            _PART_INDEX--;

            // If sentence has been deleted then start to display the next sentence
            if(text === '') {
                clearInterval(_INTERVAL_VAL);

                // If current sentence was last then display the first one, else move to the next
                if(_PART == (_CONTENT.length - 1))
                    _PART = 0;
                else
                    _PART++;
                
                _PART_INDEX = 0;

                // Start to display the next sentence after some time
                setTimeout(function() {
                    _CURSOR.style.display = 'inline-block';
                    _INTERVAL_VAL = setInterval(Type, 80);
                }, 200);
            }
        }

            // Start the typing effect on load
        _INTERVAL_VAL = setInterval(Type, 100);    
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
            
            <div class=" mx-auto">
                <div class="m-0 w-full h-full bg-cover bg-transparent " style={{backgroundImage:"url('./leaffullscreen2.jpg')",minHeight:"700px"}}>       
                    <NavigationBar class="bg-transparent"/>

                <div class="sac-state-gold mx-auto text-left m-0 lg:mr-20 lg:ml-20 bg-transparent " style ={{maxWidth:"1900px"}}>
                    <div class="text-green-400 text-5xl text-center">Engineering and Computer Science Joint Council</div>
                    <div className="bg-transparent grid lg:grid-cols-2 ">
                        <div class="bg-transparent text-2xl mt-10">

                            <div class="bg-transparent-700 rounded-lg mt-20 m-5">
                                <p class="bg-transparent text-green-300">public class <span class="text-green-500">Welcome</span>()<span>&#123;</span></p>
                                <p class="text-white ml-10"><span class="text-lime-300">public static void </span>main(<span class="text-green-300">String</span> args[])<span class="text-green-500">&#123;</span></p>
                                <p class="text-green-300 opacity-100 text-center  bg-transparent  pt-5 ">
                                    
                                    System.out.<span class="text-lime-200">println</span>(<span id="text" class="text-cyan-300"></span> <span class="text-cyan-300">Hornets!' </span>);
                                     
                                </p>

                                <p class="text-white ml-10"><span class="text-green-500">&#125;</span></p>
                                <p class="text-white"><span class="text-green-500">&#125;</span></p>
                                <div class="text-white">
                                <div id="container">
                                    <div id="text"></div>
                                    <div id="cursor"> </div>
                                 </div>
                                    
                                </div>
                            </div>
                            
                        </div>
                        <div class="bg-transparent lg:mt-20 m-5">
                            <div class ="text-left bg-transparent ">
                                
                                <h1 class ="text-green-300 font-semibold text-lg pt-5 bg-transparent line-1 anim-typewriter2-ecsjc">
                                            Engineering & Computer Science Joint Council

                                 </h1>
                                
                                <h2 className=" text-md text-dark bg-transparent text-green-100 ">ECSJC is a campus recognized organization, sponsored by ASI, which   provides a forum for networking and collaboration among student leaders in the College of Engineering and Computer Science as well as providing an avenue for the student voice.</h2>
                                <p class="text-green-300 font-semibold text text-lg pt-5 bg-transparent line-1 anim-typewriter">
                                        What is the purpose
                                </p> 
                                <p class="bg-transparent text-green-100">
                                        ECSJC gives student leaders within the College of Engineering and Computer Science the opportunity to share ideas, plan joint events (e.g. ECS Expo), and discuss student issues.
                                </p>
                                <p class="text-green-300 opacity-100 font-semibold text-lg pt-5 bg-transparent line-1 anim-typewriter">
                                        Who can join ECSJC
                                </p>
                                <p class="bg-transparent text-green-100 pb-20">
                                    
                                        ECSJC members are selected officers from clubs recognized by the College of Engineering and Computer Science and SO&L.
                                </p>

                            
                            </div>
                        </div>

                    </div>
                </div>
                    
                    

                </div>
                <div class="bg-green-100  bg-opacity-70">
                    <p class="text-center bg-transparent text-green-800 p-4">Upcoming Event: ECSJC club officer meeting!</p>
                </div>
                
                <div class="invisible lg:visible ml-20 mr-20 ">
                    <div class="">
                        <ImageSlider slides={SliderData}/>
                    </div>
                </div>
                <div class="m-0 w-full h-full bg-cover bg-transparent " style={{backgroundImage:"url('./leaffullscreen2.jpg')",minHeight:"500px"}}>       

                <div class="bg-transparent m-0 w-full h-full mb-20 " id="Clubs">
                    <div class="bg-transparent mx-auto text-center">
                        <p class="text-3xl text-green-300 opacity-90 bg-transparent pt-5">Clubs and Organizations</p>
                    </div>
                    <div class='grid lg:grid-cols-4 grid-cols-1 gap-4 p-10 bg-transparent'>
                        <a href="/geotech" class="bg-transparent">
                            <button class="bg-green-300 opacity-90 hover:bg-green-300  rounded-md shadow-xl grow club-card"> 
                                <p class="bg-transparent p-3 pt-3  text-green-800 font-bold">CalGeo</p>
                                
                                <p class="bg-transparent p-3 text-green-900 font-bold ">California Geotechnical Engineering Association</p>
                                <p class="bg-transparent p-3 text-green-900">CSUS CalGeo's student chapter, a nonprofit, student-run organization aiming to provide members with resources to develop interests, skills, and connections in the geoprofessional workforce.</p>   
                            </button>
                        </a>
                        <a class="bg-transparent">
                            <button class="bg-amber-400 shadow-xl rounded-md hover:bg-amber-500 opacity-90 grow club-card">
                                <p class="bg-transparent p-3  text-amber-800 font-bold">Concrete Canoe</p>
                                <p class="bg-transparent p-3  text-amber-800 font-bold">ASCE National Concrete Canoe Competition (NCCC)</p>
                                <p class="bg-transparent flex text-amber-800 pt-5">provides students with a practical application of the engineering principles they learn in the classroom, along with important team and project management skills they will need in their careers. </p>
                            </button>
                        </a>
                        <a class="bg-transparent">
                            <button class="bg-green-800 shadow-xl opacity-90 rounded-md  grow club-card">
                            <p class="bg-transparent p-3 text-white font-bold">ITE</p> 
                            <p class="bg-transparent p-3 text-white font-bold">Institute of Transportation Engineers</p>
                            <p class="bg-transparent p-3 text-white pt-5">ITE is committed to connecting students and professionals in the transportation industry.</p>
                            </button>
                        </a>
                        <a class="bg-transparent">
                            <button class="rounded-md shadow-xl bg-green-300 opacity-80  grow club-card">
                                <p class="text-green-800 mx-auto p-3 font-bold bg-transparent pt-10">Data Science</p>

                                <p class="bg-transparent text-green-900 pt-10"> explores the field of data science, which uses math, statistics, and computer science to extract useful knowledge from our society's increasing collection of data in order to advance scholarship and gain insights into every kind of subject matter, from art to zoology.</p>
                            </button>
                        </a>
                        <a class="bg-transparent">
                            <button class="rounded-md  shadow-xl bg-amber-400 opacity-90 hover:sac-state-gold-3 grow club-card">
                                <p class="bg-transparent p-3 text-amber-800 font-bold">Hornet Racing</p>
                                <p class="bg-transparent font-bold p-3 text-amber-800">Formula SAE </p>
                                <p class="bg-transparent p-3 text-amber-800">challenges students to combine creative engineering and design with competitive business practices to build and race a purpose-built open-wheel formula style car</p>
                            </button>
                        </a>
                        <a class="bg-transparent">
                            <button class="bg-green-800 opacity-90  shadow-xl rounded-md grow club-card">
                                <p class="bg-transparent p-3  text-white font-bold">SWE</p>
                                <p class="bg-transparent p-3 text-white font-bold">Society of Women Engineers</p>
                                <p class="bg-transparent p-3 text-white pt-5 ">encourage men and women to achieve his or her full potential in careers as engineers and leaders, to expand the image of the engineering profession as a positive force improving the quality of life, and demonstrate the value of diversity.</p>

                            </button>
                        </a>
                        <a class="bg-transparent">
                            <button  class="bg-amber-400 opacity-90 hover:bg-amber-500shadow-xl rounded-md text-white grow club-card">
                            <p class="bg-transparent text-amber-800 p-3 font-bold">NSBE</p>
                            <p class="bg-transparen text-amber-800 t p-3 font-bold">National Society of Black Engineers</p>
                            <p class="bg-transparent text-amber-800 p-3">The mission of the National Society of Black Engineers is to increase the number of culturally responsible black engineers who succeed professionally and positively impact the community.</p>
                            </button>
                        </a>
                        <a class="bg-transparent">
                            <button class="bg-green-800 opacity-90 shadow-xl rounded-md text-white grow">   
                                <p class="bg-transparent p-3 text-white font-bold">SHPE</p>
                                <div class="bg-transparent">
                                    <p class="bg-transparent text-white p-3 font-bold">Society of Hispanic Professional Engineers</p>
                                    <p class="bg-transparent text-white pt-5">SHPE changes lives by empowering the Hispanic community to realize its fullest potential and to impact the world through STEM awareness, access, support, and development.</p>
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
                <div class="m-0 w-full h-full bg-cover bg-transparent " style={{backgroundImage:"url('./officerbackground.jpg')",minHeight:"500px"}}>       

                <div class="grid lg:grid-cols-2 grid-cols-1  gap-4 bg-transparent lg:m-20 ">
                    
                    
                    <div class="bg-transparent grid grid-cols-2">
                        <div class="bg-transparent" >
                            <img class = "lg:rounded-md border-2" style={{maxHeight:"300px"}} src="./boardmembers/vice.png"/>
                            
                        </div>
                        <div class=" text-center m-5 text-xl font-semibold">
                                President
                        </div>
                    </div>
                    <div class="bg-transparent grid grid-cols-2">
                        <div class="bg-transparent" >
                            <img class = "lg:rounded-full" style={{maxHeight:"300px"}} src="./boardmembers/vice.png"/>
                            
                        </div>
                        <div class=" text-center m-5 text-xl font-semibold">
                                Vice President
                        </div>
                    </div>
                    <div class="bg-transparent grid grid-cols-2 ">
                        <div class="bg-transparent" >
                            <img class = "lg:rounded-md " style={{maxHeight:"300px"}} src="./boardmembers/vice.png"/>
                            
                        </div>
                        <div class=" text-center m-5 text-xl font-semibold">
                                Secretary
                        </div>
                    </div>
                    <div class="bg-transparent grid grid-cols-2 ">
                        <div class="bg-transparent" >
                            <img class = "lg:rounded-md " style={{maxHeight:"300px"}} src="./boardmembers/vice.png"/>
                            
                        </div>
                        <div class=" text-center m-5 text-xl font-semibold">
                                Treasurer
                        </div>
                    </div>

                    

                </div>
                </div>



            </div>
        )
    }
}