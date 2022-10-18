import React from "react";
import ImageSlider from "./Slider/ImageSlider";
import { SliderData } from "./Slider/SliderData";
import NavigationBar from "./NavigationBar";
import "./Home.css"
import { Chrono } from "react-chrono";


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
        // List of sentences
    var _CONTENT = [ 
        " 'ECSJC is a campus recognized organization, sponsored by ASI, which provides a forum for networking and collaboration among student leaders in the College of Engineering and Computer Science as well as providing an avenue for the student voice.", 
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
                _INTERVAL_VAL = setInterval(Delete, 10);
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
                    _INTERVAL_VAL = setInterval(Type, 200);
                }, 200);
            }
        }

            // Start the typing effect on load
        _INTERVAL_VAL = setInterval(Type, 40);   
         
        
        
    }
    render(){
        
       

        return(
            
            <div class="bg-transparent">
                
                <div class="m-0 w-full h-full bg-cover bg-transparent border-2 border-transparent <----???" style={{backgroundImage:"url('./topView.jpg')"}}>
                    
    
                        <NavigationBar class="bg-transparent "/>

                    <div class="sac-state-gold mx-auto  2xl:m-96 lg:m-80 lg:mr-20 lg:ml-20 bg-transparent ">

                            <p class="text-green-300 text-lg p-3 lg:text-5xl lg:mt-20 lg:text-center">Engineering and Computer Science Joint Council</p>
                        

                    </div>
                    
                    
                </div>
                <div class="bg-green-100  bg-opacity-70">
                    <p class="text-center bg-transparent text-green-800 p-4">Upcoming Event: Rockclimbing!</p>
                </div>
                <div className="bg-transparent grid lg:grid-cols-2 bg-slate-800 opacity-90">
                        
                        <div class="bg-transparent lg:mt-20 m-5">
                            <div class ="text-left bg-transparent ml-10">
                                
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
                
                <div class="hidden mt-20  ml-20 mr-20 ">
                    <div class="">
                        <ImageSlider slides={SliderData}/>
                    </div>
                </div>

                <div class="m-0 w-full h-full bg-cover bg-transparent " >       

                <div class="bg-transparent m-0 w-full h-full mb-20 " id="Clubs">
                    <div class="bg-transparent mx-auto text-center">
                        <p class="text-3xl text-green-400 opacity-90 bg-transparent pt-5">Clubs and Organizations</p>
                    </div>
                    <div class='grid lg:grid-cols-4 grid-cols-1 gap-4 p-10 bg-transparent'>
                        <a href="/geotech" class="bg-transparent">
                            <button class="bg-green-300 hover:bg-green-400 opacity-80  w-full rounded-md shadow-xl" > 
                                <p class="bg-transparent p-3 text-green-900 font-bold ">Cal Geotech Engineering Association</p>
                            </button>
                        </a>
                        <a class="bg-transparent">
                            <button class="bg-cyan-300 hover:bg-cyan-400 shadow-xl rounded-md w-full lg:w-80 opacity-80 ">
                                <p class="bg-transparent p-3  text-cyan-800 font-bold">Concrete Canoe</p>
                            </button>
                        </a>
                        <a class="bg-transparent">
                            <button class="bg-green-800 hover:bg-green-900 shadow-xl opacity-80 w-full lg:w-80 rounded-md " >
                            <p class="bg-transparent p-3 text-white font-bold">Institute of Transportation Engineers</p>
                            </button>
                        </a>
                        <a class="bg-transparent">
                            <button class="rounded-md shadow-xl bg-green-300 hover:bg-green-400 w-full opacity-80 lg:w-80 " >
                                <p class="text-green-800 mx-auto p-3 font-bold bg-transparent">Data Science</p>


                            </button>
                        </a>
                        <a class="bg-transparent">
                            <button class="rounded-md  shadow-xl bg-cyan-300 hover:bg-cyan-400 w-full lg:w-80 opacity-80 " >
                                <p class="bg-transparent p-3 text-cyan-800 font-bold">Hornet Racing</p>
                            </button>
                        </a>
                        <a class="bg-transparent">
                            <button class="bg-green-800 hover:bg-green-900 opacity-80 lg:w-80 w-full shadow-xl rounded-md " >
                                <p class="bg-transparent p-3  text-white font-bold">Society of Women Engineers</p>

                            </button>
                        </a>
                        <a class="bg-transparent">
                            <button  class="bg-cyan-300 hover:bg-cyan-400 opacity-80 shadow-xl w-full lg:w-80 rounded-md text-white" >
                            <p class="bg-transparen text-cyan-800  p-3 font-bold">National Society of Black Engineers</p>
                            </button>
                        </a>
                        <a class="bg-transparent">
                            <button class="bg-green-800 hover:bg-green-900 opacity-80 shadow-xl w-full lg:w-80 rounded-md text-white grow" >   
                                <div class="bg-transparent">
                                    <p class="bg-transparent text-white p-3 font-bold ">SHPE</p>
                                </div>
                            </button>
                        </a>
                    </div>
                </div>
                </div>
                    <div class="bg-transparent mx-auto opacity-90" id="Calendar" >
                        
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
                            title: "Sept 22",
                            cardTitle: "Joint Council Welcome Back BBQ",
                            cardSubtitle:"This is a great opportunity to connect with other ECS students, meet officers of ECS clubs and organizations,  and learn about services provided by ECS Student Success Center.",
                            cardDetailedText:""
                            },
                            
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
                            ]}
                            mode="VERTICAL"
                        />
                        
                    </div>
                <div class="m-0 w-full h-full bg-cover bg-transparent  bg-slate-700" >       

                <div class="grid lg:grid-cols-2 grid-cols-1  bg-slate-700   ">
                    
                    <div class="bg-transparent grid lg:grid-cols-2 grid-cols-1 mt-10">
                        <div class="bg-transparent lg:mx-auto " >
                            <img class = "rounded-full shadow-xl w-40 h-40 mx-auto lg:border-2 border-slate-400" style={{maxHeight:"350px"}} src="./boardmembers/tinkywinky.webp"/>     
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
                            <img class = "rounded-full  shadow-xl mx-auto h-40 w-40 lg:border-2   border-slate-400 " style={{maxHeight:"350px"}} src="./boardmembers/tala.png"/>    
                        </div>
                        <div class=" text-center m-5 text-xl ">
                                <p class="pt-10 text-cyan-200">Tala Jaber</p>
                               <p class="text-center text-lime-300  ">Treasurer</p> 
                        </div>
                    </div>
                    <div class="bg-transparent grid lg:grid-cols-2 grid-cols-1 mt-20 mb-10">
                        <div class="bg-transparent  lg:mx-auto " >
                            <img class = "rounded-full mx-auto shadow-xl h-40 w-40 lg:border-2   border-slate-400 " style={{maxHeight:"350px"}} src="./boardmembers/Manny.png"/>    
                        </div>
                        <div class=" text-center m-5 text-xl ">
                                <p class="pt-10 text-cyan-200">Manny Morteo</p>
                               <p class="text-center text-lime-300  ">ECSJC Webdev</p> 
                        </div>
                    </div>

                    

                </div>
                </div>



            </div>
        )
    }
}