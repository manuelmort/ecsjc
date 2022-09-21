import React, { useState } from "react";
import { getMonth } from "./Calendar Components/utils";
import Month from "./Calendar Components/Month"
import CalendarHeader from "./Calendar Components/CalendarHeader"

export default function Calender() {
    const [currentMonth, setCurrentMonth] = useState(getMonth())
    return(
        <div>
            <CalendarHeader/>
            <Month month = {currentMonth}/>
            
        </div>
    )
}