import React from "react";

export default class Warpzone extends React.Component {
    render() {
        return(
            <div>
                <h1 class="text-center text-green-900 text-4xl mt-5">Welcome to the ECS Warpzone!</h1>
                <p class="ml-20 mt-10"> 
                    This page is dedicated for helping others find websites to our ecs clubs and societies
                    
                </p>
                

                <div class="grid grid-cols-4 gap-4 m-20">
                

                    <div class ="rounded-lg bg-slate-800">
                        <div class = "p-5">
                            <img src="shpelogo.png" class=" w-10 h-10 md:w-48 md:h-auto rounded-lg mx-auto"></img>
                            <p class=" text-slate-400 text-lg font-small hover:text-white underline">Society of Hispanic Engineers (SHPE)</p>
                            <p class="text-slate-200">The Society of Hispanic Professional Engineers was founded in Los Angeles, California, in 1974 by a group of engineers employed by the city of Los Angeles. Their objective was to form a national organization of professional engineers to serve as role models in the Hispanic community.</p>
                            
                        </div>
                    </div>


                    <div class ="rounded-lg bg-slate-800">
                        <div class = "p-3">
                            <img src="vespalogo.png" class="w-20 h-20  rounded-full mx-auto"/>

                            <p class=" text-slate-400 text-lg font-small hover:text-white underline"><a href="https://cyberdyne-vespa.org">Sac State Cyberdyne Vespa</a></p>
                            <p class="text-slate-200">A Community for ECS Majors to learn each other's major's skillsets without the need of multi-majoring</p>
                            <br></br>
                            <p class="text-slate-200">
                            A friendly place were students can learn to do more with skillsets they already have.
                            Neccessary career helps for students to ensure a better chance at success in a growing market.
                            </p>
                            
                            
                        </div> 
                    </div>



                    <div class ="rounded-lg bg-slate-800">
                        <div class = "p-3">
                            <img src="acmlogo.png" class="w-20 h-20  rounded-full mx-auto"/>

                            <p class=" text-slate-400 text-lg font-small hover:text-white underline">Association for Computing Machinery (acmlogo)</p>
                            <p class="text-slate-200" >ACM is the premiere Computer Science & Computer Engineering-based club on the CSU Sacramento campus. Representing our national chapter at the university level, we strive to demonstrate the values and ethics described by our predecessors throughout our academic careers and into our professional ones.</p>
                            
                            
                        </div>
                    </div>

                    
                    <div class ="rounded-lg bg-slate-800">
                        <div class = "p-3">
                            <img src="calgeologo.png" class="w-30 h-20  rounded-full mx-auto"/>

                            <p class=" text-slate-400 text-lg font-small hover:text-white underline"><a href="https://calgeocsus.weebly.com/">The California Geotechnical Engineering Association</a></p>
                            <p class="text-slate-200" >CalGeo at Sac State is one of only 7 CalGeo student chapters in California and works to introduce students to the exciting field of geotechnical engineering. As one of the five main disciplines of civil engineering, geotechnical engineering assesses soil and rock properties in an engineering perspective and incorporates aspects of design with foundations, dams, earth structures, and more. </p>
                            
                            
                        </div>
                    </div>
                    <div class ="rounded-lg bg-slate-800">
                        <div class = "p-3">
                            <img src="hornetRacinglogo.png" class="w-30 h-20  rounded-full mx-auto"/>

                            <p class=" text-slate-400 text-lg font-small hover:text-white underline"><a href="https://www.hornetracing.net/">Hornet Racing</a></p>
                            <p class="text-slate-200" >Hornet Racing is California State University-Sacramento's Formula SAE team.  Formula SAE is an international, intercollegiate competition which challenges students to combine creative engineering and design with competitive business practices to build and race a purpose-built open-wheel formula style car. </p>
                            
                            
                        </div>
                    </div>

                    <div>09</div>
                </div>
                
                
                
            </div>
        )
    }

}