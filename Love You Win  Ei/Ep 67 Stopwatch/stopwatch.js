const stopwatchmscTag = document.getElementsByClassName("stopwatchmsc")[0];
console.log(stopwatchmscTag);
const stopwatchmsTag = document.createElement("div");
stopwatchmsTag.classList.add("stopwatchms")
stopwatchmscTag.appendChild(stopwatchmsTag);

const stopWatchTag = document.getElementsByClassName("stopwatch") [0];
const startButtonTag = document.getElementsByClassName("startButton")[0];
const pauseButtonTag = document.getElementsByClassName("pauseButton")[0];
const continueButtonTag = document.getElementsByClassName("continueButton")[0];
const restartButtonTag = document.getElementsByClassName("restartButton")[0];
const stopButtonTag = document.getElementsByClassName("stopButton")[0];




let seconds = 0, minutes = 0, hours = 0, ms = 0;
 
const startTime = () => {
    ms += 1;
    if (ms === 1000) {
        ms = 0;
        seconds += 1;
        if (seconds === 60) {
            seconds = 0;
            minutes += 1;
    
            if (minutes === 60) {
                minutes = 0;
                hours += 1;
            }
        };
    };
    const secondText = seconds < 10 ? "0" + seconds.toString() : seconds;
    const minuteText = minutes < 10 ? "0" + minutes.toString() : minutes;
    const hourText = hours < 10 ? "0" + hours.toString() : hours;

    stopWatchTag.textContent = hourText + ":" + minuteText + ":" + secondText ;
    if (ms < 10) {
        stopwatchmsTag.textContent ="0"+"0"+ ms.toString();
    }else if (ms<100) {
        stopwatchmsTag.textContent ="0"+ms.toString();
    } else {
        stopwatchmsTag.textContent =ms;
    };
};



let setIntervalId;

startButtonTag.addEventListener("click", () => {
    clearInterval(setIntervalId);
    setIntervalId = setInterval(startTime, 1);
});

pauseButtonTag.addEventListener("click", () => {
    clearInterval(setIntervalId);
});

continueButtonTag.addEventListener("click", () => {
    clearInterval(setIntervalId);
    setIntervalId = setInterval(startTime, 1);
});

restartButtonTag.addEventListener("click", () => {
    clearInterval(setIntervalId);
    (seconds = 0), (minutes = 0 ), (hours = 0);
    setIntervalId = setInterval(startTime, 1);
    console.log("hi")
});

stopButtonTag.addEventListener("click", () => {
    (ms = 0) , (seconds = 0), (minutes = 0 ), (hours = 0) ;
    clearInterval(setIntervalId);
    stopWatchTag.textContent = "00:00:00";
    stopwatchmsTag.textContent = "000";
    
});





