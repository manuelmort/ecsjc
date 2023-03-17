import React from "react";

export default class ExpoFooter extends React.Component {

    render() {
        return (
        <div>
                        <div class="mt-20  text-center bg-yellow-500/50 ">
                                 
                                 <div class="grid lg:grid-cols-3 ">
                                   
                                        <div class="text-slate-800 lg:text-left mt-5 mx-auto lg:ml-20">
                                            Questions?
                                            <p class="mt-2 font-bold mb-2">Contacts</p>
                                        
                                            <p>ecsjs@csus.edu</p>
                                            <p> ECSJC President: garimasharama@csus.edu</p>
                                            <p> Expo Chair: hkaur19@csus.edu</p>

                                            
                                        </div>
                                        <div>
                                            <img class=" h-60 lg:ml-20 mx-auto" src="../EXPO/ecsjclogo.png"/>
                                        </div>

                                        <div class="">
                                            <img class="lg:mt-20" src="../EXPO/sacstateecs.png"/>
                                        </div>

                            </div>
                     </div>

        </div>)
    }

}