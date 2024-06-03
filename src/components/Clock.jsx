import './Clock.css'
import { useState } from 'react'
export default function Clock() {
    const [time, setTime] = useState(new Date())

    return (
        <div className="clock">
            <span>{time.toLocaleTimeString()}</span>
            <button onClick={() => setTime(new Date())}>
                refresh
            </button>
        </div>
    )
}