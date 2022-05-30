import React, { useState } from "react";

import "./Chart.css";

function Chart(props) {

    const [ isShow, setIsShow ] = useState(false);

    function showChart() {
        setIsShow(prevIsShow => !prevIsShow);
    }


    return (
        <>
            {isShow 
            ?
                <div className="chart-container">
                    <div className="chart-icon close-animation" onClick={showChart}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                        </svg>
                    </div>

                    <div className="best-time">
                        {props.bestTime.timerCounter 
                        ?
                        <>
                            <span>Melhor tempo:</span>
                            {props.bestTime.hours > 0 && <span>{props.bestTime.hours}h</span>}
                            {props.bestTime.minutes > 0 && <span>{props.bestTime.minutes}m</span>}
                            {props.bestTime.seconds >= 0 && <span>{props.bestTime.seconds}s</span>}
                        </>
                        :
                            <span>Sem dados, no momento. Jogue pelo menos uma vez.</span>
                        }
                    </div>
                </div>
            : 
            <div className="chart-icon" onClick={showChart}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bar-chart" viewBox="0 0 16 16" >
                    <path d="M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5v12h-2V2h2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z"
                    />
                </svg>
            </div>
            }
        </>
    );
}

export default Chart;