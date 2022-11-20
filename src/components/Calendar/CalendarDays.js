import React from "react";

function CalendarDays(props) {
    let firstDayOfMonth = new Date(props.day.getFullYear(), props.day.getMonth(), 1);
    let weekdayOfFirstDay = firstDayOfMonth.getDay();
    let currentDays = [];


    for (let day = 0; day < 42; day++) {
        if (day === 0 && weekdayOfFirstDay === 0) {
        firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
        } else if (day === 0) {
        firstDayOfMonth.setDate(firstDayOfMonth.getDate() + (day - weekdayOfFirstDay));
        } else {
        firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
        }

        let calendarDay = {
        currentMonth: (firstDayOfMonth.getMonth() === props.day.getMonth()),
        date: (new Date(firstDayOfMonth)),
        month: firstDayOfMonth.getMonth(),
        number: firstDayOfMonth.getDate(),
        selected: (firstDayOfMonth.toDateString() === props.day.toDateString()),
        year: firstDayOfMonth.getFullYear()
        }

        currentDays.push(calendarDay);
    }
  
    return (
      <div >
          <div className="grid grid-cols-7">
                {
                currentDays.map((day) => {
                    return (
                    <div class=""
                            onClick={() => props.changeCurrentDay(day)}>
                        <div class="lg:h-28 lg:w-full bg-slate-800/90 border-2 border-green-200">
                            <div class="text-left text-green-200 top-0">
                                {day.number}
                            </div>
                            <div>
                              
                            </div>
                        </div>
                    </div>
                    )
                })
                }
            </div>
      </div>
    )
  }
  
  export default CalendarDays;