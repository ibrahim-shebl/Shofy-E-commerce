import React, { useEffect, useState } from 'react'
import './sessionTimer.css'
const SessionTimer = () => {
    const [days, setDays] = useState()
    const [hours, setHours] = useState()
    const [minutes, setMinutes] = useState()
    const [seconds, setSeconds] = useState()
    let interval;
    const countDown = () => {

        const destination = new Date('sep 8, 2024')
        interval = setInterval(() => {
            const now = new Date().getTime()
            const different = destination - now
            const days = Math.floor(different / (1000 * 60 * 60 * 24))
            const hours = Math.floor(different % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
            const minutes = Math.floor(different % (1000 * 60 * 60) / (1000 * 60))
            const seconds = Math.floor(different % (1000 * 60) / 1000)


            if (destination < 0) clearInterval(interval.current)
            else {
                setDays(days)
                setHours(hours)
                setMinutes(minutes)
                setSeconds(seconds)
            }
        });
    };





    useEffect(() => {
        countDown()
    })
    return (
        <div className="time_left">
                <div className="clock-wrapper d-flex align-items-center gap-3">
                    <div className="clock-data d-flex align-items-center gap-3">
                        <div className="text-center">
                            <h1 className="color size1 mb-2">{days}</h1>
                            {/* <h5 className="color size2">Days</h5> */}
                        </div>
                        <span className="color spn_">:</span>
                    </div>
                    <div className="clock-data d-flex align-items-center gap-3">
                        <div className="text-center">
                            <h1 className="color size1 mb-2">{hours}</h1>
                            {/* <h5 className="color size2">Hours</h5> */}
                        </div>
                        <span className="color spn_">:</span>
                    </div>
                    <div className="clock-data d-flex align-items-center gap-3">
                        <div className="text-center">
                            <h1 className="color size1 mb-2">{minutes}</h1>
                            {/* <h5 className="color size2"> Minutes</h5> */}
                        </div>
                        <span className="color spn_">:</span>
                    </div>
                    <div className="clock-data d-flex align-items-center gap-3">
                        <div className="text-center">
                            <h1 className="color size1 mb-2">{seconds}</h1>
                            {/* <h5 className="color size2">Seconds</h5> */}
                        </div>
                        <span className="color spn_">:</span>
                    </div>
                </div>
            
        </div>
    )
}

export default SessionTimer