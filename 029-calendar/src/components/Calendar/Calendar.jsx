import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import WeekDays from "../WeekDays/WeekDays";

import "./Calendar.css";


function Calendar({ date }) {
    const [ daysElement, setDaysElement ] = useState([]);
    const numberOfDaysInAMonth = new Date(date.getFullYear(), (date.getMonth()+1), 0).getDate();


    useEffect(() => {
        let newDays = [];

        for(let i = 1; i <= numberOfDaysInAMonth; i++) {

            if(i === new Date().getDate() 
            && date.getMonth() === new Date().getMonth()
            && date.getFullYear() === new Date().getFullYear()) {

                newDays.push(
                    <div 
                    key={`days-${i}`} 
                    className="today"
                    >
                        {i}
                    </div>
                );
            } else {
                newDays.push(
                    <div 
                    key={`days-${i}`} 
                    >
                        {i}
                    </div>
                );
            }
            
        }


        const weekday = new Date(date.getFullYear(), date.getMonth(), 1).getDay();

        for(let i = 0; i < weekday; i++) {
            newDays.unshift(
                <div key={`prev-days-${i}`} className="prev-days">
                    {
                        new Date(date.getFullYear(), date.getMonth(), (-i)).getDate()
                    }
                </div>
            );
        }

        const firstWeekDayOfNextMonth = new Date(date.getFullYear(), (date.getMonth()+1), 1).getDay();

        let j = 1;
        for(let i = firstWeekDayOfNextMonth; i <= 6; i++) {

            newDays.push(
                <div key={`next-days-${i}`} className="next-days">
                    {j}
                </div>
            );

            j++;
        }

        setDaysElement(newDays);

    }, [date]);


    return (
        <div className="calendar-container">
            <WeekDays />
            <div className="days">
                {daysElement}
            </div>
        </div>
    );
}

export default Calendar;