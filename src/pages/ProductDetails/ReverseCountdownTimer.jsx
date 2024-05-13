import { useState, useEffect } from 'react';

function ReverseCountdownTimer({ endDate, label }) {
    const [currentTime, setCurrentTime] = useState(Date.now());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(Date.now());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const getTimeRemaining = () => {
        const difference = endDate - currentTime;
        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((difference % (1000 * 60)) / 1000),
        };
    };

    const renderCountdown = () => {
        const timeRemaining = getTimeRemaining();

        if (timeRemaining.days <= 0 && timeRemaining.hours <= 0 && timeRemaining.minutes <= 0 && timeRemaining.seconds <= 0) {
            // Handle expired timer (optional: display message or disable component)
            return <div>Time Expired!</div>;
        }

        return (
            <div>
                {label && <p style={{ marginBlock: ".5rem", fontSize: "16px", fontWeight: "500" }}>{label}</p>}
                <div style={{ display: "flex", alignItems: "center" ,gap:"2rem" }}>
                    <div style={{width:"75px",height:"75px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#f5f5f5" }}> <p style={{ fontSize: "20px", fontWeight: "600" }}> {timeRemaining.days !== 0 ? `${timeRemaining.days}`:0}</p> <p>DAYS</p></div>
                    <div style={{width:"75px",height:"75px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#f5f5f5" }}> <p style={{ fontSize: "20px", fontWeight: "600" }}>{timeRemaining.hours !== 0 ? `${timeRemaining.hours}`:0} </p> <p>HOURS</p></div>
                    <div style={{width:"75px",height:"75px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#f5f5f5" }}> <p style={{ fontSize: "20px", fontWeight: "600" }}>{timeRemaining.minutes !== 0? `${timeRemaining.minutes}`:0} </p> <p>MIN</p></div>
                    <div style={{width:"75px",height:"75px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#f5f5f5" }}> <p style={{ fontSize: "20px", fontWeight: "600" }}>{timeRemaining.seconds !== 0 ? `${timeRemaining.seconds}`:0} </p> <p>SEC</p></div>
                </div>
            </div>
        );
    };

    return renderCountdown();
}

export default ReverseCountdownTimer;
