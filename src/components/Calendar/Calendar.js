import React from "react";
import CalendarDays from "./CalendarDays";

export default class Calendar extends React.Component {
    constructor(props) {
        super(props)
        this.weekdays = ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];
        this.months = ['January', 'February', 'March', 'April', 'May', 'June', 
        'July', 'August', 'September', 'October', 'November', 'December'];

        this.state = {
            currentDay: new Date() 
        }

    }

    render() {
        return(
            <div class="mx-auto text-center">
                Calendar Component
                <h2>{this.months[this.state.currentDay.getMonth()]} {this.state.currentDay.getFullYear()}</h2>



                <div>
                    {this.weekdays.map((weekday)=> {
                        return(
                            <div class="inline-block">
                                {weekday}
                                
                            </div>
                        )
                    })}
                </div>
                <CalendarDays day={this.state.currentDay} />

            </div>
        )
    }
}