import React from "react";
import { BsInstagram,BsDiscord } from "react-icons/bs";

export default class SWEFooter extends React.Component {
    render() {
        return(
            <div>
              <div class="bg-indigo-100  bg-opacity-70">
                <div class=" grid lg:grid-cols-4 grid-cols-1 ">

                  <div class="text-center mt-20 ">
                    <div class="text-center ">
                      <img src="./swelogo.png" class="h-20 mx-auto "/>
                    </div>
                  </div>


                  <div>

                  </div>

                  <div>

                  </div>

                  <div class="mt-20">
                    <div class="text-indigo-800 text-center " >
                        <div class="text-xl">
                          <p>Follow Us!</p>
                        <a href="https://instagram.com/swe_sacstate?igshid=MDE2OWE1N2Q=" target="_blank">
                          <BsInstagram class="inline-block hover:text-indigo-600  m-5"/>
                        </a>
                        <a href="https://discord.gg/tCDUGFaZSG" target="_blank">
                          <BsDiscord class="inline-block hover:text-indigo-600 m-5"/>
                        </a>
                        </div>
                    </div>
                  </div>
                  
                </div>
                  <div class="mx-auto  text-center text-indigo-800 opacity-50 mt-20 p-5">
                      <p class="mx-auto  ">ECSJC | Sacramento State University | 2022-2023</p>
                  </div>
              </div>

            </div>
        )
    }
}